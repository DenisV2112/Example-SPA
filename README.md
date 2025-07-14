# Notes Management SPA

This is a Single Page Application (SPA) built with vanilla JavaScript, HTML, and CSS. It simulates a simple notes management system with support for user and admin roles. The application allows users to register, log in, and perform full CRUD (Create, Read, Update, Delete) operations on notes. Admins have access to a dedicated admin panel to view all registered users.

---

## Features

- SPA navigation using JavaScript (without full page reloads)
- User registration and login functionality
- Admin and user role separation
- Secure route protection using `sessionStorage`
- Full CRUD operations for notes (Create, Read, Update, Delete)
- Admin-only panel for listing all users
- Responsive and clean UI with custom CSS
- JSON Server used as a fake backend

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- JSON Server (for mock backend)

---

## Folder Structure

```
/project-root
│
├── index.html
├── css/
│   └── style.css
├── components/
│   ├── router.js
│   ├── nav.js
│   ├── login.js
│   ├── register.js
│   ├── registerAdmin.js
│   ├── userPanel.js
│   ├── notesCrud.js
│   └── adminPanel.js
└── data/
    └── db.json
```

---

## Getting Started

### Prerequisites

- Node.js installed (recommended version >= 14)
- A code editor like VS Code
- A local web server (e.g. Live Server extension for VS Code)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/spa-notes-app.git
cd spa-notes-app
```

2. **Install JSON Server globally**

```bash
npm install -g json-server
```

---

## Running the Application

### Step 1: Start JSON Server

If your `db.json` file is in the `/data` folder:

```bash
json-server --watch data/db.json --port 3000
```

> This will start the fake backend at:  
> `http://localhost:3000/users`  
> `http://localhost:3000/notes`

### Step 2: Launch the Frontend

You can use any local server to host the `index.html`. If you're using the **Live Server** extension in VS Code:

- Right-click on `index.html` and select **"Open with Live Server"**.

Or use `npx serve`:

```bash
npx serve .
```

> Make sure to run it from the root directory where `index.html` is located.

---

## Usage

### 1. User Registration and Login

- Navigate to `/register` to create a user account.
- Navigate to `/login` to log in.
- After logging in, users are redirected to their notes dashboard.

### 2. Admin Registration

- Navigate to `/registerAdmin` to register a new admin.
- Admins can log in and access the `/admin` panel.

### 3. Notes Management (User Role)

- Users can:
  - Create a new note
  - View their own notes
  - Edit existing notes
  - Delete notes

### 4. Admin Panel

- Admins can:
  - View a list of all registered users
  - Access admin-specific routes (protected)

---

## API Endpoints (via JSON Server)

- `GET /users` — Get all users
- `POST /users` — Register new user/admin
- `GET /users?email=...&password=...` — Login validation
- `GET /notes?owner=...` — Fetch notes by owner
- `POST /notes` — Create a new note
- `PUT /notes/:id` — Update a note
- `DELETE /notes/:id` — Delete a note

---

## Security Consideration

This project is for **educational purposes only**. It uses a fake backend (`JSON Server`) and stores sensitive data (like passwords) in plain text. For a production-ready system, implement:

- Password hashing
- Token-based authentication (e.g., JWT)
- Backend framework with user authentication
- HTTPS and proper CORS setup

---

## License

This project is open-source and available under the MIT License.
