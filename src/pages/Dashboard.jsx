import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { Users, Eye, BarChart3 as ChartIcon, TrendingUp, ArrowUp, ArrowDown, Plus } from 'lucide-react';
import DashboardSidebar from '../components/shared/DashboardSidebar';

/* ========== Mock Data ========== */

const kpiData = [
  { label: 'Total Audience', value: '245.3K', change: '+12.4%', up: true, icon: Users },
  { label: 'Weekly Views', value: '1.2M', change: '+8.1%', up: true, icon: Eye },
  { label: 'Top Content', value: 'Video Tutorials', change: 'Trending', up: true, icon: ChartIcon },
  { label: 'Engagement Rate', value: '6.8%', change: '+2.3%', up: true, icon: TrendingUp },
];

const categoryData = [
  { name: 'Tutorials', pct: 78 },
  { name: 'Reviews', pct: 65 },
  { name: 'Unboxings', pct: 52 },
  { name: 'Interviews', pct: 45 },
  { name: 'Behind Scenes', pct: 38 },
];

const weeklyData = [
  { day: 'Mon', views: 1200000, engagement: 68000 },
  { day: 'Tue', views: 1900000, engagement: 102000 },
  { day: 'Wed', views: 1400000, engagement: 75000 },
  { day: 'Thu', views: 2100000, engagement: 125000 },
  { day: 'Fri', views: 2800000, engagement: 158000 },
  { day: 'Sat', views: 1600000, engagement: 88000 },
  { day: 'Sun', views: 1800000, engagement: 96000 },
];

const gapData = [
  { type: 'Tutorials', demand: 78, output: 45, gap: '+33%', action: 'Create more', priority: 'high' },
  { type: 'Reviews', demand: 65, output: 70, gap: '-5%', action: 'Good match', priority: 'medium' },
  { type: 'Unboxings', demand: 52, output: 10, gap: '+42%', action: 'Opportunity 🚀', priority: 'high' },
  { type: 'Interviews', demand: 45, output: 30, gap: '+15%', action: 'Create more', priority: 'medium' },
  { type: 'Behind Scenes', demand: 38, output: 5, gap: '+33%', action: 'Opportunity 🚀', priority: 'high' },
];

const topContent = [
  { title: 'React Tutorial for Beginners', views: '245K', eng: '8.2%', trend: 'up' },
  { title: 'Top 10 VS Code Extensions', views: '189K', eng: '6.7%', trend: 'up' },
  { title: 'Building a REST API in Node.js', views: '156K', eng: '5.9%', trend: 'up' },
  { title: 'TypeScript vs JavaScript 2026', views: '132K', eng: '7.4%', trend: 'up' },
  { title: 'CSS Grid Deep Dive', views: '98K', eng: '4.8%', trend: 'down' },
];

