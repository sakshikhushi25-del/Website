
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    login(email);
    navigate("/profile");
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h1 className="login-title">Welcome Back 👋</h1>

        <p className="login-subtitle">
          Login to continue shopping
        </p>

        <label className="login-label" htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="login-input"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          required
        />

        <label className="login-label" htmlFor="password">
          Password
        </label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="login-input"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError("");
          }}
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-footer">
          New to ShopEasy?{" "}
          <Link to="/product">Explore products</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;