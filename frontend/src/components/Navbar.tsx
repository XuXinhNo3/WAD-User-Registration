import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-purple-700 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 gap-8">

          <Link to="/" className="text-xl font-bold text-white">
            User Registration System
          </Link>

          <div className="flex space-x-30">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all w-20 text-center ${
                isActive('/')
                  ? 'bg-white text-purple-600 font-medium'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Home
            </Link>

            <Link
              to="/login"
              className={`px-4 py-2 rounded-lg transition-all w-20 text-center  ${
                isActive('/login')
                  ? 'bg-white text-purple-600 font-medium'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className={`px-4 py-2 rounded-lg transition-all w-20 text-center ${
                isActive('/signup')
                  ? 'bg-white text-purple-600 font-medium'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
