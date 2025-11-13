// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              StudentPortfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/browse-projects" className="text-gray-700 hover:text-indigo-600">
              Browse Projects
            </Link>
            
            {user.email ? (
              <>
                {user.role === 'student' ? (
                  <Link to="/student/dashboard" className="text-gray-700 hover:text-indigo-600">
                    Dashboard
                  </Link>
                ) : (
                  <Link to="/startup/dashboard" className="text-gray-700 hover:text-indigo-600">
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/browse-projects"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Browse Projects
            </Link>
            {user.email ? (
              <>
                <Link
                  to={user.role === 'student' ? '/student/dashboard' : '/startup/dashboard'}
                  className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;