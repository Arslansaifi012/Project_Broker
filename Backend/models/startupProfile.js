import mongoose from 'mongoose';

const startupProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
    required: true,
    enum: [
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
    ],
  },
  size: {
    type: String,
    required: true,
    enum: [
      '1-10 employees',
      '11-50 employees',
      '51-200 employees',
      '201-500 employees',
      '501-1000 employees',
      '1000+ employees'
    ],
  },
  founded: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 1000,
  },
  website: {
    type: String,
    trim: true,
    
  },
  contactEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true, 
  },
  contactPhone: {
    type: String,
    trim: true,
  },
  contactPerson: {
    type: String,
    required: true, 
    trim: true,
  },
  contactPosition: {
    type: String,
    required: true, 
    trim: true,
  },

}, { timestamps: true });

const startupProfile =
  mongoose.models.startupProfile ||
  mongoose.model('startupProfile', startupProfileSchema);

export default startupProfile;