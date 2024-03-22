import { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulate login logic here
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
  
      if (response.status === 200) { // Assuming status 200 indicates successful login
        // Redirect to top anime page after successful login
        window.location.href = "/";
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="form-horizontal" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" className="control-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;