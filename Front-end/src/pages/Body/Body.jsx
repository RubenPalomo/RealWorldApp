import React from "react";
import "./Body.scss";
import { Routes, Route } from "react-router-dom";
import UserSettings from "../../components/UserSettings/UserSettings";

function Body() {
  return (
    <div className="MainContainerBody">
      <Routes>
        <Route path="*" element={<UserSettings />} exact></Route>
        <Route path="/user/settings" element={<UserSettings />} exact></Route>
      </Routes>
    </div>
  );
}

export default Body;
