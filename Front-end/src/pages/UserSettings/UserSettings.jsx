import React, { useState } from "react";
import FormSettings from "../../Components/FormSettings/FormSettings";
import ImageMenu from "../../Components/ImageMenu/ImageMenu";
import Switch from "react-switch";
import img from "../../assets/UserSettings.png";
import "./UserSettings.scss";

function UserSettings(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  props.functUseHeader(true);
  return (
    <div className="PrimaryContainer">
      <div className="menu">
        <div className="title">User Settings</div>
        <ImageMenu urlImage={img} />
      </div>
      <div className="optionsSettings">
        <Switch
          className="switchBtn"
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
          id="small-radius-switch"
        />
        <FormSettings editable={checked} />
      </div>
    </div>
  );
}

export default UserSettings;
