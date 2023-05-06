import React, { useEffect } from 'react'
import "./businessPage1.css"
import { selectDropdown6 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setBusinessPage1 } from '../../../redux/actions/searchCategory-actions';
const BusinessPage1 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("businessPage1")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("businessPage2")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setBusinessPage1(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("businessPage1")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("searchBar")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown6()
    }, [])
    return (
        <div className='businessPage1'>
            <h1>פרטי העסק</h1><br></br>
            <div className="businessPage1-div">
                <div className="businessPage1-div-inner">
                    <div className="businessPage1-div-col">
                        <label htmlFor="">:קטגוריה    </label>
                        <div className="custom-select6" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="businessPage1-div-col">
                        <label htmlFor="">:כותרת   </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="businessPage1-div-inner">
                    <div className="businessPage1-div-col">
                        <label htmlFor="">:מחיר   </label>
                        <input type="text" placeholder='50000' />
                    </div>
                    <div className="businessPage1-div-col">
                        <label htmlFor="">:יישוב    </label>
                        <div className="custom-select6" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="businessPage1-div-col2">
                    <label htmlFor="">:פרטים נוספים   </label>
                    <textarea rows="5" placeholder='פרטים נוספים...'></textarea>
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("businessPage2")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>

        </div>
    )
}

export default BusinessPage1