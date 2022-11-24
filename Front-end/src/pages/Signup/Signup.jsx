import React from 'react'
import './Signup.scss'
import Form from '../../components/Form/Form'
import img from '../../img/rwa.png'

function Signup() {
  return (
    <div className='mainDiv'>
        <div className='secondDiv'>
            <img src={img} width="180px"></img>
            <h1>Sign up</h1>
            <Form/>
        </div>
    </div>
  )
}

export default Signup