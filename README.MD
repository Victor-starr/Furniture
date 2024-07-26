
# Furniture Store Single Page Application (SPA)

## Overview

The Furniture Store is a Single Page Application (SPA) built with JavaScript, HTML, CSS, and several modern libraries. The application allows users to perform various actions including login, registration, managing furniture items (create, edit, delete), and viewing details of both their own and other users' furniture.

## Technologies Used

- **JavaScript**
- **HTML/CSS**
- **lit-html** for templating
- **page.js** for routing
- **mocha** and **chai** for testing
- **playwright** for browser automation

## Getting Started

Follow the steps below to set up and run the Furniture Store application:

### 1. Install Dependencies

Navigate to the `Furniture` directory where the client-side code is located.

```bash
cd Furniture
```

Install the required npm packages:

```bash
npm install lit-html page
```

If you want to run tests, also install the testing libraries:

```bash
npm install mocha chai
```

For browser automation testing with Playwright, install it with:

```bash
npm install --save-dev playwright-chromium
```

### 2. Start the Server

Navigate to the `server` directory where the server-side code is located.

```bash
cd server
```

Start the server using Node.js:

```bash
node server.js
```

The server will now be running, and you can interact with the application.

## Features

- **User Authentication**
  - Register a new account
  - Log in and log out

- **Furniture Management**
  - Create new furniture items
  - Edit existing furniture items
  - Delete furniture items
  - View details of your own and other users' furniture

## How to Use

1. **Register**: Create a new account to start using the application.
2. **Log In**: Access your account to manage furniture items.
3. **Dashboard**: Navigate to the dashboard to view an overview of your activities.
4. **My Furniture**: View, edit, and delete your own furniture items.
5. **Browse Furniture**: Explore furniture items created by other users.
6. **Details**: Inspect details of other users' furniture.

## Testing

If you have installed Mocha and Chai, you can run tests using the following command:

```bash
npx mocha
```

For Playwright browser automation, make sure to check the Playwright documentation for running end-to-end tests.

## Contact

For any questions or feedback, feel free to reach out to:

- **Victor Dimitrov**
  - **LinkedIn:** [victor-starr](https://linkedin.com/in/victor-starr)
  - **GitHub:** [victor-starr](https://github.com/victor-starr)

---

This documentation provides a clearer and more structured guide to setting up and using the Furniture Store SPA application.