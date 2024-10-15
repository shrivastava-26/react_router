# React Router Practice

This repository contains my practice projects for learning and implementing routing concepts in **React.js** using **React Router**.

## Features

- **React Router DOM**: Learn how to use `react-router-dom` for client-side routing.
- **Basic Routing**: Implement basic navigation between pages.
- **Nested Routes**: Understand how to structure routes with child components.
- **Dynamic Routes**: Use dynamic routing to create parameterized URLs.
- **Programmatic Navigation**: Learn how to navigate programmatically using React Router hooks.
- **404 Pages**: Handle unknown routes by creating custom "Not Found" pages.

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **React Router DOM**: Standard routing library for React.
- **JavaScript (ES6)**: Modern JavaScript features like hooks, arrow functions, and destructuring.

## Project Structure

    ├── public
    │   └── index.html
    ├── src
    │   ├── components
    │   │   ├── Home.js
    │   │   ├── About.js
    │   │   └── NotFound.js
    │   ├── App.js
    │   ├── index.js
    │   ├── routes
    │   │   ├── MainRoutes.js
    │   └── styles
    │       └── App.css
    └── package.json

Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js and npm (or yarn)
A code editor like VSCode
Installation
Clone the repository:


    git clone https://github.com/yourusername/react-router-practice.git
    cd react-router-practice
    Install dependencies:
    
    
    npm install
    Start the development server:
    
    
    npm start
    This will start the development server at http://localhost:3000/.

Available Routes
Home Page (/): The landing page of the app.
About Page (/about): A simple page that provides information about the app.
Dynamic Route Example (/user/:id): Dynamic routing for user details.
404 Not Found (*): Catch-all route for handling unknown paths.
Concepts Covered
Basic Routing: Set up routes using <Route> and <Switch> (or <Routes> in newer versions).
Nested Routing: Add routes inside components for deeper navigation.
Route Parameters: Capture dynamic values from the URL and pass them as props.
Programmatic Navigation: Use useHistory or useNavigate to navigate programmatically.
Protected Routes: Implement simple authentication to protect certain routes.
Example Code
Here's a simple example of setting up routes in React:


Learnings
How to install and use react-router-dom.
How to manage state with URL parameters.
How to redirect or navigate programmatically.
How to handle routes that do not exist in the app.
Resources
React Router Documentation
React Documentation
Happy coding! 🎉
