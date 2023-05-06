import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setBusinessPage1, setSearch, setBusinessPage2, setBuyOrSell, setChoosePlan, setFashionPage1, setFashionPage2, setFashionPage3, setPetsPage1, setPetsPage2, setPetsPage3, setRealstatePage1, setRealstatePage2, setRealstatePage3, setRealstatePage4, setRealstatePage5, setRealstatePage6, setSelectedCategory, setVehiclePage1, setVehiclePage2, setVehiclePage3, setVehiclePage4, setVehiclePage5, setSecondHandPage3, setSecondHandPage2, setSecondHandPage1 } from '../../../redux/actions/searchCategory-actions';
import "./final.css"
const Final = () => {
    const dispatch = useDispatch();
    function resetStates() {
        dispatch(setSelectedCategory(undefined));
        dispatch(setBuyOrSell(undefined));
        dispatch(setVehiclePage1(undefined));
        dispatch(setVehiclePage2(undefined));
        dispatch(setVehiclePage3(undefined));
        dispatch(setVehiclePage4(undefined));
        dispatch(setVehiclePage5(undefined));
        dispatch(setChoosePlan(undefined));
        dispatch(setRealstatePage1(undefined));
        dispatch(setRealstatePage2(undefined));
        dispatch(setRealstatePage3(undefined));
        dispatch(setRealstatePage4(undefined));
        dispatch(setRealstatePage5(undefined));
        dispatch(setRealstatePage6(undefined));
        dispatch(setBusinessPage1(undefined));
        dispatch(setBusinessPage2(undefined));
        dispatch(setFashionPage1(undefined));
        dispatch(setFashionPage2(undefined));
        dispatch(setFashionPage3(undefined));
        dispatch(setSecondHandPage3(undefined));
        dispatch(setSecondHandPage2(undefined));
        dispatch(setSecondHandPage1(undefined));
        dispatch(setPetsPage1(undefined));
        dispatch(setPetsPage2(undefined));
        dispatch(setPetsPage3(undefined));
        dispatch(setSearch(undefined));
        const component = document.getElementsByClassName("final")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("searchCategories")[0];
        if (component2) {
            component2.style.display = "flex";
        }
    }
    return (
        <div className='final'>
            <div className="final-div">
                <h1>🚀 מודעתכם תעלה בזמן הקרוב לאוויר  </h1>
                <div className="vehiclePage2-btn ">
                    <button onClick={resetStates}>   <Link to="/search"> העלה מודעה נוספת </Link></button>
                    <button > <Link to="/private">   אזור האישי </Link></button>
                </div>
            </div>
        </div>
    )
}

export default Final