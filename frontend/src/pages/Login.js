import {useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email:</label>
      <input 
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Login</button>
    <h3>Don't have account? <strong><Link to="/signup">Register</Link></strong></h3> 
    </form>
  )
}

export default Login