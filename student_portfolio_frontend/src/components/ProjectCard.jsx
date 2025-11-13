import React from 'react';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift border border-gray-100">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'available' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {project.status === 'available' ? 'Available' : 'Sold'}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category and Rating */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm font-medium text-gray-600">{project.rating}</span>
          </div>
        </div>

        {/* Title and Student */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-gray-600 mb-1">by {project.student}</p>
        <p className="text-sm text-gray-500 mb-4">{project.university}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-800">${project.price}</span>
          </div>
          <button 
            onClick={onViewDetails}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;