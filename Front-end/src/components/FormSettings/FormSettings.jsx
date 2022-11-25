import React from "react";
import "./FormSettings.scss";
import OptionSetting from "../OptionSetting/OptionSetting";
import SubmitSetting from "../SubmitSetting/SubmitSetting";

function FormSettings(props) {
  return (
    <form className="formSettings" action="urlToSaveSettings">
      <OptionSetting type="text" name="First name *" value="Edgar" />
      <OptionSetting type="text" name="Last name *" value="Johns" />
      <OptionSetting type="text" name="Email *" value="Norene39@yahoo.com" />
      <OptionSetting type="text" name="Phone *" value="625-316-9882" />
      <SubmitSetting />
    </form>
  );
}

export default FormSettings;
