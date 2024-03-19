// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // used aaron code from auth slice file to see if these mutations would work https://github.com/akatz6/react_frontend/blob/main/src/components/Auth/AuthSlice.js
// import { useRegisterMutation } from "../slice/AuthSlice";
// import { PropTypes } from "prop-types";

// export default function RegistrationForm({ state }) {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   // const [login] = useLoginMutation();
//   const [register] = useRegisterMutation();

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       let success = false;
//       if (state === "register") {
//         success = await register(form).unwrap();
//       }

//       if (success) {
//         navigate("/login");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateForm = (e) => {
//     setForm((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={submit} className="form-horizontal">
//             <div className="form-group">
//               <label htmlFor="username" className="control-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 placeholder="Enter username"
//                 name="username"
//                 autoComplete="on"
//                 onChange={updateForm}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email" className="control-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter email"
//                 name="email"
//                 autoComplete="on"
//                 onChange={updateForm}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password" className="control-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Enter password"
//                 name="password"
//                 onChange={updateForm}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               {state}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Define prop types for the component
// RegistrationForm.propTypes = {
//   state: PropTypes.string.isRequired, // Define prop-type for 'state'
// };
