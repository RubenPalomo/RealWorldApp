import React from 'react'
import './Input.scss'

function Input(props) {
  return (
    <div class="input-wrapper">
    <label>{props.name}</label>
    <input class="input-form" type={props.type} name={props.name} value={props.value} placeholder={props.placeholder}/>
</div>
  )
}

export default Input