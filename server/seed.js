const mongoose = require('mongoose');
const Activity = require('./models/Activity');
const Employee = require('./models/Employee');
const LoggedHour = require('./models/LoggedHour');
const Manager = require('./models/Manager');

mongoose.connect('mongodb://localhost:27017/prot_time_management_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    await Activity.deleteMany({});
    await Employee.deleteMany({});
    await LoggedHour.deleteMany({});
    await Manager.deleteMany({});

    const activities = [
        { name: 'Activity 1', department: 'Dept A' },
        { name: 'Activity 2', department: 'Dept B' },
    ];
    await Activity.insertMany(activities);

    const employees = [
        { username: 'employee1', password: 'password123', refreshToken: 'sometoken' },
        { username: 'employee2', password: 'password456', refreshToken: 'anothertoken' },
    ];
    await Employee.insertMany(employees);

    const loggedHours = [
        { name: 'John', department: 'Dept A', loggedHours: 8 },
        { name: 'Jane', department: 'Dept B', loggedHours: 7 },
    ];
    await LoggedHour.insertMany(loggedHours);

    const managers = [
        { username: 'manager1', password: 'managerpass123' },
        { username: 'manager2', password: 'managerpass456' },
    ];
    await Manager.insertMany(managers);

    console.log('Data seeding complete!');
    process.exit();
});
