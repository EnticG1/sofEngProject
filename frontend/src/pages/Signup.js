import {useState} from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
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

      <button>Sign Up</button>
      <h3>Already have an account? <strong><Link to="/login">Login</Link></strong></h3>
    </form>
  )
}

export default Signup