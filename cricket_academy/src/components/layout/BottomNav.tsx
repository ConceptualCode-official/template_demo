import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Trophy, CreditCard, Video, Users, FileText, Settings, Image } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BottomNavProps {
  role: 'student' | 'admin';
}

export const BottomNav = ({ role }: BottomNavProps) => {
  const location = useLocation();

  const studentLinks = [
    { name: 'Home', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Schedule', path: '/dashboard/schedule', icon: Calendar },
    { name: 'Stats', path: '/dashboard/performance', icon: Trophy },
    { name: 'Videos', path: '/dashboard/videos', icon: Video },
    { name: 'Fees', path: '/dashboard/payments', icon: CreditCard },
  ];

  const adminLinks = [
    { name: 'Home', path: '/admin', icon: LayoutDashboard },
    { name: 'Students', path: '/admin/students', icon: Users },
    { name: 'Batches', path: '/admin/batches', icon: Calendar },
    { name: 'Content', path: '/admin/content', icon: Image },
    { name: 'More', path: '/admin/settings', icon: Settings },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1",
                isActive ? "text-primary dark:text-white" : "text-slate-400 dark:text-slate-500"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-xl transition-all",
                isActive && "bg-primary/10 dark:bg-white/10"
              )}>
                <link.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
