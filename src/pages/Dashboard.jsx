import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await api.get("/auth/me");
      setUser(response.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const token = localStorage.getItem("access_token");
  console.log("Token inside Dashboard:", token);

  if (token) {
    fetchUser();
  }
}, []);


  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard (Protected)</h2>

      {user && (
        <div>
          <p>Email: {user.email}</p>
        </div>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;