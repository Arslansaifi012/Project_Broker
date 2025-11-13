// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StudentPortfolio</h3>
            <p className="text-gray-400">
              Connecting student innovation with startup opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Students</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/upload-project" className="hover:text-white">
                  Upload Project
                </Link>
              </li>
              <li>
                <Link to="/student/dashboard" className="hover:text-white">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link to="/browse-projects" className="hover:text-white">
                  Browse Projects
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Startups</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/browse-projects" className="hover:text-white">
                  Find Projects
                </Link>
              </li>
              <li>
                <Link to="/startup/dashboard" className="hover:text-white">
                  Startup Dashboard
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 StudentPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;