# kays_react

## 📂 Folder Structure

This project follows a modular and scalable architecture:

```text
my-project/
├── node_modules/       # Project dependencies (automatically managed)
├── public/             # Static assets (favicons, logos, robots.txt)
├── src/                # Main source code
│   ├── assets/         # Global images, fonts, and shared CSS files
│   ├── components/     # Reusable UI components (Buttons, Inputs, Navbar)
│   ├── hooks/          # Custom hooks for reusable logic
│   ├── pages/          # View-level components (Routes and containers)
│   ├── services/       # API integration layer (Fetch/Axios calls)
│   ├── context/        # Global state management (React Context)
│   ├── utils/          # Helper functions (Date formatting, constants, etc.)
│   ├── App.jsx         # Root component and route definitions
│   └── main.jsx        # Application entry point
├── .gitignore          # Files and folders to be ignored by Git
├── index.html          # Main HTML entry point
├── package.json        # Project metadata and dependencies script
└── vite.config.js      # Vite configuration file
