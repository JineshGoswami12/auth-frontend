import { useState, useContext , useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      formData.append("username", email);
      formData.append("password", password);

      const response = await api.post("/auth/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const { access_token, refresh_token } = response.data;

      login(access_token);
      localStorage.setItem("refresh_token", refresh_token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
      alert("Login failed");
    }
  };

 return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        <p>
  Don’t have an account?{" "}
  <span onClick={() => navigate("/register")} style={{ color: "blue", cursor: "pointer" }}>
    Register
  </span>
</p>

<p>
  <span onClick={() => navigate("/forgot-password")} style={{ color: "blue", cursor: "pointer" }}>
    Forgot Password?
  </span>
</p>
      </form>
    </div>
  );
}

export default Login;