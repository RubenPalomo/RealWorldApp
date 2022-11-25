import React, { useState } from "react";
import "./Header.css";
import logo from "./../../assets/logo.PNG";
import alertIcon from "./../../assets/alert.png";
import BurgerMenuItems from "./components/BurgerMenu/BurgerMenuItems";

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
          <span className="line line2"></span>
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
          <span className="buttons">
            <button className="newButton">$ NEW</button>
            <button className="alertButton">
              <img width="30vw" src={alertIcon} />
            </button>
          </span>
        </div>
        <BurgerMenuItems />
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
