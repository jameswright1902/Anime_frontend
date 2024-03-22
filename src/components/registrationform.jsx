import { useState } from "react";
import axios from "axios";


function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://anime-demo.onrender.com/register", {
        username,
        email,
        password,
      });
      // Check if registration is successful (assuming status code 201 for success)
      if (response.status === 201) {
        // Registration successful, redirect to login page
        window.location.href = "/login";
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      // If there's an error from the server response, display the error message
      setError("Registration failed. Please try again.");
    }
  };
  
  return (
    <div className="container mt-200">
      {/* <div className="row justify-content-center"> */}
        <div className="col-md-200">
          <form className="form-horizontal" onSubmit={handleRegistration}>
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
              <label htmlFor="email" className="control-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              Register
            </button>
          </form>
          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
      {/* </div> */}
    </div>
  );
}
export default RegistrationForm;