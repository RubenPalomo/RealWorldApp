import React, { useState } from "react";
import "./Header.scss";
import logo from "./../../assets/logo.PNG";
import alertIcon from "./../../assets/alert.png";
import BurgerMenuItems from "../BurgerMenu/BurgerMenuItems";
import { Link, Routes, Route } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="navbar">
      <div className="container nav-container">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id=""
          onClick={handleClick}
        />
        <div className="hamburger-lines">
          <span
            className="line line1"
            style={{
              backgroundColor: isActive ? "red" : "white",
            }}
          ></span>
          <span
            className="line line2"
            style={{
              backgroundColor: isActive ? "yellow" : "white",
            }}
          ></span>
          <span
            className="line line3"
            style={{
              backgroundColor: isActive ? "red" : "white",
            }}
          ></span>
        </div>
        <div className="noMenuItems">
          <span className="title">
            <img className="icon" src={logo} />
          </span>
          <span>
            <button className="newButton">$ NEW</button>
            <Link to="/notifications" className="alertButton">
              <img width="30vw" src={alertIcon} />
            </Link>
          </span>
        </div>
        <BurgerMenuItems />
      </div>
    </div>
  );
}

export default Header;
