import React from "react";
import "./OptionSetting.scss";

function OptionSetting(props) {
  return (
    <div className="optionSetting-wrapper">
      <label>{props.name}</label>
      <input
        className="optionSetting-form"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.name}
      />
    </div>
  );
}

export default OptionSetting;
