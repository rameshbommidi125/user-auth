import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './index.css';

const LoginForm = () => {
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user_email') {
      setUserEmail(value);
    } else if (name === 'user_password') {
      setUserPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { user_email, user_password };

    try {
      const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', dataToSend);
      const userData = response.data;
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" value={user_email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="user_password" value={user_password} onChange={handleChange} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginForm;
