import React from "react";
import LoginForm from "../components/login_form/LoginForm";
import RegistrationForm from "../components/register_form/RegisterForm";
import Anime from "../components/Anime";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Anime</h1>
      <p>This is the home page of my anime website.</p>
      {/* Add more content or components as needed */}
      {/* <LoginForm />
      <RegistrationForm /> */}
      <Anime />
    </div>
  );
};

export default Home;
