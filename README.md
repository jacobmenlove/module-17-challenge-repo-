# module-17-challenge-

Social Network API

Table of Contents
Description
User Story
Acceptance Criteria
Technologies Used
Features
Installation
Usage
API Routes
Demo
License
Questions
Description
The Social Network API is a backend application for a social media platform where users can create accounts, share thoughts, react to friends' thoughts, and manage their friend lists. This API is built using Node.js, Express.js, MongoDB, and Mongoose. It handles large amounts of unstructured data, making it ideal for social media platforms.

Key features of the API include:

Creating, updating, and deleting users and thoughts.
Adding and removing friends.
Reacting to friends' thoughts.
Automatically formatting timestamps for thoughts and reactions.
Demonstrating NoSQL database design principles.
This API is designed for flexibility and scalability, making it well-suited for handling social media data.

User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

Acceptance Criteria
When the application is invoked, the server starts and the Mongoose models sync to the MongoDB database.
API GET routes return all users and thoughts in a formatted JSON.
API POST, PUT, and DELETE routes allow for creating, updating, and deleting users and thoughts.
API POST and DELETE routes allow adding/removing friends and reactions to thoughts.
Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for handling unstructured data.
Mongoose: ODM library for MongoDB.
Insomnia/Postman: API testing tools.
JavaScript (ES6): Backend scripting.
dotenv: Environment variables management.
Features
User CRUD Operations: Create, read, update, and delete users.
Thoughts CRUD Operations: Create, read, update, and delete thoughts.
Reactions: Users can react to others' thoughts.
Friend List Management: Add and remove friends from a user's list.
Timestamp Formatting: Timestamps for thoughts and reactions are automatically formatted.
Virtuals: Use Mongoose virtuals to calculate friend count and reaction count dynamically.
Installation
Follow these steps to set up and run the project locally:

Clone the repository:

bash
git clone <repository-url>
cd <project-folder>
Install dependencies:

bash
npm install
Set up environment variables: Create a .env file in the root of your project and add the following:

bash
MONGODB_URI=mongodb://localhost:27017/socialNetworkDB
PORT=3001
Ensure MongoDB is running: If using MongoDB locally, start the MongoDB service.

Windows: net start MongoDB
macOS: brew services start mongodb-community
Linux: sudo systemctl start mongod
Start the application:

bash
npm start
Usage
Once the server is running, you can interact with the API using Insomnia or Postman. Below are example requests for each route.

API Routes
Here are the primary API routes for managing users, thoughts, friends, and reactions.


A walkthrough video demonstrating how to run and test the API is available here.

This video covers: 

Starting the application.
Testing all the GET, POST, PUT, and DELETE routes in Insomnia.
