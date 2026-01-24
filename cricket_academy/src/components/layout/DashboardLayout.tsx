import React, { useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Settings, LogOut, 
  Menu, Bell, Trophy, CreditCard, Video, FileText, X, Image 
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { BottomNav } from './BottomNav';
import { Loading } from '../ui/Loading';

interface DashboardLayoutProps {
  role: 'student' | 'admin';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const studentLinks = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Schedule', path: '/dashboard/schedule', icon: Calendar },
    { name: 'Performance', path: '/dashboard/performance', icon: Trophy },
    { name: 'Payments', path: '/dashboard/payments', icon: CreditCard },
    { name: 'Videos', path: '/dashboard/videos', icon: Video },
  ];

  const adminLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Students', path: '/admin/students', icon: Users },
    { name: 'Coaches', path: '/admin/coaches', icon: Users },
    { name: 'Batches', path: '/admin/batches', icon: Calendar },
    { name: 'Content', path: '/admin/content', icon: Image },
    { name: 'Finance', path: '/admin/finance', icon: CreditCard },
    { name: 'Reports', path: '/admin/reports', icon: FileText },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  const notifications = [
    { id: 1, title: 'New Match Schedule', desc: 'Match vs City Club added for Oct 25', time: '10 min ago', unread: true },
    { id: 2, title: 'Fee Reminder', desc: 'Monthly tuition fee is due tomorrow', time: '2 hours ago', unread: true },
    { id: 3, title: 'Video Uploaded', desc: 'Coach uploaded "Batting Drills"', time: '1 day ago', unread: false },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 80 }}
        className="bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 fixed h-full z-30 hidden md:flex flex-col transition-all duration-300"
      >
        <div className="h-16 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2 overflow-hidden">
            <div className="bg-primary p-1.5 rounded-lg shrink-0">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            {sidebarOpen && (
              <span className="text-xl font-bold font-display tracking-wider text-primary dark:text-white whitespace-nowrap">
                ELITE<span className="text-secondary">CRICKET</span>
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto overflow-x-hidden">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center px-3 py-3 rounded-lg transition-colors group relative whitespace-nowrap",
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary"
                )}
              >
                <link.icon className={cn("w-5 h-5 shrink-0", !sidebarOpen && "mx-auto", isActive ? "text-white" : "text-slate-500 group-hover:text-primary")} />
                {sidebarOpen && <span className="ml-3 font-medium text-sm">{link.name}</span>}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={() => navigate('/login')}
            className={cn(
              "flex items-center w-full px-3 py-2 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors whitespace-nowrap",
              !sidebarOpen && "justify-center"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span className="ml-3 font-medium text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={cn("flex-1 flex flex-col min-h-screen transition-all duration-300 mb-16 md:mb-0", sidebarOpen ? "md:ml-[260px]" : "md:ml-[80px]")}>
        {/* Mobile/Desktop Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 hidden md:block"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="md:hidden flex items-center space-x-2">
              <div className="bg-primary p-1 rounded-lg">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">ELITE<span className="text-primary">APP</span></span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative"
              >
                <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
              
              <AnimatePresence>
                {notificationsOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setNotificationsOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 z-40 overflow-hidden"
                    >
                       <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
                        <button onClick={() => setNotificationsOpen(false)} className="text-slate-400 hover:text-slate-600">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="max-h-[300px] overflow-y-auto">
                        {notifications.map((notif) => (
                          <div key={notif.id} className={cn("p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer", notif.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : "")}>
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{notif.title}</h4>
                              <span className="text-xs text-slate-400">{notif.time}</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400">{notif.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {role === 'admin' ? 'AD' : 'ST'}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{role === 'admin' ? 'Admin User' : 'Rahul Dravid'}</p>
                <p className="text-xs text-slate-500 capitalize">{role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content with Suspense */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav role={role} />
    </div>
  );
};
