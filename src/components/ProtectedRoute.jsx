import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  // ✅ Change 'user' to 'token' to match  AuthProvider
  const { token } = useContext(AuthContext);

  // If there is no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />; 
  }

  // If token exists, show the protected content (Dashboard)
  return children;
}

export default ProtectedRoute;