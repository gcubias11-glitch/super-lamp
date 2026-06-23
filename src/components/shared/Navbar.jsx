import { Link } from 'react-router-dom';
import { BarChart3, Search, TrendingUp, Users, Zap, Target } from 'lucide-react';
import logo from '../assets/audiencelens-logo.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-300">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AudienceLens" className="h-8 w-8" />
          <span className="text-lg font-bold text-brand-navy">AudienceLens</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Pricing
          </a>
          <Link to="/about" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            About
          </Link>
          <Link to="/login" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Log in
          </Link>
          <Link to="/signup" className="btn-primary btn-sm">
            Start Free Trial
          </Link>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-neutral-200 transition-colors">
          <svg className="w-6 h-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
