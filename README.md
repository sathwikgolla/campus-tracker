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
