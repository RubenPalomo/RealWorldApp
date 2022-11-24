import React from "react";
import "./FormSettings.scss";
import OptionSetting from "../OptionSetting/OptionSetting";
import SubmitSetting from "../SubmitSetting/SubmitSetting";

function FormSettings(props) {
  return (
    <form className="formSettings" action="urlToSaveSettings">
      <OptionSetting value="Edgar" />
      <OptionSetting value="Johns" />
      <OptionSetting value="Norene39@yahoo.com" />
      <OptionSetting value="625-316-9882" />
      <SubmitSetting />
    </form>
  );
}

export default FormSettings;
