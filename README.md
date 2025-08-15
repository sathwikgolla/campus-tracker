<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# CampusTrack: Faculty Locator using Smart Timetable

**CampusTrack** is a web application designed to help students quickly find the real-time availability of their professors. The platform allows students to check if a professor is in the cabin, in class, or available for a meeting. Faculty can update their status and manage meeting requests, while admins can manage users and view statistics.

---

## Features

### Student
- Login and register with college credentials.
- Search for professors by name or department.
- View real-time status of professors with color-coded badges.
- Request meetings with available professors.
- Role-specific dashboard and navigation.

### Faculty
- Login and register.
- Update current status (In Cabin, In Class, On Leave, Available to Meet).
- View and manage upcoming meeting requests.
- Set available hours for student meetings.

### Admin
- Login and register.
- Manage student and faculty users.
- View statistics like active users and most requested faculty.
- Access reports and system settings.

---

## Tech Stack

### Frontend
- **React.js** with functional components and hooks
- **HTML, CSS, JavaScript** (responsive and professional design)
- Role-based navigation and dashboards
- Fully responsive and mobile-friendly
- Smooth hover animations and UI interactions

### Backend
- **Node.js** with **Express.js**
- **PostgreSQL** database for storing user info, faculty status, and timetable
- **JWT Authentication** for secure login and role-based access
- REST API endpoints for student, faculty, and admin actions
- Handles meeting requests and real-time status updates

---

## Project Structure
campustracker/
├─ frontend/
│ ├─ src/
│ │ ├─ components/ # Reusable components (Navbar, Modals, StatusBadge)
│ │ ├─ pages/ # Login, Register, Dashboard pages
│ │ ├─ styles/ # CSS files
│ │ └─ App.js
├─ backend/
│ ├─ controllers/ # API logic
│ ├─ routes/ # Express routes
│ ├─ models/ # Database models
│ ├─ middleware/ # JWT auth and role checks
│ └─ server.js
├─ package.json
└─ README.md


---

## Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm start


cd backend
npm install
node server.js

Open your browser at http://localhost:3000.
>>>>>>> 05a6cd7bd17ade082690fa98a3b643a5d32310b6
