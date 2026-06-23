import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, BarChart3, Trophy, Settings, LogOut,
  Menu, X
} from 'lucide-react';
import logo from '../../assets/audiencelens-logo.png';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Audiences', path: '/dashboard/audiences' },
  { icon: BarChart3, label: 'Content Analysis', path: '/dashboard/analysis' },
  { icon: Trophy, label: 'Competitors', path: '/dashboard/competitors' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} bg-brand-navy text-white flex flex-col transition-all duration-300 shrink-0`}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-white/10">
        {collapsed ? (
          <img src={logo} alt="AL" className="h-8 w-8 mx-auto" />
        ) : (
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="AudienceLens" className="h-8 w-8" />
            <span className="font-bold text-white">AudienceLens</span>
          </Link>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-brand-teal/10 text-brand-teal border-l-2 border-brand-teal'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              } ${collapsed ? 'justify-center border-l-0' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="h-12 flex items-center justify-center border-t border-white/10 text-white/40 hover:text-white transition-colors"
      >
        {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
      </button>

      {/* User info */}
      {!collapsed && (
        <div className="p-4 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-sm font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-white/40 truncate">john@example.com</p>
          </div>
          <button className="text-white/40 hover:text-white transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      )}
    </aside>
  );
}