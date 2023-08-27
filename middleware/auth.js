// middleware/auth.js
export default function ({ store, redirect }) {
  const authToken = localStorage.getItem('authToken'); // Get token from localStorage

  if (!authToken) {
    // Redirect to login page or another route
    return redirect('/login');
  }
}