import React from "react";
import { useRegisterMutation } from "../../api";

function RegistrationForm() {
  // const [register] = useRegisterMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await register(formData);
    const arrayOfTextFields = [
      "username",

      "password",

      "firstname",

      "lastname",

      "email",
    ];

    const initialFormState = arrayOfTextFields.reduce((acc, textField) => {
      acc[transformTextField(textField)] = "";

      return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="control-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
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
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
