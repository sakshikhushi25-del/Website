import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin(){
    login();
    navigate("/checkout");
  }
  return (
    <div className="login-container">
      <div className="login-card">
      <h1 className="login-title">Welcome Back 👋</h1>
      <p className="login-subtitle">Login to continue shopping</p>
      <input type="email" placeholder="Enter Email" className="login-input" />
      <input type="password" placeholder="Enter Password" className="login-input" />
      <button onClick={handleLogin} className="login-btn">Login</button>
      </div>
    </div>
  )
}
export default Login;