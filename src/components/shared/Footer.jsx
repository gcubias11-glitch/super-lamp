import { Link } from 'react-router-dom';
import logo from '../../assets/audiencelens-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-neutral-200/50">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AudienceLens" className="h-8 w-8" />
              <span className="text-lg font-bold text-brand-navy">AudienceLens</span>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs">
              Know your audience. Create with confidence. Data-driven content intelligence for creators and brands.
            </p>
          </div>
          {/* Product */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-neutral-500 hover:text-brand-teal text-sm transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-neutral-500 hover:text-brand-teal text-sm transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-neutral-500 hover:text-brand-teal text-sm transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-500 hover:text-brand-teal text-sm transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-neutral-500 hover:text-brand-teal text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-neutral-500 hover:text-brand-teal text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} AudienceLens. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm italic">
            Know your audience. Create with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}
