import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to CampusTracker</h1>
        <p>Your one-stop solution for campus navigation and faculty information</p>
        <Link to="/faculty-locator" className="btn">
          Get Started
        </Link>
      </div>
      
      <div className="features">
        <div className="feature">
          <h3>Find Faculty</h3>
          <p>Quickly locate faculty members and their office locations across campus.</p>
        </div>
        <div className="feature">
          <h3>Easy Navigation</h3>
          <p>Get directions to any building or department with our intuitive interface.</p>
        </div>
        <div className="feature">
          <h3>Stay Connected</h3>
          <p>Access important campus information and updates in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
