import React from 'react'
import "./chatPage.css"
import { BsSearch } from 'react-icons/bs';
import Conversation from './Conversation';
import ConversationList from './ConversationList';

const ChatPage = () => {
    return (
        <div className='chatPage'>
            <h1>הצ'אטים שלי</h1>
            <div className="chatPage-search">
                <input type="text" placeholder='מוזמנים לחפש את השיחה כאן'/>
                <BsSearch />
            </div>
            <div className="chatSection">
                <Conversation />
                <ConversationList />
            </div>
        </div>
    )
}

export default ChatPage