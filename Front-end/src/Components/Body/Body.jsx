import React, { useState } from "react";
import "./Body.scss";
import { Routes, Route } from "react-router-dom";
import UserSettings from "../../pages/UserSettings/UserSettings";
import Signup from "../../pages/Signup/Signup";
import Home from "../../pages/Home/Home";
import Notifications from "../../pages/Notifications/Notifications";
import Transactions from "../../pages/Transactions/Transactions";

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
          path="/transactions"
          element={<Transactions functUseHeader={props.functUseHeader} />}
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
