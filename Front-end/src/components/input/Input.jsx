import React from "react";
import "./Input.scss";

function Input(props) {
  return (
    <div className="input-wrapper">
      <label>{props.name}</label>
      <input
        className="input-form"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.name}
      />
    </div>
  );
}

export default Input;
