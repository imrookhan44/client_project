import React from 'react'
import "./buyOrSell.css"
import { useSelector, useDispatch } from 'react-redux';
import { setBuyOrSell } from '../../../redux/actions/searchCategory-actions';
const BuyOrSell = () => {
    const buyOrSell = useSelector((state) => state.buyOrSellReducers.buyOrSell);
    const dispatch = useDispatch();
    function selectBuyOrSell(cat) {
        const component = document.getElementsByClassName("buyOrSell")[0];
        component.style.display = "none";
        dispatch(setBuyOrSell(cat))
    }

    return (
        <div className='buyOrSell'>
            <h1>בחר היכן את/ה מעוניין לפרסם את המודעה שלך </h1>
            <div className="buyOrSell-option">
                <div onClick={() => selectBuyOrSell("buy")} className={(buyOrSell == "buy") ? "buy selected" : "buy"}>
                    <h3>חיפוש</h3>
                </div>
                <div onClick={() => selectBuyOrSell("sell")} className={(buyOrSell == "sell") ? "sell selected" : "sell"}>
                    <h3>מכירה</h3>
                </div>
            </div>
        </div>
    )
}

export default BuyOrSell