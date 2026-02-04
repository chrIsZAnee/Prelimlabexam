import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const Home = () => {
  return (
    <div className="main-container">
      <HeaderComponent title="SchoolUs" />
      
      <div className="welcome-section">
        <h1>Welcome to SchoolUs</h1>
        <p>Your comprehensive student information management system</p>
      </div>

      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Navigate through the sections below to manage your school data</p>
      </div>

      <div className="nav-grid">
        <Link to="/students" style={{ textDecoration: 'none' }}>
          <div className="nav-card">
            <div className="nav-card-icon">👨‍🎓</div>
            <h3>Students</h3>
            <p>Manage student information, records, and profiles</p>
          </div>
        </Link>
        <Link to="/courses" style={{ textDecoration: 'none' }}>
          <div className="nav-card">
            <div className="nav-card-icon">📚</div>
            <h3>Courses</h3>
            <p>View available courses, fees, and descriptions</p>
          </div>
        </Link>
        <Link to="/department" style={{ textDecoration: 'none' }}>
          <div className="nav-card">
            <div className="nav-card-icon">🏛️</div>
            <h3>Departments</h3>
            <p>Explore academic departments and their students</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
