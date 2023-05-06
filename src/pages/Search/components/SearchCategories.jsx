import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../../redux/actions/searchCategory-actions';
const SearchCategories = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState();
    function selectCategory(cat) {
        dispatch(setSelectedCategory(cat))
        const component = document.getElementsByClassName("searchCategories")[0];
        component.style.display = "none";
        setCategory(cat);
    }

    return (
        <div className='searchCategories'>
            <div className="search-category-wrapper">
                <div className={(category == "realstate" ? `selected search-category` : "search-category")} onClick={() => selectCategory("realstate")} >
                    <img src={require(`../../../images/searchcategory1.png`)} alt="" />
                    <p>נדל”ן</p>
                </div>
            </div>
            <div className="search-category-wrapper" >
                <div onClick={() => selectCategory("vehicles")} className={(category == "vehicles" ? `selected search-category` : "search-category")}>
                    <img src={require(`../../../images/searchcategory2.png`)} alt="" />
                    <p>כלי רכב</p>
                </div>
            </div>
            <div className="search-category-wrapper" >
                <div className={(category == "business" ? `selected search-category` : "search-category")} onClick={() => selectCategory("business")}>
                    <img src={require(`../../../images/searchcategory3.png`)} alt="" />
                    <p>עסקים</p>
                </div>
            </div>
            <div className="search-category-wrapper">
                <div className={(category == "secondhand" ? `selected search-category` : "search-category")} onClick={() => selectCategory("secondhand")}>
                    <img src={require(`../../../images/searchcategory4.png`)} alt="" />
                    <p>יד שנייה</p>
                </div>
            </div>
            <div className="search-category-wrapper" >
                <div className={(category == "pets" ? `selected search-category` : "search-category")} onClick={() => selectCategory("pets")}>
                    <img src={require(`../../../images/searchcategory5.png`)} alt="" />
                    <p>חיות מחמד</p>
                </div>
            </div>
            <div className="search-category-wrapper">
                <div className={(category == "fashion" ? `selected search-category` : "search-category")} onClick={() => selectCategory("fashion")}>
                    <img src={require(`../../../images/searchcategory6.png`)} alt="" />
                    <p>אופנה וטיפוח</p>
                </div>
            </div>
        </div>
    )
}

export default SearchCategories