import React from 'react'
import s from './Message.module.css'
import {messageDataType} from "./HW1";
import avatar from './additional/avatar.jpg';

function Message(props: messageDataType) {
    return (
       <div className={s.message}>
           <div className={s.ava_container}>
               <img className={s.ava_image} src={avatar} alt="avatar"/>
           </div>
           <div className={s.message_container}>
               <div className={s.message_name}>{props.name}</div>
               <div className={s.message_body}>{props.message}</div>
               <div className={s.message_time}>{props.time}</div>
           </div>
       </div>
    )
}

export default Message
