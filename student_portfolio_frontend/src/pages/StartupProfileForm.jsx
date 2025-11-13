// src/pages/StartupProfileForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartupProfileForm = () => {
  const navigate = useNavigate();
  
  // Simplified form state with only essential fields
  const [formData, setFormData] = useState({
    // Basic company info
    name: 'TechInnovate Solutions',
    industry: '',
    size: '',
    founded: '',
    location: '',
    description: '',
    website: '',
    
    // Contact information
    contactEmail: 'contact@techinnovate.example.com',
    contactPhone: '+1 (555) 123-4567',
    contactPerson: '',
    contactPosition: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available options for dropdowns
  const industries = [
    'Artificial Intelligence',
    'FinTech',
    'HealthTech',
    'EdTech',
    'E-commerce',
    'SaaS',
    'Mobile Apps',
    'Gaming',
    'IoT',
    'Blockchain',
    'Cybersecurity',
    'Other'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.name.trim()) newErrors.name = 'Company name is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.size.trim()) newErrors.size = 'Company size is required';
    if (!formData.founded) newErrors.founded = 'Founded year is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.description.trim() || formData.description.length < 50) {
      newErrors.description = 'Company description must be at least 50 characters';
    }
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';

    // URL validation
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (formData.website && !urlRegex.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would save to backend here
      console.log('Company profile data to save:', formData);
      
      // Show success message and redirect
      alert('Company profile updated successfully!');
      navigate("/startup/dashboard");

    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      navigate('/startupdashboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Company Profile</h1>
            <p className="text-gray-600 mt-2">
              Add your company details to attract the best student projects and talent
            </p>
          </div>
          <button
            onClick={handleCancel}
            className="text-gray-600 hover:text-gray-700 flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Cancel
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Company Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              {errors.industry && (
                <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size *
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Size</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              {errors.size && (
                <p className="text-red-500 text-sm mt-1">{errors.size}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Founded Year *
              </label>
              <input
                type="number"
                name="founded"
                value={formData.founded}
                onChange={handleInputChange}
                min="1900"
                max={new Date().getFullYear()}
                placeholder="2022"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.founded && (
                <p className="text-red-500 text-sm mt-1">{errors.founded}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State/Country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Description</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Your Company *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe your company's mission, products, services, and what makes you unique..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Minimum 50 characters</span>
              <span>{formData.description.length}/1000</span>
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://yourcompany.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">{errors.website}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="hello@yourcompany.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.contactEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person Name
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person Position
              </label>
              <input
                type="text"
                name="contactPosition"
                value={formData.contactPosition}
                onChange={handleInputChange}
                placeholder="e.g., CTO, Hiring Manager"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to complete your company profile?</h3>
              <p className="text-gray-600 text-sm mt-1">
                A complete profile helps students understand your needs and submit relevant projects
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : 'Save Company Profile'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StartupProfileForm;