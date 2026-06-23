import { Link } from 'react-router-dom';
import { BarChart3, Search, TrendingUp, Users, Zap, Target, ArrowRight, Star } from 'lucide-react';
import logo from '../assets/audiencelens-logo.png';

export default function LandingPage() {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-[#0D1B2A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-teal/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                See What Your Audience <span className="text-brand-teal">Actually</span> Watches
              </h1>
              <p className="text-lg text-neutral-300 mb-8 max-w-lg">
                Stop guessing. AudienceLens analyzes viewer behavior to show you exactly what content to make next.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="btn-primary text-lg px-8 py-4">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="btn-secondary text-lg px-8 py-4 !text-white !border-neutral-500 hover:!bg-white/10">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/audiencelens-landing-hero.png" 
                alt="AudienceLens Dashboard Preview"
                className="w-full rounded-xl shadow-2xl border border-white/10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden bg-brand-navy/80 border border-white/10 rounded-xl p-8 h-80 items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-brand-teal mx-auto mb-4" />
                  <p className="text-white/60 text-sm">Hero preview dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Bar ===== */}
      <section className="bg-neutral-200/50 border-y border-neutral-300 py-6">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-neutral-500 mb-2">Trusted by 1,000+ creators and brands</p>
          <div className="flex justify-center gap-8 md:gap-16 opacity-50">
            <span className="text-lg font-bold text-neutral-700">CreatorHub</span>
            <span className="text-lg font-bold text-neutral-700">BrandFlow</span>
            <span className="text-lg font-bold text-neutral-700">InfluencePro</span>
            <span className="text-lg font-bold text-neutral-700">ContentLab</span>
            <span className="text-lg font-bold text-neutral-700">SocialPulse</span>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-16">
            Everything you need to understand your audience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Audience Demographics',
                desc: 'Know exactly who\'s watching — age, location, interests, and more.'
              },
              {
                icon: Search,
                title: 'Content Gap Analysis',
                desc: 'See what your audience wants that you\'re not creating yet.'
              },
              {
                icon: TrendingUp,
                title: 'Trend Detection',
                desc: 'Spot rising topics in your niche before they peak.'
              },
              {
                icon: BarChart3,
                title: 'Competitor Benchmarks',
                desc: 'Compare your performance against similar creators and brands.'
              },
              {
                icon: Zap,
                title: 'Actionable Insights',
                desc: 'Get clear, data-backed recommendations for your next video.'
              },
              {
                icon: Target,
                title: 'Real-time Tracking',
                desc: 'Up-to-the-minute data on what your audience is engaging with.'
              }
            ].map((feature, i) => (
              <div key={i} className="card card-hover group">
                <div className="w-12 h-12 rounded-lg bg-brand-teal-light flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect', desc: 'Link your social media accounts. We analyze your existing audience and content performance.' },
              { step: '02', title: 'Analyze', desc: 'Our AI scans viewer behavior, identifies patterns, and surfaces what your audience is actively watching.' },
              { step: '03', title: 'Create', desc: 'Get clear, data-backed recommendations on what content to make next — and watch engagement grow.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-brand-teal">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-neutral-500 mb-16 max-w-lg mx-auto">
            Start free. Upgrade when you need deeper insights.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                desc: 'Perfect for getting started',
                features: ['1 account', 'Basic analytics', '7-day data history', 'Community support']
              },
              {
                name: 'Pro',
                price: '$29',
                desc: 'Best for growing creators',
                features: ['5 accounts', 'Advanced analytics', '30-day data history', 'Content gap analysis', 'Priority support'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: '$99',
                desc: 'For teams and brands',
                features: ['Unlimited accounts', 'Full analytics suite', '90-day data history', 'Competitor benchmarks', 'API access', 'Dedicated support']
              }
            ].map((tier, i) => (
              <div key={i} className={`card relative ${tier.popular ? 'border-brand-teal ring-1 ring-brand-teal' : ''}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-brand-navy">{tier.price}</span>
                  <span className="text-neutral-500 text-sm">/month</span>
                </div>
                <p className="text-neutral-500 text-sm mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Star className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                {tier.name === 'Free' ? (
                  <Link to="/signup" className="w-full btn-secondary text-center block">
                    Get Started
                  </Link>
                ) : tier.name === 'Pro' ? (
                  <a
                    href="https://buy.stripe.com/cNi3cvaMl19b4dn1JOfEk00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary text-center block"
                  >
                    Subscribe
                  </a>
                ) : (
                  <a
                    href="https://buy.stripe.com/aFadR97A9g45fW5dswfEk01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary text-center block"
                  >
                    Subscribe
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="bg-neutral-200/50 py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-16">
            Frequently asked questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: 'How does AudienceLens analyze my audience?', a: 'We connect to your social media accounts and analyze viewer behavior patterns — what they watch, when they watch, and what they engage with most.' },
              { q: 'Which platforms do you support?', a: 'We currently support YouTube, Instagram, and TikTok. More platforms coming soon.' },
              { q: 'Is my data secure?', a: 'Absolutely. We use industry-standard encryption and never share your data with third parties.' },
              { q: 'Can I try before I buy?', a: 'Yes! Our Free tier gives you a preview of your audience insights with no credit card required.' },
              { q: 'How often is the data updated?', a: 'Data refreshes every 24 hours on the Free plan, and every 6 hours on Pro and Enterprise plans.' }
            ].map((faq, i) => (
              <details key={i} className="card group open:border-brand-teal transition-colors">
                <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between py-1">
                  {faq.q}
                  <span className="text-brand-teal group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-500 text-sm mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal to-[#00BFA0]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to see what your audience is really watching?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Join thousands of creators who use data to drive their content strategy.
          </p>
          <Link to="/signup" className="inline-flex items-center gap-2 bg-white text-brand-teal font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-all duration-200 text-lg">
            Get Started Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
