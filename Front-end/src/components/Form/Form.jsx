import React from 'react'
import Input from '../input/Input'
import './Form.scss'

function Form(props) {
  
  return (
    <form className='mainForm'>
      <Input type="text" name="First name *"></Input>
      <Input type="text" name="Last name *"></Input>
      <Input type="text" name="Username *"></Input>
      <Input type="password" name="Password *"></Input>
      <Input type="password" name="Confirm Password *"></Input>
      <input className='submitBtn' type="submit" value="Sign up"/>
    </form>
  )
}

export default Form