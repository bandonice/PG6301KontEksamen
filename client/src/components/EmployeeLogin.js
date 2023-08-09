// client/src/components/EmployeeLogin.js
import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeLogin = () => {
  return (
    <div>
      <h2>Employee Login</h2>
      {/* Add form elements for employee login */}
      <Link to="/employee/dashboard">Go to Employee Dashboard</Link>
    </div>
  );
};

export default EmployeeLogin;
