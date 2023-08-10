import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; 
import axios from 'axios';

const EmployeeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/employee/login', {
        username,
        password,
      });

      console.log('Login successful!', response.data);

      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/employee/dashboard" />;
  };


  return (
    <div>
      <h2>Employee Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/manager/Login">Go to Manager login page</Link>
    </div>
  );
};

export default EmployeeLogin;
