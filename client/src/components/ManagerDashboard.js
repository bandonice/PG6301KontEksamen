import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component for creating activities
const CreateActivityForm = ({ onCreateActivity }) => {
  const [activityName, setActivityName] = useState('');
  const [activityDepartment, setActivityDepartment] = useState('');

  const handleCreate = () => {
    if (activityName && activityDepartment) {
      onCreateActivity(activityName, activityDepartment);
      setActivityName('');
      setActivityDepartment('');
    } else {
      alert('Please provide both activity name and department.');
    }
  };

  return (
    <form>
      <div>
        <label>Activity Name:</label>
        <input type="text" value={activityName} onChange={(e) => setActivityName(e.target.value)} />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={activityDepartment}
          onChange={(e) => setActivityDepartment(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleCreate}>
        Create Activity
      </button>
    </form>
  );
};

// Component for editing activities
const EditActivityForm = ({ activity, onEditActivity, onCancelEdit }) => {
  const [editActivityName, setEditActivityName] = useState(activity.name);
  const [editActivityDepartment, setEditActivityDepartment] = useState(activity.department);

  const handleEdit = () => {
    if (editActivityName && editActivityDepartment) {
      onEditActivity(activity._id, editActivityName, editActivityDepartment);
    } else {
      alert('Please provide both activity name and department.');
    }
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (
    <form>
      <div>
        <label>Activity Name:</label>
        <input
          type="text"
          value={editActivityName}
          onChange={(e) => setEditActivityName(e.target.value)}
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={editActivityDepartment}
          onChange={(e) => setEditActivityDepartment(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleEdit}>
        Edit Activity
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

// Component for displaying a list of activities
const ActivityList = ({ activities, onDeleteActivity, onEditActivity }) => (
    <ul>
      {activities.map((activity) => (
        <li key={activity._id}>
          {activity.name} (Department: {activity.department})
          <button onClick={() => onDeleteActivity(activity._id)}>Delete</button>
          <button onClick={() => onEditActivity(activity)}>Edit</button>
        </li>
      ))}
    </ul>
  );

const ManagerDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [editedActivity, setEditedActivity] = useState(null); // Store the currently edited activity

  useEffect(() => {
    // Fetch activities from the API
    axios
      .get('/api/activities')
      .then((response) => setActivities(response.data))
      .catch((error) => console.error('Error fetching activities:', error));
  }, []);

  const handleCreateActivity = (name, department) => {
    axios
      .post('/api/activities', {
        name: name,
        department: department,
      })
      .then((response) => {
        // Update activities state with new activity
        setActivities([...activities, response.data]);
      })
      .catch((error) => {
        console.error('Error creating activity:', error);
        // Handle error if needed and show error message
      });
  };

  const handleEditActivity = (id, name, department) => {
    axios
      .put(`/api/activities/${id}`, {
        name: name,
        department: department,
      })
      .then((response) => {
        console.log('Activity updated successfully:', response.data);
        // Update the activities state with the updated activity
        const updatedActivities = activities.map((activity) =>
          activity._id === id ? { ...activity, name: name, department: department } : activity
        );
        setActivities(updatedActivities);
        setEditedActivity(null); // Reset the edited activity
      })
      .catch((error) => {
        console.error('Error updating activity:', error);
        // Handle error if needed and show error message
      });
  };

  const handleDeleteActivity = (id) => {
    axios
      .delete(`/api/activities/${id}`)
      .then(() => {
        // Update activities state by removing the deleted activity
        const updatedActivities = activities.filter((activity) => activity._id !== id);
        setActivities(updatedActivities);
      })
      .catch((error) => {
        console.error('Error deleting activity:', error);
        // Handle error if needed and show error message
      });
  };

  const handleStartEdit = (activity) => {
    // Set the currently edited activity when the Edit button is clicked
    setEditedActivity(activity);
  };

  const handleCancelEdit = () => {
    // Clear the currently edited activity when the Cancel button is clicked
    setEditedActivity(null);
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <h3>Available Activities:</h3>
      <ActivityList
        activities={activities}
        onDeleteActivity={handleDeleteActivity}
        onEditActivity={handleStartEdit}
      />
      <h3>Create New Activity:</h3>
      <CreateActivityForm onCreateActivity={handleCreateActivity} />
      {editedActivity && (
        <div>
          <h3>Edit Activity:</h3>
          <EditActivityForm
            key={`edit-${editedActivity._id}`}
            activity={editedActivity}
            onEditActivity={handleEditActivity}
            onCancelEdit={handleCancelEdit}
          />
        </div>
      )}
    </div>
  );
};
export default ManagerDashboard;
