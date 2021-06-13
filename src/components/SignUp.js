import React from "react";
import CustomButton from "./CustomButton";
import InputField from "./InputField";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="ui middle aligned center aligned grid login">
      <div class="column">
        <h2 class="ui teal image header">
          <img src="logo192.png" class="image" alt="hey" />
          <div class="content">Create a new Account</div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <InputField
              iconName="user"
              name="firstName"
              placeholderText="First Name"
            />
            <InputField
              iconName="user"
              name="lastName"
              placeholderText="Last Name"
            />
            <InputField />
            <InputField
              iconName="lock"
              name="password"
              type="password"
              placeholderText="Password"
            />
            <InputField
              iconName="lock"
              name="confirmPassword"
              type="password"
              placeholderText="Confirm Password"
            />
            <CustomButton text="Sign Up" />
          </div>
          <div class="ui message">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
