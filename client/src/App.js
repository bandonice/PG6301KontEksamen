// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeLogin from './components/EmployeeLogin';
import ManagerLogin from './components/ManagerLogin';
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/manager/login" element={<ManagerLogin />} />
        <Route path="/" element={<EmployeeLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
