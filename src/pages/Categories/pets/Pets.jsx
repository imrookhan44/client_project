import React from 'react'
import BlogCorner from '../../Home/components/BlogCorner'
import Cards from '../components/Cards.jsx'
import "./pets.css"
import PetsAdvancedSearch from './PetsAdvancedSearch'
const Pets = () => {
    return (
        <div className='pets'>
            <img src={require(`../../../images/CarBanner.png`)} alt="" />
            <div className="pets-categories">
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory3.png`)} alt="" />
                        <p>חיות משק</p>
                    </div>
                </div>
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory7.png`)} alt="" />
                        <p>דגים</p>
                    </div>
                </div>
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory2.png`)} alt="" />
                        <p>חתולים</p>
                    </div>
                </div>
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory1.png`)} alt="" />
                        <p>כלבים</p>
                    </div>
                </div>
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory4.png`)} alt="" />
                        <p>זוחלים</p>
                    </div>
                </div>
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory5.png`)} alt="" />
                        <p>תוכים</p>
                    </div>
                </div>
                <div className="pets-categories-wrapper">
                    <div className="pets-category">
                        <img src={require(`../../../images/PetsCategory6.png`)} alt="" />
                        <p>מכרסמים</p>
                    </div>
                </div>
            </div>
            <PetsAdvancedSearch />
            <Cards itemId={0} h1={"כלבים למכירה"} />
            <BlogCorner />
        </div>

    )
}

export default Pets