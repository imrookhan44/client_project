import React from 'react'
import { Link } from 'react-router-dom';
import "./orderBar.css"
const OrderBar = () => {
    return (
        <tr className="item-row">
            <Link to={`/private/orderDetails`}><td> <img className='item-image1' src={require(`../../../images/leftArrow.png`)} alt="" /> ₪300</td>  </Link>
            <td><button class="active">פעיל</button></td>
            <td>19 באוק’ ,23</td>
            <td>19 באוק’ ,23</td>
            <td> <img className='item-image' src={require(`../../../images/businessCategory1.png`)} alt="" /> כלב מוזר עם פרוור עונה </td>
        </tr>
    )
}

export default OrderBar