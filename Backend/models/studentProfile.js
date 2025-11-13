import mongoose from "mongoose";

const studentProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  college: { type: String, required: true },
  degree: { type: String, required: true },
  study: { type: String, required: true },
  endDate: { type: Date, required: true },
  gpa: { type: Number, min: 0, max: 4 },
  skills: { type: [String], required: true },
  bio: { type: String, required: true },
  portfolioLink: { type: String, required: true },
  linkedInLink: { type: String, required: true },
  githubLink: { type: String, required: true },
  availabilityForProjects: {
    type: String,
    enum: ['Available', 'Not Available', 'Part-time Only'],
    required: true
  },
  projectPreferences: { type: String, required: true },
  minProjectPrice: { type: Number, required: true },
  maxProjectPrice: { type: Number, required: true }
}, { timestamps: true });

const studentProfile = mongoose.models.studentProfile || mongoose.model('studentProfile', studentProfileSchema);

export default studentProfile;
