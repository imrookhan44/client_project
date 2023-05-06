import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./orderMangementOptions.css"
const OrderMangementOptions = () => {
    const [selected1, setSelected1] = useState(1);
    function changeSelected1(param) {
        setSelected1(param);
    }
    return (
        <div className='orderMangementOptions'>
            <ul>
                <Link to="/private/orderMangement/active"><li className={(selected1 == 1) ? "selected" : null} onClick={() => { changeSelected1(1) }}> פעיל </li></Link>
                <Link to="/private/orderMangement/sent"><li className={(selected1 == 2) ? "selected" : null} onClick={() => { changeSelected1(2) }}>  נשלח </li></Link>
                <Link to="/private/orderMangement/completed"><li className={(selected1 == 3) ? "selected" : null} onClick={() => { changeSelected1(3) }}>  הושלם </li></Link>
                <Link to="/private/orderMangement/everything"><li className={(selected1 == 4) ? "selected" : null} onClick={() => { changeSelected1(4) }}>  הכל </li></Link>
            </ul>

        </div>
    )
}

export default OrderMangementOptions