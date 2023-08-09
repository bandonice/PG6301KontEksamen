// server/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const Activity = require('./models/Activity');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const activityRoutes = require('./routes/activities');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', activityRoutes);


mongoose.connect('mongodb://localhost:27017/prot_time_management_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// ... (other server setup)


app.get('/', (req, res) => {
  res.send('Server is up and running.');
});


app.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
