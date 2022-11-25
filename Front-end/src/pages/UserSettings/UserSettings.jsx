import React, { useState } from "react";
import FormSettings from "../../components/FormSettings/FormSettings";
import ImageMenu from "../../components/ImageMenu/ImageMenu";
import Switch from "react-switch";
import "./UserSettings.scss";

function UserSettings() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  return (
    <div className="PrimaryContainer">
      <div className="menu">
        <div className="title">User Settings</div>
        <ImageMenu urlImage="https://cdn2.iconfinder.com/data/icons/miscellaneous-set-3/512/ICON101-512.png" />
      </div>
      <div className="optionsSettings">
        <Switch
          checked={checked}
          onChange={handleChange}
          handleDiameter={28}
          offColor="#eff9ff"
          onColor="#0099ff"
          offHandleColor="#eff9ff"
          onHandleColor="#0099ff"
          height={40}
          width={100}
          borderRadius={6}
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "white",
              }}
            >
              Edit
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "black",
                paddingRight: 2,
              }}
            >
              View
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              <div>👁</div>
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "rgb(0, 153, 255)",
                fontSize: 18,
              }}
            >
              📝
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
        <FormSettings editable={checked} />
      </div>
    </div>
  );
}

export default UserSettings;
