import React, { useState } from "react";
import "./Body.scss";
import { Routes, Route } from "react-router-dom";
import UserSettings from "../../pages/UserSettings/UserSettings";
import Signup from "../../pages/Signup/Signup";
import Home from "../../Home/Home";
import { Popup } from "../Popup/Popup";

function Body() {
  const [open, setOpen] = useState(false);
  const title = "Importante";
  const text = "Pascu la chupa";

  return (
    <div>
      <div>
        <button onClick={() => setOpen(true)}> Pruebita</button>
        {open ? (
          <Popup title={title} text={text} closePopup={() => setOpen(false)} />
        ) : null}
      </div>
      <div className="MainContainerBody">
        <Routes>
          <Route path="" element={<Signup />} exact></Route>
          <Route path="*" element={<Signup />} exact></Route>
          <Route path="/home" element={<Home />} exact></Route>
          <Route path="/user" element={<UserSettings />} exact></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Body;
