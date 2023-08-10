# PG6301KontEksamen

# How to start/run the code

1. When you have opened the project, open the terminal and type "cd client". This will change directories to the client Then type "npm i" in the terminal. This will install necessary dependencies in the client folder.

2. Cd out of the client by typing "cd.." in the terminal.

3. Open the terminal and type "cd server". This will change directories to the server. Then type "npm i" in the terminal. This will install necessary dependencies in the server folder.

4. While inside the server type "node seed.js" in the terminal. Seed.js attempts to connect to a MongoDB instance running on localhost. This means that you must have MongoDB installed and running on your local machine.

5. The database name is hardcoded in the seed file as prot_time_management_db. Your MongoDB should not have a database with the same name, or the seeding script will overwrite it.

6. Done! You should now have a working project. Open a browser and type in http://localhost:3000 and you are good to go.



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