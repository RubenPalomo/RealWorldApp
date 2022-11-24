import React from "react";
import "./ImageMenu.scss";

function ImageMenu(props) {
  return <img className="ImageMenu" src={props.urlImage} alt="ImageMenu" />;
}
export default ImageMenu;
