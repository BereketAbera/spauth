import React from "react";

const InputField = (props) => {
  return (
    <div class="field">
      <div class="ui left icon input">
        <i class={`${props.iconName} icon`}></i>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholderText}
          data-temp-mail-org="0"
        />
      </div>
    </div>
  );
};
InputField.defaultProps = {
  type: "text",
  iconName: "envelope",
  name: "email",
  placeholderText: "E-mail address",
};

export default InputField;
