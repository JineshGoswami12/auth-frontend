import React, { useEffect, useState } from 'react';
// ✅ Fixed path: your folder is 'api' and file is 'axios.js'
import api from '../api/axios'; 

const Dashboard = () => {
  const [user, setUser] = useState(null);

  // ✅ Hooks MUST be inside the function body
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // You don't need headers here anymore! 
        // Your interceptor in axios.js handles it.
        const response = await api.get("/auth/me");
        setUser(response.data);
      } catch (error) {
        console.error("Dashboard Fetch Error:", error);
      }
    };
         
    fetchUser();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p><strong>Welcome:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.role_id}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;