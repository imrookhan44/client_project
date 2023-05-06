import React from 'react'
import "./conversationCard.css"
import { AiOutlineStar } from 'react-icons/ai';
const ConversationCard = () => {
    return (
        <div className='conversationCard'>
            <div className="conversationCard-profile">
                <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
            </div>
            <div className="conversationCard-details">
                <h3>עידן בן אליהו</h3>
                <p>היי אשמח לדעת הצעת מחיר</p>
            </div>
            <div className="conversationCard-star">
                <AiOutlineStar />
                <p> 12 דק</p>
            </div>
        </div>
    )
}

export default ConversationCard