import {useState} from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await signup(email, password)
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="float">
        <h1>Sign Up</h1>
      </div>
      <label>Email:</label>
      <input 
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {error && <div className="error">{error}</div>}
      <button disabled={isLoading}>Sign Up</button>
      <h3>Already have an account? <strong><Link to="/login">Login</Link></strong></h3>
    </form>
  )
}

export default Signup