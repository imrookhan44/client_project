import React from 'react'
import "./secondHand.css"
import data from "./secondhand.json"
const SecondHand = () => {
    return (
        <div className='secondhand'>
            <h1>כל מוצרי יד השנייה רק אצלנו</h1>
            <div className="secondhand-div">

                {data.map((items, idx) =>
                    <div className="secondhand-card">
                        <img src={require(`../../../images/${items.img}`)} alt="" />
                        <p>{items.category}</p>
                    </div>
                )}



            </div>
        </div>
    )
}

export default SecondHand