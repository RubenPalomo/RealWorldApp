import React, { useState } from "react";
import "./BurgerMenuItems.scss";
import menuLogo from "./../../../../assets/menu.png";

function BurgerMenuItems() {
  return (
    <div className="menu-items">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">My Account</a>
      </li>
      <li>
        <a href="#">Bank Accounts</a>
      </li>
      <li>
        <a href="#">Notifications</a>
      </li>
      <li>
        <a href="#">Logout</a>
      </li>
    </div>
  );
}

export default BurgerMenuItems;
