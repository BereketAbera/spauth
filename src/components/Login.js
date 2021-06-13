import React from "react";
import CustomButton from "./CustomButton";
import InputField from "./InputField";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="ui middle aligned center aligned grid login">
      <div class="column">
        <h2 class="ui teal image header">
          <img src="logo192.png" class="image" alt="hey" />
          <div class="content">Log-in to your account</div>
        </h2>

        <form class="ui large form">
          <div class="ui stacked segment">
            <InputField />
            <InputField
              type="password"
              name="password"
              placeholderText="Password"
              iconName="lock"
            />
            <CustomButton />
          </div>

          <div class="ui error message"></div>
        </form>
        <div class="ui message">
          New to us? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
