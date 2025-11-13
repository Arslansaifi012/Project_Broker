// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import StudentDashboard from './pages/Student.jsx';
import StartupDashboard from './pages/StartupDashboard.jsx';
import ProjectUpload from './pages/PorjectUpload.jsx';
import ProjectDetails from './pages/PorjectDetails.jsx';
import BrowseProjects from './pages/BrowseProject.jsx';
import Footer from './components/Footer.jsx'
import StudentProfileForm from './pages/StudentProfileForm.jsx';
import StartupProfileForm from './pages/StartupProfileForm.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path = "/student-profile" element={<StudentProfileForm/>} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/startup/dashboard" element={<StartupDashboard />} />
          <Route path="/startup-profile" element={<StartupProfileForm />} />
          <Route path="/upload-project" element={<ProjectUpload />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/browse-projects" element={<BrowseProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;