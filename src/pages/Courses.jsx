import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: 'Computer Science',
      fee: '₱5,000',
      description: 'Explore programming, algorithms, and software development. Build the skills needed for a career in tech.',
      icon: '💻'
    },
    {
      id: 2,
      name: 'Information Technology',
      fee: '₱4,500',
      description: 'Learn about networks, databases, and IT infrastructure. Prepare for the digital workplace.',
      icon: '🌐'
    },
    {
      id: 3,
      name: 'Engineering',
      fee: '₱6,000',
      description: 'Study various engineering disciplines and problem-solving. Design the future through innovation.',
      icon: '⚙️'
    },
    {
      id: 4,
      name: 'Business Administration',
      fee: '₱4,000',
      description: 'Develop skills in management, finance, and entrepreneurship. Lead organizations to success.',
      icon: '📊'
    },
    {
      id: 5,
      name: 'Psychology',
      fee: '₱3,500',
      description: 'Understand human behavior and mental processes. Make a difference in people\'s lives.',
      icon: '🧠'
    },
    {
      id: 6,
      name: 'Accountancy',
      fee: '₱4,200',
      description: 'Master financial reporting, auditing, and business law. Become a trusted financial advisor.',
      icon: '📈'
    }
  ];

  return (
    <div className="main-container">
      <HeaderComponent title="Courses" />
      
      <div className="page-header">
        <h1>Available Courses</h1>
        <p>Browse our academic programs and find the right path for your future</p>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{course.icon}</div>
            <h3>{course.name}</h3>
            <span className="course-fee">{course.fee}</span>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
