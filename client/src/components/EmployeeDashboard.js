// client/src/components/EmployeeDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [loggedHours, setLoggedHours] = useState([]);

  useEffect(() => {
    // Fetch activities from the API
    axios.get('/api/activities')
      .then(response => setActivities(response.data))
      .catch(error => console.error('Error fetching activities:', error));

    // Fetch logged hours for the employee (replace '1' with actual employee ID)
    axios.get(`/api/logged-hours/1`)
      .then(response => setLoggedHours(response.data))
      .catch(error => console.error('Error fetching logged hours:', error));
  }, []);

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <h3>Available Activities:</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
      <h3>Logged Hours:</h3>
      <ul>
        {loggedHours.map(entry => (
          <li key={entry.activityId}>Activity {entry.activityId}: {entry.hours} hours</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDashboard;
