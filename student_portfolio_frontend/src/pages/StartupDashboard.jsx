// src/pages/StartupDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StartupDashboard = () => {
  const [activeTab, setActiveTab] = useState('interested');

  // Simplified Mock startup data - only 'registered' details
  const [startupDetails] = useState({
    name: 'TechInnovate Solutions',
    email: 'contact@techinnovate.example.com',
    phone: '+1 (555) 123-4567',
    // Removed: industry, size, founded, location, description, website, contactEmail
  });

  // Mock data for other sections remains the same
  const [interestedProjects] = useState([
    {
      id: 1,
      title: 'AI Chatbot',
      student: 'John Doe',
      university: 'MIT',
      price: '$500',
      date: '2024-01-20',
      status: 'reviewing',
      priority: 'high',
      technology: 'Python, TensorFlow',
    },
    {
      id: 2,
      title: 'E-commerce App',
      student: 'Jane Smith',
      university: 'Stanford',
      price: '$1200',
      date: '2024-01-18',
      status: 'evaluating',
      priority: 'medium',
      technology: 'React, Node.js',
    },
    {
      id: 3,
      title: 'Mobile Game',
      student: 'Mike Johnson',
      university: 'UC Berkeley',
      price: '$800',
      date: '2024-01-15',
      status: 'purchased',
      priority: 'low',
      technology: 'Unity, C#',
    },
    {
      id: 4,
      title: 'Blockchain Wallet',
      student: 'Sarah Wilson',
      university: 'Harvard',
      price: '$1500',
      date: '2024-01-12',
      status: 'negotiating',
      priority: 'high',
      technology: 'Solidity, Web3',
    },
  ]);

  const [savedProjects] = useState([
    {
      id: 5,
      title: 'IoT Dashboard',
      student: 'David Brown',
      university: 'Carnegie Mellon',
      price: '$700',
      savedDate: '2024-01-10',
      technology: 'React, IoT, Python',
    },
    {
      id: 6,
      title: 'ML Fraud Detection',
      student: 'Emily Chen',
      university: 'MIT',
      price: '$2000',
      savedDate: '2024-01-08',
      technology: 'Python, Scikit-learn',
    },
    {
      id: 7,
      title: 'AR Shopping App',
      student: 'Alex Kumar',
      university: 'Stanford',
      price: '$1300',
      savedDate: '2024-01-05',
      technology: 'Unity, ARKit, Swift',
    },
  ]);

  const [purchasedProjects] = useState([
    {
      id: 8,
      title: 'CRM System',
      student: 'Michael Tan',
      university: 'UC Berkeley',
      price: '$900',
      purchaseDate: '2024-01-03',
      license: 'perpetual',
      supportPeriod: '6 months',
    },
    {
      id: 9,
      title: 'Data Analytics Platform',
      student: 'Lisa Wang',
      university: 'Harvard',
      price: '$1800',
      purchaseDate: '2023-12-28',
      license: 'perpetual',
      supportPeriod: '12 months',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'reviewing':
        return 'bg-blue-100 text-blue-800';
      case 'evaluating':
        return 'bg-purple-100 text-purple-800';
      case 'negotiating':
        return 'bg-yellow-100 text-yellow-800';
      case 'purchased':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewProject = (projectId) => {
    console.log('View project:', projectId);
  };

  const handleRemoveSaved = (projectId) => {
    console.log('Remove project:', projectId);
  };

  const handleDownloadProject = (projectId) => {
    console.log('Download project:', projectId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Startup Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your project interests and purchases</p>
      </div>

      {/* Simple Registered Details Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Company Details (Registered)</h2>
          <Link
            to="/startup-profile"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium"
          >
            ➕ Add/Update Full Company Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Name */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Company Name</p>
            <p className="text-xl font-semibold text-gray-900">{startupDetails.name}</p>
          </div>
          {/* Email */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-xl font-semibold text-gray-900">{startupDetails.email}</p>
          </div>
          {/* Phone */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <p className="text-xl font-semibold text-gray-900">{startupDetails.phone}</p>
          </div>
        </div>
        <p className="text-sm text-yellow-600 mt-4">
          💡 **Note:** Your full company profile (industry, size, description, etc.) is incomplete. Please click "Add/Update Full Company Profile" above to maximize your presence.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Interested Projects</p>
              <p className="text-2xl font-semibold">{interestedProjects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Saved Projects</p>
              <p className="text-2xl font-semibold">{savedProjects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Purchased</p>
              <p className="text-2xl font-semibold">{purchasedProjects.length}</p>
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
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-semibold">$2,700</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {[
            { key: 'interested', label: 'Interested Projects', count: interestedProjects.length },
            { key: 'saved', label: 'Saved Projects', count: savedProjects.length },
            { key: 'purchased', label: 'Purchased Projects', count: purchasedProjects.length },
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
      {activeTab === 'interested' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student & University
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Technology
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interestedProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{project.title}</div>
                    <div className="text-sm text-gray-500">{project.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{project.student}</div>
                    <div className="text-sm text-gray-500">{project.university}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {project.technology}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {project.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(
                        project.priority
                      )}`}
                    >
                      {project.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleViewProject(project.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      View Details
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'saved' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <button 
                    onClick={() => handleRemoveSaved(project.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <p className="font-medium">{project.student}</p>
                  <p>{project.university}</p>
                </div>
                <div className="text-sm text-gray-700 mb-4">
                  <span className="font-medium">Tech: </span>{project.technology}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-indigo-600">{project.price}</span>
                  <span className="text-sm text-gray-500">Saved {project.savedDate}</span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleViewProject(project.id)}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm font-medium"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'purchased' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student & University
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Purchase Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  License
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Support
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {purchasedProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{project.title}</div>
                    <div className="text-sm font-semibold text-green-600">{project.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{project.student}</div>
                    <div className="text-sm text-gray-500">{project.university}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {project.purchaseDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {project.license}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {project.supportPeriod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleDownloadProject(project.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Download
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      Get Support
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StartupDashboard;