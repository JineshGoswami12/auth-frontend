import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard (Protected)</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;