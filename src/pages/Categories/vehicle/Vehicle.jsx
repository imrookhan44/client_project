import React from 'react'
import BlogCorner from '../../Home/components/BlogCorner'
import Cards from '../components/Cards.jsx'
import "./vehicle.css"
import VehicleAdvancedSearch from './VehicleAdvancedSearch'
const Vehicle = () => {
    return (
        <div className='vehicle'>
            <img src={require(`../../../images/CarBanner.png`)} alt="" />
            <div className="vehicle-categories">
                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory1.png`)} alt="" />
                        <p>מסחרי </p>
                    </div>
                </div>

                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory3.png`)} alt="" />
                        <p>כלי שייט</p>
                    </div>
                </div>
                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory4.png`)} alt="" />
                        <p>משאיות</p>
                    </div>
                </div>
                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory2.png`)} alt="" />
                        <p>פרטי</p>
                    </div>
                </div>
                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory5.png`)} alt="" />
                        <p>ג’יפים</p>
                    </div>
                </div>
                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory6.png`)} alt="" />
                        <p>קטנועים</p>
                    </div>
                </div>
                <div className="vehicle-categories-wrapper">
                    <div className="vehicle-category">
                        <img src={require(`../../../images/vehicleCategory7.png`)} alt="" />
                        <p>אופנועים</p>
                    </div>
                </div>
            </div>
            <VehicleAdvancedSearch />
            <Cards itemId={2} h1={"רכבים למכירה"} />
            <BlogCorner />
        </div>

    )
}

export default Vehicle