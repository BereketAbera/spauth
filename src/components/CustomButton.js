import React from "react";

const CustomButton = (props) => {
  return <div class="ui fluid large teal submit button">{props.text}</div>;
};

CustomButton.defaultProps = {
  text: "Login",
};

export default CustomButton;
