# PG6301KontEksamen

# Introduction

This is an application where employees can log onto ad dashboard, choose an activity and log how many hours theyve spent doing that acitvity.
In this application managers can log onto a manager dashboard where they can create, edit and delete activites.

# How to start/run the code

1. When you have opened the project, open the terminal and type "cd client". This will change directories to the client Then type "npm i" in the terminal. This will install necessary dependencies in the client folder. After this type "npm start" to start the frontend.

2.	Open another terminal and type "cd server". This will change directories to the server. Then type "npm i" in the terminal. This will install the necessary dependencies in the server folder.

While inside the server type "node seed.js" in the terminal. Seed.js attempts to connect to a MongoDB instance running on localhost. This means that you must have MongoDB installed and running on your local machine. The database name is hardcoded in the seed file as prot_time_management_db. Your MongoDB should not have a database with the same name, or the seeding script will overwrite it.

3.	After this you can type "npm run dev" to start the server.

4.	Done! You should now have a working project. Open a browser and type in http://localhost:3000 and you are good to go.

In order to log in we have test users for both employees and managers.

Employee Test user: Username: employee1, Password: password123
Manager Test user: Username: manager1: Password: managerpass123 


# Code structure

I hace structed it so that all the frontend is in the "client" directory, and all the backend is in the "server" directory.


# Tasks Acomplished 

General Requirements (R1): ✅
- Write a homepage with React.
- Create at least 2 other React pages accessible via React-Router.
- Ensure at least one page has some state with change triggered from the interface.
- Provide navigation back from each page without using the browser's "Back" button.

Task-Specific Requirements (T1): SOMEWHAT COMPLETED
- Employees can see activities available to them. ✅
- Display how many hours employees have already logged. ✅
- Allow employees to log hours on activities without exceeding the maximum amount of hours. 🟥
- Have basic test data available when running in developer mode. ✅

General Requirements (R2): SOMEWHAT COMPLETED
- Create a RESTful API with at least one GET, POST, PUT, and DELETE operation using JSON for data transfer. ✅
- Use the RESTful API in the frontend. ✅
- List all endpoints in the README.md. ✅
- Setup continuous integration using GitHub actions. NOT COMPLETED

Task-Specific Requirements (T2): ✅
- Allow managers to create, modify, and delete tasks for employees to log time.
- Include predefined accounts for employees and managers in the database. 

General Requirements (R3): SOMEWHAT COMPLETED 
- Implement authentication/authorization using cookies. COMPLETED ✅
- Create a login page in the frontend. COMPLETED ✅
- Display a personalized welcome message for logged-in users. 🟥
- Provide an option to logout on every page. 🟥


Task-Specific Requirements (T3): ✅
- Allow managers to log in, add, and remove activities for their department.
- Enable managers to edit activities.


# Endpoints

Authentication

1. Employee Login

Method: POST
Endpoint: /api/auth/employee/login
Body:
username: Employee's username (Required)
password: Employee's password (Required)
Description: Allows employees to log in. Returns a token/session upon successful login.

2. Manager Login
Method: POST
Endpoint: /api/auth/manager/login
Body:
username: Manager's username (Required)
password: Manager's password (Required)
Description: Allows managers to log in. Returns a token/session upon successful login.


Activities

1. Get all activities

Method: GET
Endpoint: /api/activities
Description: Fetches all the activities.

2. Create a new activity

Method: POST
Endpoint: /api/activities
Body:
name: The name of the activity (Required)
department: The department associated with the activity (Required)
Description: Creates a new activity.
Note: This endpoint will also log a message to the console indicating the received request.

3. Edit an existing activity

Method: PUT
Endpoint: /api/activities/:id
Parameters:
id: The unique identifier of the activity (Required)
Body:
name: The new name of the activity
department: The new department associated with the activity
Description: Edits details of an existing activity identified by the given id.

4. Delete an activity

Method: DELETE
Endpoint: /api/activities/:id
Parameters:
id: The unique identifier of the activity (Required)
Description: Deletes an activity identified by the given id.

Logged Hours

1. Get All Logged Hours

Method: GET
Endpoint: /api/loggedhours
Description: Retrieves a list of all logged hours.
Response: Returns an array of logged hour entries with details such as name, department, and loggedHours.

2. Create a New Logged Hour Entry

Method: POST
Endpoint: /api/loggedhours
Body:
name: Name of the person/employee (Required)
department: Department associated with the logged hour (Required)
loggedHours: Number of hours logged (Required)
Description: Allows the creation of a new logged hour entry. It's important to provide all the necessary details in the request body.
Response: Returns details of the created logged hour entry.


# References

Tools used
- Google
- Youtube
- Lectures
