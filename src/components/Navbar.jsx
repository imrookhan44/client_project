import React, { useState } from 'react'
import "./navbar.css"
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { SiGoogleanalytics } from 'react-icons/si';
import { FcSettings } from 'react-icons/fc';
import { ReactComponent as PrivateNavbarIcon8 } from "../images/PrivateNavbarIcon8.svg";

import { useDispatch, useSelector } from 'react-redux';
import { setBusinessPage1, setSearch, setBusinessPage2, setBuyOrSell, setChoosePlan, setFashionPage1, setFashionPage2, setFashionPage3, setPetsPage1, setPetsPage2, setPetsPage3, setRealstatePage1, setRealstatePage2, setRealstatePage3, setRealstatePage4, setRealstatePage5, setRealstatePage6, setSelectedCategory, setVehiclePage1, setVehiclePage2, setVehiclePage3, setVehiclePage4, setVehiclePage5, setSecondHandPage3, setSecondHandPage2, setSecondHandPage1 } from '../redux/actions/searchCategory-actions';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    function toggleVisible() {
        setVisible(!visible);
    }
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
        const component2 = document.getElementsByClassName("searchCategories")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        setVisible(false);
    }
    return (
        <div className='navbar'>
            <ul className='navbar-ul1'>
                <li className='logo'><Link to="/"> LOGO</Link></li>
                <li><Link onClick={resetStates} to="/search"><button className='postAd'>העלה מודעה</button></Link></li> {/*  post an ad */}
                <li><button className='searchSection'>מדור החיפוש</button></li>   {/* the search section */}
            </ul>
            <ul className='navbar-u2'>
                <span className='hover'><Link onClick={resetStates} to="/pets"><li>חיות מחמד</li></Link></span>
                <span className='hover'><Link onClick={resetStates} to="/secondHand"><li>יד שניה</li></Link></span>
                <span className='hover'><Link onClick={resetStates} to="/business"><li>עסקים</li></Link></span>
                <span className='hover'><Link onClick={resetStates} to="/vehicle"><li>רכב</li></Link></span>
                <span className='hover'><Link onClick={resetStates} to="/realstate"><li>נדל"ן</li></Link></span>
                <li><Link onClick={resetStates} to="/private/savedAds"><AiOutlineHeart /></Link></li>
                <li><Link onClick={resetStates} to="/chat"><PrivateNavbarIcon8 /></Link></li>
                <li onClick={toggleVisible}><CgProfile /></li>
            </ul>
            <ul className={visible ? "navbar-dropdown" : "invisible"}>
                <li><Link onClick={resetStates} to="/private"> אזור אישי <span><CgProfile /></span></Link></li>
                <li><Link onClick={resetStates} to="/private/analysis">ניתוח מתקדם <span><SiGoogleanalytics /></span></Link></li>
                <li><Link onClick={resetStates} to="/private/updateProfile">הגדרות <span><FcSettings /></span></Link></li>
            </ul>
        </div>
    )
}

export default Navbar