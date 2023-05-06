import React from 'react'
import "./orderMangement.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderMangementOptions from './OrderMangementOptions';
import Completed from './Completed';
import Everything from './Everything';
import Sent from './Sent';
import Active from './Active';
const OrderMangement = () => {
    return (
        <div className='orderMangement'>
            <h1>ניהול הזמנות</h1>
            <div className="orderMangement-div">
                <OrderMangementOptions />
                <Routes>
                    <Route exact path='/active' element={< Active />}></Route>
                    <Route exact path='/' element={< Active />}></Route>
                    <Route exact path='/sent' element={< Sent />}></Route>
                    <Route exact path='/everything' element={< Everything />}></Route>
                    <Route exact path='/completed' element={< Completed />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default OrderMangement