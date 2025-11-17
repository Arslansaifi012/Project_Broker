
// src/pages/BrowseProjects.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import {ShopContext} from '../context/ShopContext';

const BrowseProjects = () => {
  const {products} = useContext(ShopContext) ;
  console.log(products)
  const [projects] = useState([]);

  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    search: '',
    sortBy: 'newest',
  });

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'ai', label: 'Artificial Intelligence' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'iot', label: 'IoT' },
    { value: 'game', label: 'Game Development' },
    { value: 'other', label: 'Other' },
  ];

  const priceRanges = [
    { value: '', label: 'All Prices' },
    { value: '0-500', label: '$0 - $500' },
    { value: '500-1000', label: '$500 - $1000' },
    { value: '1000-2000', label: '$1000 - $2000' },
    { value: '2000+', label: '$2000+' },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = !filters.category || project.category === filters.category;
    const matchesSearch =
      !filters.search ||
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.technologies.toLowerCase().includes(filters.search.toLowerCase());
    
    let matchesPrice = true;
    if (filters.priceRange) {
      const price = parseInt(project.price.replace('$', ''));
      switch (filters.priceRange) {
        case '0-500':
          matchesPrice = price <= 500;
          break;
        case '500-1000':
          matchesPrice = price > 500 && price <= 1000;
          break;
        case '1000-2000':
          matchesPrice = price > 1000 && price <= 2000;
          break;
        case '2000+':
          matchesPrice = price > 2000;
          break;
      }
    }

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Projects</h1>
        <p className="text-gray-600 mt-2">Discover innovative projects from talented students</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className="text-2xl font-bold text-indigo-600">{project.price}</span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Technologies:</p>
                <p className="text-sm text-gray-700">{project.technologies}</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">By {project.student}</p>
                  <p className="text-xs text-gray-400">{project.university}</p>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
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
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.rating}
                  </span>
                </div>
              </div>

              <Link
                to={`/project/${project.id}`}
                className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          <button
            onClick={() => setFilters({ category: '', priceRange: '', search: '', sortBy: 'newest' })}
            className="mt-4 text-indigo-600 hover:text-indigo-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseProjects;