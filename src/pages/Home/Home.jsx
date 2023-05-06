import React, { useEffect } from 'react'
import Apartments from './components/Apartments'
import BlogCorner from './components/BlogCorner'
import Categories from './components/Categories.jsx'
import Header from './components/Header'
import LookingFor from './components/LookingFor.jsx'
import SecondHand from './components/SecondHand.jsx'
import Footer from "../../components/Footer"
import "./home.css"
const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Categories />
            <LookingFor />
            <Apartments />
            <SecondHand />
            <BlogCorner />
        </div>
    )
}

export default Home