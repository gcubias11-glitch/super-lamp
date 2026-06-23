import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
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

      {/* Right Panel — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img src={logo} alt="AudienceLens" className="h-10 w-10 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-brand-navy">Create your account</h1>
            <p className="text-neutral-500 text-sm mt-1">Start understanding your audience today</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full h-11 px-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal text-sm placeholder:text-neutral-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full h-11 px-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal text-sm placeholder:text-neutral-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-11 px-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal text-sm placeholder:text-neutral-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full h-11 px-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal text-sm placeholder:text-neutral-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-neutral-300 rounded-lg py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M22.46 6c-.85.38-1.78.64-2.73.76a4.76 4.76 0 002.1-2.62 9.51 9.51 0 01-3.02 1.16 4.75 4.75 0 00-8.1 4.33A13.48 13.48 0 013.34 4.7a4.75 4.75 0 001.47 6.34c-.76-.02-1.48-.23-2.1-.58a4.75 4.75 0 003.8 4.72 4.76 4.76 0 01-2.14.08 4.76 4.76 0 004.44 3.3A9.54 9.54 0 012 20.25a13.46 13.46 0 007.3 2.14c8.76 0 13.55-7.25 13.55-13.55 0-.2 0-.4-.02-.6A9.68 9.68 0 0024 6.46c-.88.39-1.83.65-2.82.77A4.92 4.92 0 0022.46 6z"/>
              </svg>
              X
            </button>
          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-teal font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
