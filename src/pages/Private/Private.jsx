import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import PrivateMenu from './components/PrivateMenu'
import MyAds from './components/MyAds'
import "./private.css"
import SavedAds from './components/SavedAds';
import OrderMangement from './components/OrderMangement';
import Analysis from './components/Analysis';
import UpdateProfile from './components/UpdateProfile'
import OrderDetails from './components/OrderDetails';
import DailyTask from './dailyTasks/DailyTask';
const Private = () => {
    return (
        <div className='private'>
            <div className="private-header">

            </div>
            <div className="private-main">

                <div className="privateContent">
                    <Routes>
                        <Route exact path='/myAds' element={< MyAds />}></Route>
                        <Route exact path='/' element={< MyAds />}></Route>
                        <Route exact path='/savedAds' element={< SavedAds />}></Route>
                        <Route exact path='/orderMangement/*' element={< OrderMangement />}></Route>
                        <Route exact path='/analysis' element={< Analysis />}></Route>
                        <Route exact path='/updateProfile' element={<UpdateProfile />}></Route>
                        <Route exact path='/orderDetails' element={<OrderDetails />}></Route>
                        <Route exact path='/help' element={<Chat />}></Route>
                        <Route exact path='/dailyTask' element={<DailyTask />}></Route>
                    </Routes>
                </div>
                <PrivateMenu />
            </div>


        </div >
    )
}

export default Private