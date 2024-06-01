import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is my personal space on the web where I showcase my work and skills.</p>
      <p>Mission Statement: To create amazing web experiences.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}

export default Home;