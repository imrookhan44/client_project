import React, { useState } from 'react'
import "./conversation.css"
import { MdSend } from 'react-icons/md';
import Message from './Message'

const Conversation = () => {
    const [message, setMessage] = useState([{
        "person": "sender",
        "message": "hi"
    }, {
        "person": "reciever",
        "message": "hey,how are you??"
    }]);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    const handleSend = () => {

        setMessage((prevMessages) => [
            ...prevMessages,
            {
                person: "reciever",
                message: inputValue
            }
        ]);
        setInputValue("");
    };
    return (
        <div className='conversation'>
            <div className="conversation-header">
                <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
                <h3>עידן בן אליהו</h3>
            </div>
            <div className="conversation-chats">
                {message.map((msg, index) => (
                    <Message
                        key={index}
                        class={msg.person}
                        message={msg.message}
                    />
                ))}
            </div>
            <div className="conversation-input">
                <input type="text" placeholder='היי מה שלומך היום?'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} />
                <MdSend onClick={handleSend} />
            </div>
        </div>
    )
}

export default Conversation