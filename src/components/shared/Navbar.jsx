import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Search, TrendingUp, Users, Zap, Target, X, Menu } from 'lucide-react';
import logo from '../../assets/audiencelens-logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-300">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AudienceLens" className="h-8 w-8" />
          <span className="text-lg font-bold text-brand-navy">AudienceLens</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Pricing
          </a>
          <Link to="/dashboard" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Dashboard
          </Link>
          <Link to="/login" className="text-neutral-700 hover:text-brand-navy text-sm font-medium transition-colors">
            Log in
          </Link>
          <Link to="/dashboard" className="btn-primary btn-sm">
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-neutral-200 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-neutral-700" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-700" />
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-300 bg-white px-6 py-4 space-y-3">
          <a href="#features" onClick={() => setMobileOpen(false)}
            className="block text-neutral-700 hover:text-brand-navy text-sm font-medium">
            Features
          </a>
          <a href="#pricing" onClick={() => setMobileOpen(false)}
            className="block text-neutral-700 hover:text-brand-navy text-sm font-medium">
            Pricing
          </a>
          <Link to="/dashboard" onClick={() => setMobileOpen(false)}
            className="block text-neutral-700 hover:text-brand-navy text-sm font-medium">
            Dashboard
          </Link>
          <Link to="/login" onClick={() => setMobileOpen(false)}
            className="block text-neutral-700 hover:text-brand-navy text-sm font-medium">
            Log in
          </Link>
          <Link to="/dashboard" onClick={() => setMobileOpen(false)}
            className="block text-center btn-primary btn-sm mt-4">
            Start Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
}