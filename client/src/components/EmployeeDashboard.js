import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const EmployeeDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [department, setDepartment] = useState('');
  const [hoursLogged, setHoursLogged] = useState(0);
  const [loggedHours, setLoggedHours] = useState([]);

  useEffect(() => {
    // Fetch activities from the API
    axios.get('/api/activities')
      .then(response => setActivities(response.data))
      .catch(error => console.error('Error fetching activities:', error));

    // Fetch logged hours for the employee (replace '1' with actual employee ID)
    axios.get(`/api/loggedhours`)
      .then(response => setLoggedHours(response.data))
      .catch(error => console.error('Error fetching logged hours:', error));
  }, []);

  const handleActivityChange = (event) => {
    const selectedActivityName = event.target.value;
    setSelectedActivity(selectedActivityName);

    // Find the selected activity and set its department as default
    const selectedActivityObject = activities.find(activity => activity.name === selectedActivityName);
    if (selectedActivityObject) {
      setDepartment(selectedActivityObject.department);
    }
  };

  const handleHoursChange = (event) => {
    setHoursLogged(event.target.value);
  };

  const handleLogHours = () => {
    if (selectedActivity && department && hoursLogged > 0) {
      axios.post(`/api/loggedhours`, {
        name: selectedActivity,
        department: department,
        loggedHours: hoursLogged,
      })
      .then(response => {
        // Update loggedHours state with new entry
        setLoggedHours([...loggedHours, {
          _id: response.data._id,
          name: selectedActivity,
          department: department,
          loggedHours: hoursLogged,
        }]);
        // Reset form fields
        setSelectedActivity('');
        setDepartment('');
        setHoursLogged(0);
        // Show success message if needed
      })
      .catch(error => {
        console.error('Error logging hours:', error);
        // Handle error if needed and show error message
      });
    } else {
      // Handle incomplete data and show error message
    }
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>

      <h3>Available Activities:</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name} (Department: {activity.department})</li>
        ))}
      </ul>

      <h3>Logged Hours:</h3>
      <ul>
        {loggedHours.map(entry => (
          <li key={entry._id}>
            Activity: {entry.name}, Department: {entry.department}, Hours: {entry.loggedHours}
          </li>
        ))}
      </ul>

      <h3>Log Hours:</h3>
      <form>
        <div>
          <label>Select an activity:</label>
          <select value={selectedActivity} onChange={handleActivityChange}>
            <option value="" disabled>Select an activity</option>
            {activities.map(activity => (
              <option key={activity.id} value={activity.name}>{activity.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Hours Logged:</label>
          <input type="number" value={hoursLogged} onChange={handleHoursChange} />
        </div>
        <button type="button" onClick={handleLogHours}>Log Hours</button>
      </form>
    <Link to="/">Go to Employee Login page</Link>

    </div>
  );
};

export default EmployeeDashboard;
