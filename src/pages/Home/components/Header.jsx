import React from 'react'
import "./header.css"
import headerimage from "../../../images/headerimage.png"
const Header = () => {
    return (
        <div className='header'>
            <div className="header-box1">
                <img src={headerimage} alt="headerimage" />
            </div>
            <div className="header-box2">
                <h2>אאוריקה</h2>
                <h1>מצאתי</h1>
                <p>מחפשים ומוצאים במהירות</p>
                <button>פרסם מודעה</button>
            </div>
        </div>
    )
}

export default Header