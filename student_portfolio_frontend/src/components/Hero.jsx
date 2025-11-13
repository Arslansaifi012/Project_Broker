
// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Showcase Your
            <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              {" "}Student Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with potential buyers and showcase your innovative projects. 
            Turn your academic work into opportunities and kickstart your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
              Explore Projects
            </button>
            <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Posted</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">200+</div>
            <div className="text-gray-600">Projects Sold</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1k+</div>
            <div className="text-gray-600">Student Members</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;