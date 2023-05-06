import React, { useEffect, useState } from 'react'
import "./secondHandPage1.css"
import { selectDropdown7, selectDropdown2 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setSecondHandPage1 } from '../../../redux/actions/searchCategory-actions';
const SecondHandPage1 = () => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    function selectOption(param) {
        const component = document.getElementsByClassName("secondHandPage1")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("secondHandPage2")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setSecondHandPage1(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("secondHandPage1")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("searchBar")[0];
        component2.style.display = "flex";
    }
    function toggle() {
        setChecked(!checked)

        setTimeout(selectDropdown2, 10);

    }
    useEffect(() => {
        selectDropdown7()
    }, [])
    return (
        <div className='secondHandPage1'>
            <h1> פרטי המוצר</h1>
            <div className="secondHandPage1-div">
                <div className="secondHandPage1-div-inner">
                    <div className="secondHandPage1-div-col">
                        <label htmlFor="">:תת קטגוריה    </label>
                        <div className="custom-select7" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="secondHandPage1-div-col">
                        <label htmlFor="">:קטגוריה    </label>
                        <div className="custom-select7" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="secondHandPage1-div-inner">
                    <div className="secondHandPage1-div-col">
                        <label htmlFor="">:שם המוצר    </label>
                        <input type="text" />
                    </div>
                    <div className="secondHandPage1-div-col">
                        <label htmlFor="">:מצב מוצר    </label>
                        <div className="custom-select7" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="fashionPage1-inner">
                    <label>מאשר/ת אפשרות שילוח מוצר זה במידת הצורך ולהציג במודעה את האפשרות הזאת</label>
                    <input type="checkbox" onChange={() => { toggle() }} />
                </div>
                {
                    checked ? <div className="fashionPage1-div-inner">
                        <div className="fashionPage1-div-col">
                            <label htmlFor="">:סוג קבלת תשלום    </label>
                            <div className="custom-select2" style={{ width: "300px" }}>
                                <select >
                                    <option value="0">bit</option>
                                    <option value="1">paypal</option>
                                    <option value="2">כרטיס אשראי</option>
                                </select>
                            </div>
                        </div>
                        <div className="fashionPage1-div-col">
                            <label htmlFor="">:רוחב    </label>
                            <div className="custom-select2" style={{ width: "300px" }}>
                                <select >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <div className="fashionPage1-div-col">
                            <label htmlFor="">:גובה    </label>
                            <div className="custom-select2" style={{ width: "300px" }}>
                                <select >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <div className="fashionPage1-div-col">
                            <label htmlFor="">:משקל    </label>
                            <div className="custom-select2" style={{ width: "300px" }}>
                                <select >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                    </div> : null
                }

                <div className="secondHandPage1-div-col2">
                    <label htmlFor=""> פרטים נוספים </label>
                    <textarea rows="5"></textarea>
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("secondHandPage2")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default SecondHandPage1