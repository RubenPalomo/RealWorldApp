import React from "react";
import "./Popup.scss";
export const Popup = ({ title, text, closePopup }) => {
  title = title.toString().toUpperCase();

  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="textDiv">
          <h1>{title}</h1>
          <hr />
          <h3 className="description">{text}</h3>
        </div>

        <div className="buttonDiv">
          <button className="closeBtn" onClick={closePopup}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};
