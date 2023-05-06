import React from 'react'
import "./dailyCard.css"
import CircularProgressBar from './CircularProgressBar'
import { TiTick } from 'react-icons/ti'
const DailyCard = () => {
    return (
        <div className='dailyCard'>

            <div className="dailyCardleft">
                <h1>משימות יומיות</h1>
                <CircularProgressBar percentage={65} color={"#5E63E4"} />
            </div>
            <div className="dailyCardright">
                <div className="dailyCardrightinfo1">
                    <div>
                        <h1>3</h1>
                        <p>בוצע</p>
                    </div>
                    <div>
                        <h1>8</h1>
                        <p>לא בוצע</p>
                    </div>
                </div>
                <div className="dailyCardrightinfo2">
                    <p><TiTick />הישארו מחוברים לאתר כ-  5 דקות רצופות.</p>
                    <p><TiTick />הקפצו את מודעתכם.</p>
                    <p><TiTick />התחבר לאתר לפחות פעם אחת ביום.</p>
                </div>
            </div>

        </div>
    )
}

export default DailyCard