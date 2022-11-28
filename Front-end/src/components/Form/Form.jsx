import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import "./Form.scss";

function Form(props) {
  const [passwordMatch, setPasswordMatch] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(event) {
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const userName = event.target[2].value;
    const password = event.target[3].value;
    const confirmPassword = event.target[4].value;
    if (password !== confirmPassword) {
      setPasswordMatch(true);
    } else {
      alert("Make code to send form to Database");
      navigate("/home", { replace: true });
    }
    event.preventDefault();
  }
  return (
    <form
      className="mainForm"
      action="/home"
      onSubmit={handleSubmit}
      onChange={() => setPasswordMatch(false)}
    >
      <Input type="text" name="First name *"></Input>
      <Input type="text" name="Last name *"></Input>
      <Input type="text" name="Username *"></Input>
      <Input type="password" name="Password *"></Input>
      <Input type="password" name="Confirm Password *"></Input>
      <div>
        <label className="passwordLabel" hidden={!passwordMatch}>
          The passwords don't match
        </label>
      </div>

      <input className="submitBtn" type="submit" value="Sign up" />
    </form>
  );
}

export default Form;