/* ========== Custom Tooltip ========== */
const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-neutral-300 rounded-lg px-4 py-3 shadow-lg">
        <p className="text-sm font-semibold text-neutral-900 mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-sm" style={{ color: p.color }}>
            {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/* ========== Main Dashboard Component ========== */
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-neutral-200/30">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-neutral-300 flex items-center justify-between px-6 shrink-0">
          <div>
            <h1 className="text-lg font-bold text-brand-navy">Dashboard</h1>
            <p className="text-xs text-neutral-500">Your content performance overview</p>
          </div>
          <button className="btn-primary btn-sm gap-2">
            <Plus className="h-4 w-4" /> Connect Account
          </button>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">

            {/* ===== Row 1: KPI Cards ===== */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {kpiData.map((kpi, i) => (
                <div key={i} className="card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{kpi.label}</span>
                    <div className="w-9 h-9 rounded-lg bg-brand-teal-light flex items-center justify-center">
                      <kpi.icon className="h-4 w-4 text-brand-teal" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy mb-1">{kpi.value}</div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${kpi.up ? 'text-success' : 'text-error'}`}>
                    {kpi.up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                    <span>{kpi.change}</span>
                    <span className="text-neutral-300 font-normal ml-1">vs last week</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== Row 2: Charts ===== */}
            <div className="grid xl:grid-cols-2 gap-6">
              {/* Bar Chart — Content Categories */}
              <div className="card">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Content Categories Your Audience Watches
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E5EA" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 12, fill: '#8896A6' }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                      <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#4A5568' }} width={110} />
                      <Tooltip content={<ChartTooltip />} cursor={{ fill: '#E6FCF5' }} />
                      <Bar dataKey="pct" fill="#00D4AA" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Area Chart — Weekly Trends */}
              <div className="card">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Weekly Viewing Trends
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#00D4AA" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="engGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E5EA" />
                      <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#8896A6' }} />
                      <YAxis tick={{ fontSize: 12, fill: '#8896A6' }} tickFormatter={(v) => v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v} />
                      <Tooltip content={<ChartTooltip />} />
                      <Area type="monotone" dataKey="views" stroke="#00D4AA" fill="url(#viewsGradient)" strokeWidth={2} name="Views" />
                      <Area type="monotone" dataKey="engagement" stroke="#3B82F6" fill="url(#engGradient)" strokeWidth={2} name="Engagement" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* ===== Row 3: Tables ===== */}
            <div className="grid xl:grid-cols-2 gap-6">
              {/* Content Gap Analysis */}
              <div className="card">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Content Gap Analysis
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-300">
                        <th className="text-left font-semibold text-neutral-700 py-3 pr-2">Content Type</th>
                        <th className="text-left font-semibold text-neutral-700 py-3 px-2">Demand</th>
                        <th className="text-left font-semibold text-neutral-700 py-3 px-2">Output</th>
                        <th className="text-left font-semibold text-neutral-700 py-3 px-2">Gap</th>
                        <th className="text-right font-semibold text-neutral-700 py-3 pl-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gapData.map((row, i) => (
                        <tr key={i} className="border-b border-neutral-300 last:border-0 hover:bg-brand-teal-light/40 transition-colors">
                          <td className="py-3 pr-2 font-medium text-neutral-900">{row.type}</td>
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                                <div className="h-full bg-chart-blue rounded-full" style={{ width: `${row.demand}%` }} />
                              </div>
                              <span className="text-neutral-500 text-xs w-7">{row.demand}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                                <div className="h-full bg-chart-orange rounded-full" style={{ width: `${row.output}%` }} />
                              </div>
                              <span className="text-neutral-500 text-xs w-7">{row.output}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <span className={`font-semibold text-sm ${
                              row.gap.startsWith('+') ? 'text-success' : 'text-neutral-500'
                            }`}>
                              {row.gap}
                            </span>
                          </td>
                          <td className="py-3 pl-2 text-right">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                              row.priority === 'high'
                                ? 'bg-brand-teal-light text-brand-teal'
                                : 'bg-neutral-200 text-neutral-700'
                            }`}>
                              {row.action}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Performing Content */}
              <div className="card">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Top Performing Content
                </h3>
                <div className="space-y-1">
                  {topContent.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-brand-teal-light/40 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-bold text-neutral-300 w-5">{String(i + 1).padStart(2, '0')}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-neutral-900 truncate max-w-[200px]">{item.title}</p>
                          <p className="text-xs text-neutral-500">{item.views} views</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-semibold text-neutral-900">{item.eng}</span>
                        <div className={`flex items-center gap-1 text-xs ${item.trend === 'up' ? 'text-success' : 'text-error'}`}>
                          {item.trend === 'up' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                          engagement
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== Connect Account CTA ===== */}
            <div className="card border-dashed border-2 border-neutral-300 bg-neutral-200/20 text-center py-10">
              <div className="w-14 h-14 rounded-full bg-brand-teal-light flex items-center justify-center mx-auto mb-4">
                <Plus className="h-7 w-7 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Connect a Social Account</h3>
              <p className="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
                Link your YouTube, Instagram, or TikTok to unlock personalized audience insights and data-backed content recommendations.
              </p>
              <button className="btn-primary gap-2">
                <Plus className="h-4 w-4" /> Connect Account
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
