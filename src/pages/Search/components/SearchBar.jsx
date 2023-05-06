import React from 'react'
import "./searchBar.css"
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/actions/searchCategory-actions';
import { BsSearch } from 'react-icons/bs';
const BuyOrSell = () => {
    const search = useSelector((state) => state.searchReducers.search);
    const dispatch = useDispatch();
    function selectSearch(cat) {
        const component = document.getElementsByClassName("searchBar")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("businessPage1")[0];
        const component3 = document.getElementsByClassName("fashionPage1")[0];
        const component4 = document.getElementsByClassName("secondHandPage1")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        if (component3) {
            component3.style.display = "flex";
        }
        if (component4) {
            component4.style.display = "flex";
        }
        dispatch(setSearch(cat))
    }

    return (
        <div className='searchBar'>
            <h1>בואו נתחיל את עליית המוצר שלך</h1>
            <div className="searchBar-main">
                <button onClick={() => { selectSearch("search") }}>עלייה ידנית</button>
                <div className="searchBar-main-input">
                    <BsSearch />
                    <input type="text" placeholder='ספרו לנו מה אתם מוכרים' />
                </div>
                <button onClick={() => { selectSearch("search") }}>המשך</button>
            </div>

        </div>
    )
}

export default BuyOrSell