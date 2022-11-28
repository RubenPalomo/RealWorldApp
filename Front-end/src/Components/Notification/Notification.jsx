import React from 'react'
import { Link } from 'react-router-dom'
import './Notification.scss'
import unreadIcon from '../../assets/unread-icon.png'
import readIcon from '../../assets/read-icon.png'
import { useState } from 'react'

function Notification(props) {
    const [isRead, setisRead] = useState(true)
    function setRead(){
        setisRead(!isRead);
    }    
  return (

    <div className={isRead ? "notificationComponentMainDiv" : "notificationComponentMainDiv notRead"}>
        <div className='notificationComponentTextDiv'>Hi{props.text}</div>
        <div className='notificationComponentImageDiv'><img src={isRead ? unreadIcon : readIcon} onClick={setRead}></img></div>
    </div>
    
    
  )
}

export default Notification