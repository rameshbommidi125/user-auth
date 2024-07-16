import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  </Router>
);

export default App;
