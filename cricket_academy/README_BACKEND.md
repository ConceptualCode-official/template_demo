# Backend Setup Guide (PHP + MySQL)

This project includes a complete PHP backend structure in the `backend/` folder.

## 1. Database Setup
1. Open your MySQL Admin (e.g., phpMyAdmin).
2. Create a new database named `elite_cricket_db`.
3. Import the file `backend/database/schema.sql`.

## 2. PHP Configuration
1. Open `backend/config/db.php`.
2. Update the `$username` and `$password` if your database credentials differ from the default (root/empty).

## 3. Deployment
1. Move the contents of the `backend/` folder to your web server's public directory (e.g., `htdocs` in XAMPP or `public_html` on a live server).
2. Ensure the URL matches. The frontend expects the API at `/api/`.
   - **Local Development**: You might need to configure a proxy in `vite.config.ts` if running PHP on port 80 and Vite on 5173.
   - **Production**: Build the React app (`yarn build`) and place the `dist` files in the same folder as the `api` folder.

## 4. How it works
The frontend `src/services/api.ts` tries to fetch from these PHP files. If the PHP server is not running (like in this WebContainer environment), it automatically falls back to the Mock Data so the app remains functional for demo purposes.
