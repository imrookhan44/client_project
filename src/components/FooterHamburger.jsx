import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./footerHamburger.css"
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessPage1, setSearch, setBusinessPage2, setBuyOrSell, setChoosePlan, setFashionPage1, setFashionPage2, setFashionPage3, setPetsPage1, setPetsPage2, setPetsPage3, setRealstatePage1, setRealstatePage2, setRealstatePage3, setRealstatePage4, setRealstatePage5, setRealstatePage6, setSelectedCategory, setVehiclePage1, setVehiclePage2, setVehiclePage3, setVehiclePage4, setVehiclePage5, setSecondHandPage3, setSecondHandPage2, setSecondHandPage1 } from '../redux/actions/searchCategory-actions';
import { Link } from 'react-router-dom';
import { ReactComponent as PrivateNavbarIcon10 } from "../images/PrivateNavbarIcon10.svg";
import { ReactComponent as PrivateNavbarIcon3 } from "../images/PrivateNavbarIcon3.svg";
import { ReactComponent as PrivateNavbarIcon8 } from "../images/PrivateNavbarIcon8.svg";
import { ReactComponent as PrivateNavbarIcon9 } from "../images/PrivateNavbarIcon9.svg";
import { ReactComponent as PrivateNavbarIcon11 } from "../images/PrivateNavbarIcon11.svg";

const FooterHamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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

    }

    return (
        <>
            <div className="hamburger-icon" onClick={toggleMenu}>
                <FaBars />
            </div>
            {isOpen && (
                <div className="hamburger-menu">
                    <div className="close-icon" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                    <div className="hamburger-menu-btns">
                        <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/search"><button className='postAd'> העלה מודעה</button></Link>
                        <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/"><button className='searchSection'> מדור החיפוש</button>
                        </Link>
                    </div>
                    <ul>
                        <li> <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/"> לאזור האישי <PrivateNavbarIcon11 /> </Link></li>
                        <li> <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/">מודעות שאהבתי <PrivateNavbarIcon10 /> </Link> </li>
                        <li> <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/"> משימות <PrivateNavbarIcon3 /> </Link> </li>
                        <li >  <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/">צ’אטים <PrivateNavbarIcon8 /> </Link> </li>
                        <li> <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/"> מרכז עזרה <PrivateNavbarIcon9 /> </Link> </li>
                    </ul>
                    <hr />
                    <ul>
                        <li>נדל”ן</li>
                        <li>רכב</li>
                        <li>עסקים</li>
                        <li>יד שנייה</li>
                        <li>חיות מחמד</li>
                    </ul>
                    <div className="hamburger-menu-btns-bottom">
                        <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/">
                            <img src={require(`../images/SideBarIconBtn1.png`)} alt="" />
                        </Link>
                        <Link onClick={() => {
                            resetStates()
                            toggleMenu()
                        }} to="/">
                            <img src={require(`../images/SideBarIconBtn2.png`)} alt="" />
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default FooterHamburger;
