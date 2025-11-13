// src/pages/StudentDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // Simplified Mock student data - only 'registered' details
  const [studentDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com', // Changed to a generic example email
    phone: '+1 (555) 123-4567',
    // Removed: university, degree, graduationYear, gpa, skills, bio, portfolio, linkedin, github, location
  });

  // Mock data for other sections (Projects and Earnings) remains for context
  const [projects] = useState([
    {
      id: 1,
      title: 'AI Chatbot',
      description: 'An intelligent chatbot built with Python and TensorFlow that understands natural language and provides context-aware responses.',
      price: '$500',
      status: 'pending',
      image: 'https://via.placeholder.com/300x200',
      views: 45,
      likes: 12,
      technology: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
      category: 'Artificial Intelligence',
      createdAt: '2024-01-15',
      interestedStartups: 3,
    },
    {
      id: 2,
      title: 'E-commerce App',
      description: 'Full-stack e-commerce application with React frontend and Node.js backend, featuring payment integration and admin dashboard.',
      price: '$1200',
      status: 'approved',
      image: 'https://via.placeholder.com/300x200',
      views: 89,
      likes: 23,
      technology: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      createdAt: '2024-01-10',
      interestedStartups: 7,
    },
    {
      id: 3,
      title: 'Mobile Game',
      description: 'Unity-based mobile game with multiplayer features, in-app purchases, and real-time leaderboards.',
      price: '$800',
      status: 'rejected',
      image: 'https://via.placeholder.com/300x200',
      views: 34,
      likes: 8,
      technology: ['Unity', 'C#', 'Firebase', 'Blender'],
      category: 'Game Development',
      createdAt: '2024-01-05',
      interestedStartups: 2,
    },
    {
      id: 4,
      title: 'IoT Smart Home System',
      description: 'Complete IoT solution for smart homes with mobile app control, sensors integration, and automation features.',
      price: '$1500',
      status: 'approved',
      image: 'https://via.placeholder.com/300x200',
      views: 67,
      likes: 18,
      technology: ['Python', 'Raspberry Pi', 'React Native', 'MQTT'],
      category: 'Internet of Things',
      createdAt: '2024-01-20',
      interestedStartups: 5,
    },
  ]);

  const [earnings] = useState({
    total: 2700,
    pending: 500,
    received: 2200,
    projectsSold: 2
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return '✅';
      case 'pending':
        return '⏳';
      case 'rejected':
        return '❌';
      default:
        return '📄';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your projects, track performance, and grow your portfolio</p>
      </div>

      {/* --- REPLACED: Simple Registered Details Section --- */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Account Details (Registered)</h2>
         <Link
  to="/student-profile"
  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium"
>
  ➕ Add/Update Full Profile Details
</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Name */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Name</p>
            <p className="text-xl font-semibold text-gray-900">{studentDetails.name}</p>
          </div>
          {/* Email */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-xl font-semibold text-gray-900">{studentDetails.email}</p>
          </div>
          {/* Phone */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <p className="text-xl font-semibold text-gray-900">{studentDetails.phone}</p>
          </div>
        </div>
        <p className="text-sm text-yellow-600 mt-4">
          💡 **Note:** Your full student profile (university, GPA, skills, etc.) is incomplete. Please click "Add/Update Full Profile Details" above to maximize visibility.
        </p>
      </div>
      {/* -------------------------------------------------- */}


      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Projects</p>
              <p className="text-2xl font-semibold">{projects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-2xl font-semibold">
                {projects.filter(p => p.status === 'approved').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Earnings</p>
              <p className="text-2xl font-semibold">${earnings.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Startup Interest</p>
              <p className="text-2xl font-semibold">
                {projects.reduce((sum, p) => sum + p.interestedStartups, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {[
            { key: 'projects', label: 'My Projects', count: projects.length },
            { key: 'earnings', label: 'Earnings', count: earnings.projectsSold },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.key
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'projects' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>
            <Link
              to="/upload-project"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Upload New Project
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {getStatusIcon(project.status)} {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technology.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technology.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{project.technology.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-indigo-600">{project.price}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {project.views}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {project.likes}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {project.interestedStartups}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex-1 text-center bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm"
                    >
                      View Details
                    </Link>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'earnings' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earnings Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Total Received</h3>
              <p className="text-3xl font-bold text-green-600">${earnings.received}</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Pending</h3>
              <p className="text-3xl font-bold text-yellow-600">${earnings.pending}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Projects Sold</h3>
              <p className="text-3xl font-bold text-blue-600">{earnings.projectsSold}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sales</h3>
            <div className="space-y-4">
              {projects.filter(p => p.status === 'approved').map(project => (
                <div key={project.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-medium text-gray-900">{project.title}</p>
                    <p className="text-sm text-gray-600">Sold on {project.createdAt}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{project.price}</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;