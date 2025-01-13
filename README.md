# Project Name

## Description
This project consists of a backend and a frontend. The backend connects to MongoDB and serves data through an API, which the frontend consumes to display a product table and an analytics page with graphs.

## Prerequisites
- Node.js installed on your machine
- MongoDB database (data fetched from MongoDB Compass)
- NPM (Node Package Manager)

## Running the Backend

1. Navigate to the backend directory:

   ```bash
   cd server
install the require dependencies using this command "npm install"

2. start the server 
   node server.js
## Running the frontend

1. Navigate to the frontend directory:
    cd server/task3
   
2.run the command
    npm start 
To run the project:

Backend

Navigate to the server directory in your terminal.
Run the following command to start the backend server:
bash
Copy code
node server.js
This will start the backend and provide API endpoints to fetch data from MongoDB.

Frontend

Once the backend is running, navigate to the server/task3 directory in your terminal.
Run the following command to start the frontend:
bash
Copy code
npm start
The frontend contains two key files:

producttable.js: Displays a table with product data fetched from the MongoDB API.
analyticspage.js: Displays analytics data and graphs fetched from MongoDB via the backend API.
This setup will allow you to view the product data and analytics graphs in the frontend, with data fetched from MongoDB Compass through the backend API.
