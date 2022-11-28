import React from "react";
import "./Signup.scss";
import Form from "../../Components/Form/Form";
import img from "./../../assets/rwa.png";

function Signup() {
  return (
    <div className="mainDiv">
      <div className="secondDiv">
        <img src={img} width="180px" alt="logo"></img>
        <h1>Sign up</h1>
        <Form />
      </div>
    </div>
  );
}

export default Signup;
