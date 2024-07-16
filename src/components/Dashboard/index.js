import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Cards'; // Corrected path to Card component
import './index.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  if (!user) {
    navigate('/signup');
    return null;
  }

  return (
    <div className="dashboard">
      <h1>Welcome</h1>
      <Card />
      <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
