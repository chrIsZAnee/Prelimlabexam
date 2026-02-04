import React, { useState } from 'react';

const StudentComponent = ({ name, course, year, studentId, email, photo }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Sample student photos (using UI Avatars for placeholder)
  const getAvatarUrl = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=36656B&color=fff&size=150`;
  };

  return (
    <div className="student-card">
      <div className="student-header">
        <img 
          src={photo || getAvatarUrl(name)} 
          alt={`${name}'s profile`} 
          className="student-avatar"
        />
        <div className="student-info">
          <h3>{name}</h3>
          <span className="student-id">ID: {studentId || 'STU-' + Math.floor(Math.random() * 10000)}</span>
        </div>
      </div>
      
      {isVisible && (
        <div className="student-details">
          <div className="detail-item">
            <span className="detail-label">Course</span>
            <span className="detail-value">{course}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Year Level</span>
            <span className="detail-value">{year}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email</span>
            <span className="detail-value">{email || 'Not provided'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status</span>
            <span className="detail-value" style={{ color: '#75B06F' }}>Active</span>
          </div>
        </div>
      )}
      
      <div className="student-actions">
        <button className="view-btn">View Profile</button>
        <button className="toggle-btn" onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  );
};

export default StudentComponent;
