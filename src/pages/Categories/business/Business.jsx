import React from 'react'
import Footer from '../../../components/Footer'
import BlogCorner from '../../Home/components/BlogCorner'
import Cards from '../components/Cards.jsx'
import "./business.css"
import BusinessAdvancedSearch from './BusinessAdvancedSearch'
const Business = () => {

    return (
        <div className='business'>
            <img src={require(`../../../images/CarBanner.png`)} alt="" />
            <div className="business-categories">
                <div className="business-categories-wrapper">
                    <div className="business-category">
                        <img src={require(`../../../images/businessCategory2.png`)} alt="" />
                        <p>זכיינות</p>
                    </div>
                </div>
                <div className="business-categories-wrapper">
                    <div className="business-category">
                        <img src={require(`../../../images/businessCategory1.png`)} alt="" />
                        <p>מסעדות</p>
                    </div>
                </div>
                <div className="business-categories-wrapper">
                    <div className="business-category">
                        <img src={require(`../../../images/businessCategory4.png`)} alt="" />
                        <p>לכל העסקים</p>
                    </div>
                </div>
                <div className="business-categories-wrapper">
                    <div className="business-category">
                        <img src={require(`../../../images/businessCategory3.png`)} alt="" />
                        <p>סופרים</p>
                    </div>
                </div>
                <div className="business-categories-wrapper">
                    <div className="business-category">
                        <img src={require(`../../../images/businessCategory5.png`)} alt="" />
                        <p>קווי חלוקה</p>
                    </div>
                </div>
                <div className="business-categories-wrapper">
                    <div className="business-category">
                        <img src={require(`../../../images/businessCategory6.png`)} alt="" />
                        <p>קיוסקים</p>
                    </div>
                </div>
            </div>
            <BusinessAdvancedSearch />
            <Cards itemId={4} h1={"עסקים למכירה"} />
            <BlogCorner />
        </div>

    )
}

export default Business