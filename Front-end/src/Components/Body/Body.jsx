import React from "react";
import "./Body.scss";
import { Routes, Route } from "react-router-dom";
import UserSettings from "../../pages/UserSettings/UserSettings";
import Signup from "../../pages/Signup/Signup";
import Home from "../../Home/Home";
import Notifications from "../../pages/Notifications/Notifications";

function Body() {
  return (
    <div className="MainContainerBody">
      <Routes>
        <Route path="" element={<Signup />} exact></Route>
        <Route path="*" element={<Signup />} exact></Route>
        <Route path="/home" element={<Home />} exact></Route>
        <Route path="/user" element={<UserSettings />} exact></Route>
        <Route path="/notifications" element={<Notifications />} exact></Route>
      </Routes>
    </div>
  );
}

export default Body;
