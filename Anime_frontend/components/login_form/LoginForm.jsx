import React from 'react';
import { useLoginMutation } from '../../api';

function LoginForm() {  
  // const [login] = useLoginMutation();
 return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="username" className="control-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
