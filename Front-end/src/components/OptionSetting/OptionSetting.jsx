import React from "react";
import "./OptionSetting.scss";

function OptionSetting(props) {
  if (props.editable) {
    return (
      <div className="optionSetting-wrapper">
        <label>{props.name}</label>
        <input
          className="optionSetting-form"
          type={props.type}
          name={props.name}
          placeholder={props.name}
        />
      </div>
    );
  } else {
    return (
      <div className="optionSetting-wrapper">
        <label>{props.name}</label>
        <input
          className="optionSetting-form"
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.name}
          readOnly
        />
      </div>
    );
  }
}

export default OptionSetting;
