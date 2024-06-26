# StudyNotion - EdTech Platform
![StudyNotion](https://github.com/Ojasdudooknale/Study-notion/assets/141921195/f2d7aa91-c813-47e8-9008-88be85a67b5e)

### Live Demo
Experience StudyNotion in action by visiting our [live demo][https://study-notion-ten-wine.vercel.app/].

### Video Demo
Watch a detailed demonstration of StudyNotion's features in our [video demo on Google Drive](https://drive.google.com).


StudyNotion is a comprehensive ed-tech platform designed to revolutionize the way students learn and instructors teach. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), StudyNotion empowers users to create, consume, and rate educational content seamlessly.

## Project Overview

StudyNotion aims to bridge the gap between traditional education and modern learning needs by offering:

- **Interactive Learning Experience**: Engaging courses and interactive content that make learning enjoyable and effective.
- **Instructor Platform**: A platform for instructors to showcase expertise, connect with learners worldwide, and manage their courses effortlessly.

## Key Features

- **Student-Focused Features**:
  - Browse and enroll in courses across various subjects.
  - Personalized user profiles with course recommendations and progress tracking.
  - Interactive course content including videos, quizzes, and assignments.

- **Instructor Tools**:
  - Dashboard for course creation, management, and analytics.
  - Integration with tools for content creation and multimedia management.
  - Monetization options through course sales and subscriptions.

## Technologies Used

- **Front-end**: React.js, Redux, Tailwind CSS
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Media Management**: Cloudinary
- **Payment Integration**: Razorpay

# System Architecture

StudyNotion is built on a client-server architecture that supports its diverse functionalities for students, instructors, and administrators. The system architecture consists of three main components: the front end, the back end, and the database.

## Front-end Architecture

The front end of StudyNotion is designed using React.js, a powerful JavaScript library for building user interfaces. It provides a responsive and dynamic interface crucial for an engaging learning experience. Tailwind CSS is used for styling, ensuring a clean and modern look across all pages. Key pages include:

### For Students:
- **Homepage**: Introduction to StudyNotion, course list, and user details.
- **Course List**: Displays available courses with descriptions and ratings.
- **Wishlist**: Shows courses added by students for future enrollment.
- **Cart Checkout**: Handles course purchases and enrollment.
- **Course Content**: Detailed content including videos, documents, and quizzes.
- **User Profile**: Displays and allows editing of student details.

### For Instructors:
- **Dashboard**: Overview of courses, ratings, and feedback.
- **Course Management**: Pages for creating, updating, and deleting courses.
- **Analytics**: Insights into course performance and user engagement metrics.
- **Profile Management**: Allows instructors to view and edit their profiles.

### Tools Used:
- **React.js**: Front-end library for building user interfaces.
- **Redux**: State management for predictable state changes.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Navigation and routing for single-page applications.

## Back-end Architecture

StudyNotion's back end is powered by Node.js and Express.js, providing a robust foundation for server-side operations. MongoDB serves as the primary database for storing course content, user data, and application logs. Key features and tools include:

### Features and Functionalities:
- **User Authentication**: Secure login and registration using JWT tokens.
- **Course Management**: CRUD operations for courses, including content management.
- **Payment Integration**: Integration with Razorpay for secure course purchases.
- **Media Management**: Cloudinary for handling multimedia content storage and retrieval.
- **Email Services**: Sending verification emails and password reset links.

### Tools and Libraries Used:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for scalable data storage.
- **Mongoose**: ODM library for MongoDB schema modeling.
- **JWT**: JSON Web Tokens for authentication.
- **Cloudinary**: Cloud-based media management for images and videos.
- **Nodemailer**: Node.js module for sending emails.

---

### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema**: Includes fields such as `name`, `email`, `password`, and `courseDetails` for each student.
- **Instructor Schema**: Includes fields such as `name`, `email`, `password`, and `courseDetails` for each instructor.
- **Course Schema**: Includes fields such as `courseName`, `description`, `instructorDetails`, and `mediaContent`.

### Database

The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.


### API Design

The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.


