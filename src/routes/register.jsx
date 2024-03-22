// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import RegistrationForm from "../components/registrationform";

// function RegisterLink() {
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <Link to="/register" className="btn btn-primary">
//             Go to Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default RegisterLink;


import { BrowserRouter as Link } from "react-router-dom";
import RegistrationForm from "../components/registrationform";

function RegisterLink() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Link to="/register" className="btn btn-primary">
            Go to Register
          </Link>
        </div>
      </div>
    </div>
  );
}


export default RegisterLink;
