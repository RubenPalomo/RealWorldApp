import React from "react";
import "./OptionSetting.scss";

function OptionSetting(props) {
  return <input className="optionSetting" type="input" value={props.value} />;
}

export default OptionSetting;
