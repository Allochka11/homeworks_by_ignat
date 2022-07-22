import React from 'react';
import classes from  './Message.module.css';

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt={'avatar'}/>
            <div className={classes.dialog}>
                <div className={classes.title}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
