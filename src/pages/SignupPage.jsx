import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight } from 'lucide-react';
import logo from '../assets/audiencelens-logo.png';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Brand / Testimonial */}
      <div className="hidden lg:flex w-1/2 bg-brand-navy relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-teal rounded-full blur-3xl" />
        </div>
        <div className="relative text-center max-w-md px-8">
          <BarChart3 className="h-16 w-16 text-brand-teal mx-auto mb-6" />
          <blockquote className="text-white/80 text-lg leading-relaxed mb-6">
            "AudienceLens completely changed how I plan my content. My engagement rate doubled in two months."
          </blockquote>
          <p className="text-brand-teal font-semibold">— Sarah Chen, Creator</p>
          <p className="text-white/40 text-sm mt-1">45K subscribers on YouTube</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm text-center">
          <img src={logo} alt="AudienceLens" className="h-10 w-10 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-brand-navy">Sign up coming soon</h1>
          <p className="text-neutral-500 text-sm mt-2 mb-8">
            Account creation is on the way. You can explore the dashboard right now — no account needed.
          </p>
          <Link to="/dashboard" className="btn-primary w-full inline-flex items-center justify-center gap-2 mb-4">
            Explore Dashboard <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-sm text-neutral-500">
            Want to be first in line?{' '}
            <a href="mailto:hello@audiencelens.app" className="text-brand-teal font-semibold hover:underline">
              Join the waitlist
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}