import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import StudentComponent from '../components/StudentComponent';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="main-container">
      <HeaderComponent title="Students" />
      <div className="loading">
        <h3>Loading student data...</h3>
        <p>Please wait while we fetch the student records.</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="main-container">
      <HeaderComponent title="Students" />
      <div className="error">
        <h3>Error loading data</h3>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="main-container">
      <HeaderComponent title="Students" />
      
      <div className="page-header">
        <h1>Student Directory</h1>
        <p>View and manage all enrolled students in the system</p>
      </div>

      <div className="students-grid">
        {students.map(student => (
          <StudentComponent
            key={student.id}
            name={student.name}
            course="Computer Science"
            year="3rd Year"
            studentId={`STU-${String(student.id).padStart(4, '0')}`}
            email={student.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
