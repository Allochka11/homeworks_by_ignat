import React from 'react';
import './Message.css';

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className="message">
            <img src={props.avatar} alt={'avatar'}/>
            <div className={'dialog'}>
                <div className={'title'}>{props.name}</div>
                <div className={'text'}>{props.message}</div>
                <div className={'time'}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
