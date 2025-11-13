


// src/pages/StudentProfileForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentProfileForm = () => {
  const navigate = useNavigate();
  
  // Initial form state - only basic registered info pre-filled
  const [formData, setFormData] = useState({
    // Basic registered info (pre-filled)
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    
    // Additional profile details (empty initially)
    university: '',
    degree: '',
    graduationYear: '',
    gpa: '',
    major: '',
    skills: [],
    bio: '',
    portfolio: '',
    linkedin: '',
    github: '',
    location: '',
    
    // Project preferences
    projectCategories: [],
    priceRange: {
      min: '',
      max: ''
    },
    availability: 'part-time'
  });

  const [newSkill, setNewSkill] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available options for dropdowns
  const universities = [
    'Massachusetts Institute of Technology (MIT)',
    'Stanford University',
    'Harvard University',
    'Carnegie Mellon University',
    'University of California, Berkeley',
    'Georgia Institute of Technology',
    'University of Illinois Urbana-Champaign',
    'University of Washington',
    'University of Texas at Austin',
    'Other'
  ];

  const degrees = [
    'Bachelor of Computer Science',
    'Bachelor of Engineering',
    'Bachelor of Science',
    'Master of Computer Science',
    'Master of Engineering',
    'PhD in Computer Science',
    'Other'
  ];

  const projectCategories = [
    'Web Development',
    'Mobile Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Game Development',
    'Internet of Things',
    'Blockchain',
    'Cybersecurity',
    'Cloud Computing'
  ];

  const availabilityOptions = [
    { value: 'part-time', label: 'Part-time (10-20 hrs/week)' },
    { value: 'full-time', label: 'Full-time (30-40 hrs/week)' },
    { value: 'flexible', label: 'Flexible' }
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

  const handleNestedInputChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleCategoryToggle = (category) => {
    setFormData(prev => ({
      ...prev,
      projectCategories: prev.projectCategories.includes(category)
        ? prev.projectCategories.filter(c => c !== category)
        : [...prev.projectCategories, category]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.degree.trim()) newErrors.degree = 'Degree is required';
    if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
    if (!formData.major.trim()) newErrors.major = 'Major is required';
    if (formData.skills.length === 0) newErrors.skills = 'At least one skill is required';
    if (!formData.bio.trim() || formData.bio.length < 50) newErrors.bio = 'Bio must be at least 50 characters';

    // GPA validation
    if (formData.gpa) {
      const gpaValue = parseFloat(formData.gpa);
      if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4.0) {
        newErrors.gpa = 'GPA must be between 0.0 and 4.0';
      }
    }

    // URL validation
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (formData.portfolio && !urlRegex.test(formData.portfolio)) {
      newErrors.portfolio = 'Please enter a valid URL';
    }
    if (formData.linkedin && !urlRegex.test(formData.linkedin)) {
      newErrors.linkedin = 'Please enter a valid URL';
    }
    if (formData.github && !urlRegex.test(formData.github)) {
      newErrors.github = 'Please enter a valid URL';
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
      console.log('Profile data to save:', formData);
      
      // Show success message and redirect
      alert('Profile updated successfully!');
      navigate('/student-dashboard');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
            <p className="text-gray-600 mt-2">
              Add your academic and professional details to increase visibility to startups
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
        {/* Basic Information Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State/Country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Academic Information Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University *
              </label>
              <select
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select University</option>
                {universities.map(uni => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
              {errors.university && (
                <p className="text-red-500 text-sm mt-1">{errors.university}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree Program *
              </label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Degree</option>
                {degrees.map(degree => (
                  <option key={degree} value={degree}>{degree}</option>
                ))}
              </select>
              {errors.degree && (
                <p className="text-red-500 text-sm mt-1">{errors.degree}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Major/Field of Study *
              </label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                placeholder="e.g., Computer Science, Electrical Engineering"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.major && (
                <p className="text-red-500 text-sm mt-1">{errors.major}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Graduation Year *
              </label>
              <select
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors.graduationYear && (
                <p className="text-red-500 text-sm mt-1">{errors.graduationYear}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPA (Optional)
              </label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleInputChange}
                min="0"
                max="4.0"
                step="0.1"
                placeholder="4.0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.gpa && (
                <p className="text-red-500 text-sm mt-1">{errors.gpa}</p>
              )}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Skills *
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="e.g., Python, React, Machine Learning"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
            {errors.skills && (
              <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 text-indigo-600 hover:text-indigo-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Professional Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Profile</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio/Introduction *
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell startups about yourself, your interests, and what kind of projects you enjoy working on..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Minimum 50 characters</span>
              <span>{formData.bio.length}/500</span>
            </div>
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Website
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://yourportfolio.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.portfolio && (
                <p className="text-red-500 text-sm mt-1">{errors.portfolio}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.linkedin && (
                <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GitHub Profile
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                placeholder="https://github.com/yourusername"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.github && (
                <p className="text-red-500 text-sm mt-1">{errors.github}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability for Projects
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {availabilityOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Preferences Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Preferences</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preferred Project Categories
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {projectCategories.map(category => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.projectCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Project Price ($)
              </label>
              <input
                type="number"
                value={formData.priceRange.min}
                onChange={(e) => handleNestedInputChange('priceRange', 'min', e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Project Price ($)
              </label>
              <input
                type="number"
                value={formData.priceRange.max}
                onChange={(e) => handleNestedInputChange('priceRange', 'max', e.target.value)}
                placeholder="5000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to complete your profile?</h3>
              <p className="text-gray-600 text-sm mt-1">
                A complete profile increases your chances of getting noticed by startups
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
                {isSubmitting ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentProfileForm;