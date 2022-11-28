import React, { useState } from "react";
import "./Body.scss";
import { Routes, Route } from "react-router-dom";
import UserSettings from "../../pages/UserSettings/UserSettings";
import Signup from "../../pages/Signup/Signup";
import Home from "../../pages/Home/Home";
import Notifications from "../../pages/Notifications/Notifications";

function Body(props) {
  return (
    <div className="MainContainerBody">
      <Routes>
        <Route
          path=""
          element={<Signup functUseHeader={props.functUseHeader} />}
          exact
        ></Route>
        <Route
          path="*"
          element={<Signup functUseHeader={props.functUseHeader} />}
          exact
        ></Route>
        <Route
          path="/notifications"
          element={<Notifications functUseHeader={props.functUseHeader} />}
          exact
        ></Route>
        <Route
          path="/transaction"
          element={<Signup functUseHeader={props.functUseHeader} />}
          exact
        ></Route>
        <Route
          path="/home"
          element={<Home functUseHeader={props.functUseHeader} />}
          exact
        ></Route>
        <Route
          path="/user"
          element={<UserSettings functUseHeader={props.functUseHeader} />}
          exact
        ></Route>
      </Routes>
    </div>
  );
}

export default Body;
