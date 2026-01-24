import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Loading } from './components/ui/Loading';

// Lazy Load Public Pages
const Home = React.lazy(() => import('./pages/public/Home').then(module => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/public/About').then(module => ({ default: module.About })));
const Programs = React.lazy(() => import('./pages/public/Programs').then(module => ({ default: module.Programs })));
const Facilities = React.lazy(() => import('./pages/public/Facilities').then(module => ({ default: module.Facilities })));
const Contact = React.lazy(() => import('./pages/public/Contact').then(module => ({ default: module.Contact })));
const Login = React.lazy(() => import('./pages/auth/Login').then(module => ({ default: module.Login })));

// Lazy Load Layouts
const DashboardLayout = React.lazy(() => import('./components/layout/DashboardLayout').then(module => ({ default: module.DashboardLayout })));

// Lazy Load Student Dashboard Components
const StudentOverview = React.lazy(() => import('./pages/dashboard/student/StudentOverview').then(module => ({ default: module.StudentOverview })));
const StudentSchedule = React.lazy(() => import('./pages/dashboard/student/StudentSchedule').then(module => ({ default: module.StudentSchedule })));
const StudentPerformance = React.lazy(() => import('./pages/dashboard/student/StudentPerformance').then(module => ({ default: module.StudentPerformance })));
const StudentPayments = React.lazy(() => import('./pages/dashboard/student/StudentPayments').then(module => ({ default: module.StudentPayments })));
const StudentVideos = React.lazy(() => import('./pages/dashboard/student/StudentVideos').then(module => ({ default: module.StudentVideos })));

// Lazy Load Admin Dashboard Components
const AdminOverview = React.lazy(() => import('./pages/dashboard/admin/AdminOverview').then(module => ({ default: module.AdminOverview })));
const AdminStudents = React.lazy(() => import('./pages/dashboard/admin/AdminStudents').then(module => ({ default: module.AdminStudents })));
const AdminCoaches = React.lazy(() => import('./pages/dashboard/admin/AdminCoaches').then(module => ({ default: module.AdminCoaches })));
const AdminBatches = React.lazy(() => import('./pages/dashboard/admin/AdminBatches').then(module => ({ default: module.AdminBatches })));
const AdminFinance = React.lazy(() => import('./pages/dashboard/admin/AdminFinance').then(module => ({ default: module.AdminFinance })));
const AdminReports = React.lazy(() => import('./pages/dashboard/admin/AdminReports').then(module => ({ default: module.AdminReports })));
const AdminSettings = React.lazy(() => import('./pages/dashboard/admin/AdminSettings').then(module => ({ default: module.AdminSettings })));
const AdminContent = React.lazy(() => import('./pages/dashboard/admin/AdminContent').then(module => ({ default: module.AdminContent })));

// Layout for public pages
const PublicLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

// Wrapper for animated routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Student Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout role="student" />}>
          <Route index element={<StudentOverview />} />
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="performance" element={<StudentPerformance />} />
          <Route path="payments" element={<StudentPayments />} />
          <Route path="videos" element={<StudentVideos />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminOverview />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="coaches" element={<AdminCoaches />} />
          <Route path="batches" element={<AdminBatches />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="finance" element={<AdminFinance />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <CustomCursor />
      <Suspense fallback={<Loading fullScreen />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
