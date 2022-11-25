import React from "react";
import "./FormSettings.scss";
import OptionSetting from "../OptionSetting/OptionSetting";
import SubmitSetting from "../SubmitSetting/SubmitSetting";

function FormSettings(props) {
  return (
    <form className="formSettings" action="urlToSaveSettings">
      <OptionSetting
        type="text"
        name="First name *"
        value="Peter"
        editable={props.editable}
      />
      <OptionSetting
        type="text"
        name="Last name *"
        value="Johns"
        editable={props.editable}
      />
      <OptionSetting
        type="text"
        name="Email *"
        value="Norene39@yahoo.com"
        editable={props.editable}
      />
      <OptionSetting
        type="text"
        name="Phone *"
        value="625-316-9882"
        editable={props.editable}
      />
      <SubmitSetting editable={props.editable} />
    </form>
  );
}

export default FormSettings;
