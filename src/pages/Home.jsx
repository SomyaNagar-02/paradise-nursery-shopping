import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🌿 Paradise Nursery 🌿</h1>
        <p>Welcome to your one-stop destination for beautiful houseplants. Transform your space with nature's finest selections.</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
