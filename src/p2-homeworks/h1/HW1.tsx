import React from 'react'
import Message from "./Message";
import s from './HW1.module.css';

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData:messageDataType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg', // I want to keep img local...
    name: 'Toki',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Blanditiis maxime molestias nam necessitatibus porro' +
        ' repudiandae ut voluptatem!',
    time: '9:45'
}

function HW1() {
    return (
        <div className={s.hw1_container}>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

        </div>
    )
}

export default HW1
