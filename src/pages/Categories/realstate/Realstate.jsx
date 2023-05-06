import React from 'react'
import "./realstate.css"
import BlogCorner from '../../Home/components/BlogCorner'
import Cards from '../components/Cards.jsx'
import RealstateAdvancedSearch from './RealstateAdvancedSearch'

const Realstate = () => {
    return (
        <div className="realstate">
            <img src={require(`../../../images/CarBanner.png`)} alt="" />
            <div className="realstate-categories">
                <div className="realstate-categories-wrapper">
                    <div className="realstate-category">
                        <img src={require(`../../../images/RealstateCategory3.png`)} alt="" />
                        <p>שותפים</p>
                    </div>
                </div>
                <div className="realstate-categories-wrapper">
                    <div className="realstate-category">
                        <img src={require(`../../../images/RealstateCategory1.png`)} alt="" />
                        <p>השכרה</p>
                    </div>
                </div>
                <div className="realstate-categories-wrapper">
                    <div className="realstate-category">
                        <img src={require(`../../../images/RealstateCategory2.png`)} alt="" />
                        <p>מכירה</p>
                    </div>
                </div>

            </div>
            <RealstateAdvancedSearch />
            <Cards itemId={3} h1={"נדל״ן למכירה"} />
            <BlogCorner />


        </div>
    )
}

export default Realstate