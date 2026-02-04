import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';

const Department = () => {
  const [departments, setDepartments] = useState({});
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
        const deptList = [
          { id: 1, name: 'Computer Science Department', icon: '💻' },
          { id: 2, name: 'Information Technology Department', icon: '🌐' },
          { id: 3, name: 'Engineering Department', icon: '⚙️' }
        ];
        
        const grouped = data.reduce((acc, student) => {
          const deptIndex = student.id % 3;
          const dept = deptList[deptIndex];
          if (!acc[dept.name]) acc[dept.name] = { students: [], icon: dept.icon };
          acc[dept.name].students.push(student);
          return acc;
        }, {});
        setDepartments(grouped);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="main-container">
      <HeaderComponent title="Departments" />
      <div className="loading">
        <h3>Loading department data...</h3>
        <p>Please wait while we fetch the department information.</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="main-container">
      <HeaderComponent title="Departments" />
      <div className="error">
        <h3>Error loading data</h3>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="main-container">
      <HeaderComponent title="Departments" />
      
      <div className="page-header">
        <h1>Academic Departments</h1>
        <p>Explore our academic units and their enrolled students</p>
      </div>

      <div className="departments-grid">
        {Object.entries(departments).map(([deptName, data]) => (
          <div key={deptName} className="department-card">
            <div className="department-header">
              <div className="department-icon">{data.icon}</div>
              <h3>{deptName}</h3>
              <span className="student-count">{data.students.length} Students</span>
            </div>
            <ul className="department-students">
              {data.students.slice(0, 5).map(student => (
                <li key={student.id}>
                  <span className="student-dot"></span>
                  {student.name}
                </li>
              ))}
              {data.students.length > 5 && (
                <li className="more-students">
                  ... and {data.students.length - 5} more students
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
