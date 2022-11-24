import React from "react";
import FormSettings from "../FormSettings/FormSettings";
import ImageMenu from "../ImageMenu/ImageMenu";
import "./UserSettings.scss";

function UserSettings() {
  return (
    <div className="PrimaryContainer">
      <div className="menu">
        <h3 className="title">User Settings</h3>
        <ImageMenu urlImage="https://cdn2.iconfinder.com/data/icons/miscellaneous-set-3/512/ICON101-512.png" />
      </div>
      <div className="optionsSettings">
        <FormSettings />
      </div>
    </div>
  );
}

export default UserSettings;
