
// components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  const featuredProjects = [
    {
      id: 1,
      title: "AI Learning Platform",
      description: "An intelligent learning platform that adapts to student's learning patterns",
      price: "$499",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Smart Campus App",
      description: "Mobile application for campus navigation and event management",
      price: "$299",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      status: "For Sale"
    }
  ];

  const allProjects = [...featuredProjects, ...projects];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover innovative projects created by talented students from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {allProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📁</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Projects Yet</h3>
            <p className="text-gray-500">Be the first to post an amazing project!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;