import React, { useState } from "react";
import "./Header.css";
import logo from "./../../assets/logo.PNG";
import alertIcon from "./../../assets/alert.png";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

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
              backgroundColor: isActive ? "black" : "white",
            }}
          ></span>
          <span className="line line2"></span>
          <span
            className="line line3"
            style={{
              backgroundColor: isActive ? "black" : "white",
            }}
          ></span>
        </div>
        <div className="noMenuItems">
          <img className="icon" src={logo} />
          <h2 className="mainTitle">Real World App</h2>
          <button className="newButton">$ NEW</button>
          <button>
            <img className="alertButton" src={alertIcon} />
          </button>
        </div>
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
      </div>
    </div>
    // <div className="header">
    //     <MenuButton />
    //     <img className="logo" src={logo}></img>
    //     <h2 className="mainTitle">Real World App</h2>
    //     <button className="newButton">$ NEW</button>
    //     <button className="alertButton">
    //         <img className="buttonIcon" src={alertIcon} />
    //     </button>
    // </div>
  );
}

export default Header;
