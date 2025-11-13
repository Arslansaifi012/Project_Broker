import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 inline-block">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 text-lg">by {project.student} • {project.university}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800 mb-2">${project.price}</div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'available' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {project.status === 'available' ? 'Available for Purchase' : 'Project Sold'}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(project.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-medium text-gray-600">{project.rating}/5.0</span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Description</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg">
              Contact Student
            </button>
            <button className="flex-1 bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors text-lg">
              Purchase Project
            </button>
            <button className="px-6 border border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;