import React from "react";
import "./SubmitSetting.scss";

function SubmitSetting(props) {
  return (
    <input
      className="submitSetting"
      type="submit"
      value="Save"
      hidden={!props.editable}
    />
  );
}

export default SubmitSetting;
