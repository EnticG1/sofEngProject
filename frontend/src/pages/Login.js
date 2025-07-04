import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await login(email, password)
    if(!error){
      navigate('/')
    }
  };

  return(
    <div className="auth-wrapper">
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
        {error && <div className="error">{error}</div>}
        <button disabled= {isLoading}>Login</button>
      <h3>Don't have account? <strong><Link to="/signup">Register</Link></strong></h3> 
      </form>
    </div>
  )
}

export default Login