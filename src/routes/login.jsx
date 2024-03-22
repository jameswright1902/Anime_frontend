// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import LoginForm from "../components/loginform";

// function LoginRoute() {
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <Link to="/login" className="btn btn-primary">
//             Go to Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginRoute;

import { BrowserRouter as Link } from "react-router-dom";
import LoginForm from "../components/loginform";

function LoginRoute() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Link to="/login" className="btn btn-primary">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginRoute;
