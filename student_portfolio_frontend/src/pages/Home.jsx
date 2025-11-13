// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect Student Innovation with Startup Opportunities
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Students showcase their projects. Startups discover fresh talent. 
              Build the future together.
            </p>
            <div className="space-x-4 ">
              <Link
                to="/browse-projects"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 w-2xs"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Hero /> */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose StudentPortfolio?
            </h2>
            <p className="text-xl text-gray-600">
              The perfect platform for students and startups to connect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Showcase Innovation</h3>
              <p className="text-gray-600">
                Students can upload their best projects and showcase their skills to potential buyers
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Talent</h3>
              <p className="text-gray-600">
                Startups can browse through innovative projects and connect with talented students
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Monetize Projects</h3>
              <p className="text-gray-600">
                Students can earn money by selling their projects to interested startups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students and startups already using our platform
          </p>
          <Link
            to="/register"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
