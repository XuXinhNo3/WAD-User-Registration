import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className="h-[300px] flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto text-center px-4">
              {/* CTA Buttons */}
              <div className="flex flex-col justify-center gap-4">
                  <Link
                      to="/signup"
                      className=" w-50 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                      <svg className="w-5 h-5 mr-2\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Sign Up
                  </Link>

                  <Link
                      to="/login"
                      className=" w-50 inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Sign In
                  </Link>
              </div>
          </div>
      </div>
  );
};

export default Home;
