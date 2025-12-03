import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main className="flex items-center justify-center p-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
