// Vercel Serverless Function — YouTube Channel Stats
// Proxy for YouTube Data API v3 to keep the API key server-side

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { channel } = req.query;
  if (!channel) return res.status(400).json({ error: 'Missing "channel" query parameter' });

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'YOUTUBE_API_KEY not configured' });

  try {
    // Search for channel
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(channel)}&type=channel&key=${apiKey}&maxResults=1`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    if (!searchData.items || searchData.items.length === 0) return res.status(404).json({ error: 'Channel not found' });

    const channelId = searchData.items[0].id.channelId;
    const channelInfo = searchData.items[0].snippet;

    // Get channel statistics
    const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${apiKey}`;
    const statsRes = await fetch(statsUrl);
    const statsData = await statsRes.json();
    if (!statsData.items || statsData.items.length === 0) return res.status(404).json({ error: 'Statistics not found' });

    const stats = statsData.items[0].statistics;

    // Get recent videos
    const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=10&key=${apiKey}&type=video`;
    const videosRes = await fetch(videosUrl);
    const videosData = await videosRes.json();
    const videoIds = (videosData.items || []).map(v => v.id.videoId).filter(Boolean);

    let videoStats = [];
    if (videoIds.length > 0) {
      const vidStatsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds.join(',')}&key=${apiKey}`;
      const vidStatsRes = await fetch(vidStatsUrl);
      const vidStatsData = await vidStatsRes.json();
      videoStats = (vidStatsData.items || []).map(v => ({
        id: v.id,
        title: v.snippet.title,
        publishedAt: v.snippet.publishedAt,
        thumbnail: v.snippet.thumbnails?.medium?.url || v.snippet.thumbnails?.default?.url,
        views: parseInt(v.statistics.viewCount || 0),
        likes: parseInt(v.statistics.likeCount || 0),
        comments: parseInt(v.statistics.commentCount || 0),
      }));
    }

    return res.status(200).json({
      channel: {
        id: channelId,
        title: channelInfo.title,
        description: channelInfo.description,
        thumbnail: channelInfo.thumbnails?.default?.url,
        customUrl: channelInfo.customUrl,
      },
      stats: {
        subscribers: parseInt(stats.subscriberCount || 0),
        totalViews: parseInt(stats.viewCount || 0),
        totalVideos: parseInt(stats.videoCount || 0),
      },
      recentVideos: videoStats,
    });
  } catch (error) {
    console.error('YouTube API error:', error);
    return res.status(500).json({ error: 'Failed to fetch YouTube data' });
  }
}
