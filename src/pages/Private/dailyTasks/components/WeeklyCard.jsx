import React from 'react'
import "./weeklyCard.css"
import CircularProgressBar from './CircularProgressBar'
import { TiTick } from 'react-icons/ti'
const WeeklyCard = () => {
    return (
        <div className='weeklyCard'>

            <div className="weeklyCardleft">
                <h1> משימות שבועיות</h1>
                <CircularProgressBar percentage={5} color={"#2BBF80"} />
            </div>
            <div className="weeklyCardright">
                <div className="weeklyCardrightinfo1">
                    <div>
                        <h1>1</h1>
                        <p>בוצע</p>
                    </div>
                    <div>
                        <h1>1</h1>
                        <p>לא בוצע</p>
                    </div>
                </div>
                <div className="weeklyCardrightinfo2">
                    <p><TiTick />בצעו 3 פעמים את המשימות היומיות.</p>

                </div>
            </div>

        </div>
    )
}

export default WeeklyCard