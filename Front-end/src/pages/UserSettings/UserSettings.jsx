import React from "react";
import FormSettings from "../../components/FormSettings/FormSettings";
import ImageMenu from "../../components/ImageMenu/ImageMenu";
import "./UserSettings.scss";

function UserSettings() {
  return (
    <div className="PrimaryContainer">
      <div className="menu">
        <div className="title">User Settings</div>
        <ImageMenu urlImage="https://cdn2.iconfinder.com/data/icons/miscellaneous-set-3/512/ICON101-512.png" />
      </div>
      <div className="optionsSettings">
        <FormSettings />
      </div>
    </div>
  );
}

export default UserSettings;
