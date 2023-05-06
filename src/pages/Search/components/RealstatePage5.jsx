import React from 'react'
import "./realstatePage5.css"
import { useSelector, useDispatch } from 'react-redux';
import { setRealstatePage5 } from '../../../redux/actions/searchCategory-actions';
const RealstatePage5 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("realstatePage5")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage6")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setRealstatePage5(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("realstatePage5")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage4")[0];
        component2.style.display = "flex";
    }
    return (
        <div className='realstatePage5'>
            <h1> תשלומים ועוד</h1>
            <div className="realstatePage5-div">
                <div className="realstatePage4-div-inner">
                    <div className="realstatePage5-div-col">
                        <label htmlFor="">:  מ”ר סך הכל   </label>
                        <input type="text" />
                    </div>
                    <div className="realstatePage5-div-col">
                        <label htmlFor="">: מ”ר בנוי    </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="realstatePage4-div-inner">
                    <div className="realstatePage5-div-col">
                        <label htmlFor="">: מחיר    </label>
                        <input type="text" />
                    </div>
                    <div className="realstatePage5-div-col">
                        <label htmlFor="">:  תאריך כניסה   </label>
                        <input type="date" />
                    </div>
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("realstatePage6")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>


        </div >
    )
}

export default RealstatePage5