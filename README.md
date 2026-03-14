# DegreeTree

## Project info

DegreeTree is a full-stack web application designed to help Computer Science students at Maynooth University understand the structure of their degree. The application allows students to explore module relationships, see how topics connect across different years, and understand how modules lead into each other.

The project was developed as a Final Year Project and aims to make the Computer Science curriculum easier to visualise compared to traditional module listings.

## Features

User registration and login system.
Secure password storage using bcrypt hashing.
Authentication-protected pages.
Interactive module exploration interface.
Visual highlighting of module dependencies and connections.
MongoDB database for storing user accounts.
Email validation restricting registration to Maynooth University emails.

## Technologies Used

**Frontend:**

React
TypeScript
Tailwind CSS
shadcn/ui

**Backend:**

Node.js
Express

Database:
MongoDB
Mongoose

**Security:**

bcrypt password hashing

**Installation**

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/aji-a15/fyp.git

# Step 2: Navigate into the project.
cd FYP

# Step 3: Backend Setup, navigate to the server folder.
cd server

# Step 4: Install dependencies.
npm install

# Step 5: Create .env file and add:
MONGO_URI=mongodb+srv://<username>:<password>@database.mongodb.net/degreetree
PORT=5000

# Step 6: Frontend Setup, open a new terminal and install dependencies.
npm install

# Step 7: Start the development server.
npm run dev

# Frontend will run on 
http://localhost:8080
```



