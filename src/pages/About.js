import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About CampusTracker</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              CampusTracker is designed to simplify campus navigation and faculty information access for students, 
              staff, and visitors. Our mission is to create a seamless experience for everyone in the academic 
              community to find the resources and people they need.
            </p>
          </section>

          <section className="about-section">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Faculty Directory</h3>
                <p>Quickly find and contact faculty members across all departments.</p>
              </div>
              <div className="feature-item">
                <h3>Campus Navigation</h3>
                <p>Get directions to any building or department on campus.</p>
              </div>
              <div className="feature-item">
                <h3>Real-time Updates</h3>
                <p>Stay informed about office hours, room changes, and more.</p>
              </div>
              <div className="feature-item">
                <h3>User Accounts</h3>
                <p>Save your searches and preferences with a personal account.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you!
              <br />
              Email: support@campustracker.edu
              <br />
              Phone: (123) 456-7890
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
