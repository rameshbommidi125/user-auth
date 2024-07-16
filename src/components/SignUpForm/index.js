import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SignUpForm = () => {
  const [user_firstname, setUserFirstname] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_phone, setUserPhone] = useState('');
  const [user_password, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'user_firstname':
        setUserFirstname(value);
        break;
      case 'user_email':
        setUserEmail(value);
        break;
      case 'user_phone':
        setUserPhone(value);
        break;
      case 'user_password':
        setUserPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      user_firstname,
      user_email,
      user_phone,
      user_password,
      user_lastname: 'ni',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    try {
      await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', dataToSend);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="sign-up-form-container">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div>
          <label>First Name:</label>
          <input type="text" name="user_firstname" value={user_firstname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" value={user_email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="user_phone" value={user_phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="user_password" value={user_password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
