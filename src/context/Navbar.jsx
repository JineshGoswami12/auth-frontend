import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link , Navigate, useNavigate } from "react-router-dom";

function Navbar() {
    const {token , logout} = useContext(AuthContext);
     const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login"); 
    };

     return (
    <nav style={styles.nav}>
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        MyApp
      </h3>

      <div>
        {!token ? (
          <>
            <Link style={styles.link} to="/login">Login</Link>
            <Link style={styles.link} to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>
            <button style={styles.button} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    borderBottom: "1px solid #ccc",
  },
  link: {
    marginRight: "15px",
    textDecoration: "none",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;