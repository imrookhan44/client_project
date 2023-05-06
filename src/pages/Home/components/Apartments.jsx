import React from 'react'
import "./apartments.css"
import building from "../../../images/building.png"
const Apartments = () => {
    return (
        <div className='apartments'>
            <img src={building} alt="" />
            <div className="apartments-content">
                <h1>כל הדירות רק אצלנו</h1>
                <div className="apartments-btn">
                    <button className='rentColor'>להשכרה</button>
                    <button className='sellColor'>למכירה</button>
                </div>
            </div>
        </div>
    )
}

export default Apartments