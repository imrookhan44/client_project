import React from 'react'
import "./message.css"
const Message = (props) => {
    return (
        <div className={`${props.class} message`}>
            {
                props.message
            }
        </div>
    )
}

export default Message