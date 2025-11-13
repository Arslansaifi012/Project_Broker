// src/pages/ProjectDetails.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isInterested, setIsInterested] = useState(false);

  // Mock project data - in real app, fetch based on id
  const project = {
    id: 1,
    title: 'AI Chatbot',
    description: 'An intelligent chatbot built with Python and TensorFlow that can understand natural language and provide accurate responses. This project includes sentiment analysis, intent recognition, and context-aware conversations.',
    price: '$500',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'MongoDB'],
    student: 'John Doe',
    university: 'MIT',
    email: 'john.doe@mit.edu',
    image: 'https://via.placeholder.com/600x400',
    additionalImages: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
    ],
    views: 45,
    likes: 12,
    rating: 4.5,
    reviews: 8,
    demoLink: 'https://chatbot-demo.example.com',
    githubLink: 'https://github.com/johndoe/ai-chatbot',
    features: [
      'Natural Language Processing',
      'Sentiment Analysis',
      'Multi-language Support',
      'Context-aware Conversations',
      'Easy Integration',
      'Real-time Responses',
    ],
    documentation: 'Comprehensive documentation including setup guide, API references, and deployment instructions.',
    requirements: 'Python 3.8+, 4GB RAM, Internet connection',
    support: '30 days free support included',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  };

  const handleLike = () => {
    // Like functionality
  };

  const handleShowInterest = () => {
    setIsInterested(true);
    alert('Your interest has been recorded! Our team will contact you shortly for purchase details.');
  };

  const handlePurchase = () => {
    alert('Redirecting to purchase page...');
    // In real app: navigate to purchase page or open purchase modal
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/browse-projects" className="text-indigo-600 hover:text-indigo-700 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Project Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <span className="text-3xl font-bold text-indigo-600">{project.price}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {project.views} views
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {project.likes} likes
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {project.rating} ({project.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex space-x-4">
              <button
                onClick={handleLike}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Like
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share
              </button>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-indigo-300 text-indigo-600 rounded-md hover:bg-indigo-50"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {['overview', 'features', 'technical', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                    <p className="text-gray-700">{project.category}</p>
                  </div>
                  {project.githubLink && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">GitHub Repository</h4>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 break-all"
                      >
                        {project.githubLink}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'technical' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Technical Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">System Requirements</h4>
                        <p className="text-gray-700">{project.requirements}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Documentation</h4>
                        <p className="text-gray-700">{project.documentation}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Support</h4>
                        <p className="text-gray-700">{project.support}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300'}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Tech Startup Inc.</span>
                      </div>
                      <p className="text-gray-700">
                        Excellent project! The AI implementation is robust and the code quality is high.
                        Highly recommended for businesses looking to implement chatbot solutions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Purchase Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Purchase This Project</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-indigo-600">{project.price}</span>
              <p className="text-sm text-gray-600 mt-1">One-time payment</p>
            </div>
            
            <button
              onClick={handlePurchase}
              className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 mb-3 font-medium"
            >
              Buy Now
            </button>
            
            <button
              onClick={handleShowInterest}
              disabled={isInterested}
              className="w-full border border-indigo-600 text-indigo-600 px-4 py-3 rounded-md hover:bg-indigo-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 mb-3"
            >
              {isInterested ? 'Interest Shown ✓' : 'Express Interest'}
            </button>
            
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Full source code included
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Complete documentation
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {project.support}
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Project Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Category</span>
                <span className="font-medium">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Posted</span>
                <span className="font-medium">{project.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Updated</span>
                <span className="font-medium">{project.updatedAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Views</span>
                <span className="font-medium">{project.views}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Likes</span>
                <span className="font-medium">{project.likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;