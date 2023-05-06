import { useState } from 'react';
import { FiHome, FiSearch, FiPlus, FiHeart, FiUser } from 'react-icons/fi';
import './navBarFooter.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setBusinessPage1, setSearch, setBusinessPage2, setBuyOrSell, setChoosePlan, setFashionPage1, setFashionPage2, setFashionPage3, setPetsPage1, setPetsPage2, setPetsPage3, setRealstatePage1, setRealstatePage2, setRealstatePage3, setRealstatePage4, setRealstatePage5, setRealstatePage6, setSelectedCategory, setVehiclePage1, setVehiclePage2, setVehiclePage3, setVehiclePage4, setVehiclePage5, setSecondHandPage3, setSecondHandPage2, setSecondHandPage1 } from '../redux/actions/searchCategory-actions';
import { ReactComponent as FooterNav1icon } from "../images/FooterNav1icon.svg";
import { ReactComponent as FooterNav2icon } from "../images/FooterNav2icon.svg";
import { ReactComponent as FooterNav3icon } from "../images/FooterNav3icon.svg";
import { ReactComponent as FooterNav4icon } from "../images/FooterNav4icon.svg";
import FooterHamburger from './FooterHamburger';

function NavBarFooter() {
    const [clicked, setClicked] = useState(1);
    const dispatch = useDispatch();
    function handleClick(params) {
        setClicked(params);
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
        const component2 = document.getElementsByClassName("searchCategories")[0];
        if (component2) {
            component2.style.display = "flex";
        }
    }
    return (
        <nav className={`navbar-footer`}>
            <div className="navbar-footer-buttons">
                <button className={(clicked == "1") ? "navbar-footer-button clicked" : "navbar-footer-button"} >
                    <Link onClick={() => {
                        resetStates()
                        handleClick(1)
                    }} to="/">
                        <FooterNav1icon />
                    </Link>
                </button>
                <button className={(clicked == "2") ? "navbar-footer-button clicked" : "navbar-footer-button"} >
                    <Link onClick={() => {
                        resetStates()
                        handleClick(2)
                    }} to="/chat">
                        <FooterNav2icon />
                    </Link>
                </button>

                <button className={(clicked == "3") ? "navbar-footer-button clicked" : "navbar-footer-button"}>
                    <Link onClick={() => {
                        resetStates()
                        handleClick(3)
                    }} to="/">
                        <FooterNav3icon />
                    </Link>
                </button>
                <button className={(clicked == "4") ? "navbar-footer-button clicked" : "navbar-footer-button"} >
                    <Link onClick={() => {
                        resetStates()
                        handleClick(4)
                    }} to="/Search">

                        <FooterNav4icon />
                    </Link>
                </button>
                <button className={(clicked == "5") ? "navbar-footer-button clicked" : "navbar-footer-button"} >

                    <FooterHamburger />

                </button>
            </div>
        </nav>
    );
}

export default NavBarFooter;
