import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./privateMenu.css"
import { ReactComponent as PrivateNavbarIcon2 } from "../../../images/PrivateNavbarIcon2.svg";
import { ReactComponent as PrivateNavbarIcon3 } from "../../../images/PrivateNavbarIcon3.svg";
import { ReactComponent as PrivateNavbarIcon4 } from "../../../images/PrivateNavbarIcon4.svg";
import { ReactComponent as PrivateNavbarIcon5 } from "../../../images/PrivateNavbarIcon5.svg";
import { ReactComponent as PrivateNavbarIcon6 } from "../../../images/PrivateNavbarIcon6.svg";
import { ReactComponent as PrivateNavbarIcon7 } from "../../../images/PrivateNavbarIcon7.svg";
import { ReactComponent as PrivateNavbarIcon8 } from "../../../images/PrivateNavbarIcon8.svg";
import { ReactComponent as PrivateNavbarIcon10 } from "../../../images/PrivateNavbarIcon10.svg";


const PrivateMenu = () => {
    const [selected, setSelected] = useState(1);
    function changeSelected(param) {
        setSelected(param);
    }
    return (
        <div className='privateMenu'>
            <div className="privateMenu-logo">

            </div>
            <ul>                
                <Link to="/private/myAds"><li className={(selected == 1) ? "selected" : null} onClick={() => { changeSelected(1) }}>   מודעות שלי <span><PrivateNavbarIcon2 /></span></li></Link>
                <Link to="/private/savedAds"><li className={(selected == 2) ? "selected" : null} onClick={() => { changeSelected(2) }}>   מודעות שמורות <span><PrivateNavbarIcon10 /></span></li></Link>
                <Link to="/private/dailyTask"><li className={(selected == 3) ? "selected" : null} onClick={() => { changeSelected(3) }}>  משימות <span><PrivateNavbarIcon3 /></span></li></Link>
                <Link to="/private/orderMangement"><li className={(selected == 4) ? "selected" : null} onClick={() => { changeSelected(4) }}>  ניהול הזמנות <span><PrivateNavbarIcon4 /></span></li></Link>
                <Link to="/private/analysis"><li className={(selected == 5) ? "selected" : null} onClick={() => { changeSelected(5) }}>  ניתוח מתקדם <span><PrivateNavbarIcon5 /></span></li></Link>
                <Link to="/help"><li className={(selected == 6) ? "selected" : null} onClick={() => { changeSelected(6) }}>  מרכז עזרה <span><PrivateNavbarIcon6 /></span></li></Link>
                <hr />
                <Link to="/chat"><li className={(selected == 7) ? "selected" : null} onClick={() => { changeSelected(7) }}>   צ’אטים <span><PrivateNavbarIcon8 /></span></li></Link>
                <Link to="/private/updateProfile"><li className={(selected == 8) ? "selected" : null} onClick={() => { changeSelected(8) }}>   הגדרות <span>                    <PrivateNavbarIcon7 /></span></li></Link>
            </ul>
        </div>
    )
}

export default PrivateMenu