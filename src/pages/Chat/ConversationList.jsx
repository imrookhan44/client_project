import React from 'react'
import ConversationCard from './ConversationCard'
import "./conversationList.css"
const ConversationList = () => {
    return (
        <div className='conversationList'>
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
        </div>
    )
}

export default ConversationList