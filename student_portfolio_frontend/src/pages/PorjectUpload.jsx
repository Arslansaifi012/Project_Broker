
// src/pages/ProjectUpload.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectUpload = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    technologies: '',
    price: '',
    demoLink: '',
    githubLink: '',
    documentation: '',
  });

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Project uploaded successfully!');
      navigate('/student/dashboard');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload New Project</h1>
        <p className="text-gray-600 mt-2">Share your innovative project with startups</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter project title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe your project in detail"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="blockchain">Blockchain</option>
              <option value="iot">IoT</option>
              <option value="game">Game Development</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used *
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., React, Node.js, MongoDB"
              value={formData.technologies}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price ($) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="demoLink" className="block text-sm font-medium text-gray-700 mb-2">
              Demo Link
            </label>
            <input
              type="url"
              id="demoLink"
              name="demoLink"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://your-demo-link.com"
              value={formData.demoLink}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700 mb-2">
              GitHub Repository Link
            </label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://github.com/your-username/your-repo"
              value={formData.githubLink}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="documentation" className="block text-sm font-medium text-gray-700 mb-2">
              Documentation/Additional Information
            </label>
            <textarea
              id="documentation"
              name="documentation"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add any additional information about your project"
              value={formData.documentation}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Images *
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            {images.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                {images.length} image(s) selected
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/student/dashboard')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Uploading...' : 'Upload Project'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectUpload;