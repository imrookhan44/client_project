import React from 'react'
import BlogCorner from '../../Home/components/BlogCorner'
import Cards from '../components/Cards.jsx'
import "./secondhand.css"
import SecondhandAdvancedSearch from './SecondhandAdvancedSearch'
const Secondhand = () => {
    return (
        <div className='secondhand'>
            <img src={require(`../../../images/CarBanner.png`)} alt="" />
            <div className="secondhand-categories">
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory1.png`)} alt="" />
                        <p>מוצרי חשמל</p>
                    </div>
                </div>
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory2.png`)} alt="" />
                        <p>ריהוט</p>
                    </div>
                </div>
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory3.png`)} alt="" />
                        <p>לבית ולגינה</p>
                    </div>
                </div>
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory4.png`)} alt="" />
                        <p>הכל</p>
                    </div>
                </div>
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory5.png`)} alt="" />
                        <p>ספורט</p>
                    </div>
                </div>
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory6.png`)} alt="" />
                        <p>עסקים</p>
                    </div>
                </div>
                <div className="secondhand-categories-wrapper">
                    <div className="secondhand-category">
                        <img src={require(`../../../images/secondHandCategory7.png`)} alt="" />
                        <p>אופנה ויפוח</p>
                    </div>
                </div>
            </div>
            <SecondhandAdvancedSearch />
            <Cards itemId={1} h1={"ריהוט למכירה"} />
            <BlogCorner />
        </div>

    )
}

export default Secondhand