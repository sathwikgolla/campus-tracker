import React, { useState } from 'react';
import '../styles/FacultyLocator.css';

// Dummy data for faculty members
const facultyData = [
  { id: 1, name: 'Dr. John Smith', department: 'Computer Science', office: 'CS-101', email: 'john.smith@example.com' },
  { id: 2, name: 'Dr. Sarah Johnson', department: 'Mathematics', office: 'MATH-205', email: 'sarah.johnson@example.com' },
  { id: 3, name: 'Prof. Michael Brown', department: 'Physics', office: 'PHYS-150', email: 'michael.brown@example.com' },
  { id: 4, name: 'Dr. Emily Davis', department: 'Biology', office: 'BIO-300', email: 'emily.davis@example.com' },
  { id: 5, name: 'Prof. Robert Wilson', department: 'Chemistry', office: 'CHEM-210', email: 'robert.wilson@example.com' },
];

const FacultyLocator = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faculty-locator">
      <div className="container">
        <h1>Faculty Locator</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="faculty-list">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map(faculty => (
              <div key={faculty.id} className="faculty-card">
                <div className="faculty-info">
                  <h3>{faculty.name}</h3>
                  <p className="department">{faculty.department}</p>
                  <div className="details">
                    <p><strong>Office:</strong> {faculty.office}</p>
                    <p><strong>Email:</strong> {faculty.email}</p>
                  </div>
                </div>
                <button className="contact-btn">Contact</button>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No faculty members found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyLocator;
