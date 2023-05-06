import React, { useEffect } from 'react'
import "./shippingPage2.css"
import { selectDropdown2 } from "../../../components/select"
import { useDispatch, useSelector } from 'react-redux';
import { setShippingPage2 } from '../../../redux/actions/viewItem-actions';
const ShippingPage2 = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        selectDropdown2()
    }, [])
    function goNext() {
        const component = document.getElementsByClassName("shippingPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("shippingPage3")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setShippingPage2("shippingPage3"));
    }
    function goBack() {
        const component = document.getElementsByClassName("shippingPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("shippingPage1")[0];
        component2.style.display = "flex";
    }

    return (
        <div className='shippingPage2'>
            <h1>כמעט שם 🙂 ,  על מנת לקבל הצעת מחיר </h1>
            <h1>השילוח הפריט אנא מלאו את הפרטים הבאים  📦</h1>
            <h2>כתובת היעד :</h2>
            <div className="shippingPage2-div-inner">
                <div className="shippingPage2-div-col">
                    <label htmlFor="">אזור: </label>
                    <div className="custom-select2" style={{ width: "300px" }}>
                        <select >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
                <div className="shippingPage2-div-col">
                    <label htmlFor="">כתובת:</label>
                    <div className="custom-select2" style={{ width: "300px" }}>
                        <select >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="shippingPage2-div-inner">
                <div className="shippingPage2-div-col">
                    <label>מספר בניין:</label>
                    <input type="text" placeholder='3' />
                </div>
                <div className="shippingPage2-div-col">
                    <label>מיקוד:</label>
                    <input type="text" placeholder='3' />
                </div>
            </div>
            <div className="shippingPage2-div-inner">
                <div className="shippingPage2-div-col">
                    <label>קומה:</label>
                    <input type="text" placeholder='3' />
                </div>
                <div className="shippingPage2-div-col">
                    <label>דירה:</label>
                    <input type="text" placeholder='3' />
                </div>
            </div>
            <div className="shippingPage2-div-inner">
                <div className="shippingPage2-div-col">
                    <label>מספר טלפון נייד:</label>
                    <input type="text" placeholder='3' />
                </div>
                <div className="shippingPage2-div-col">
                    <label htmlFor="">סוג שליחות</label>
                    <div className="custom-select2" style={{ width: "300px" }}>
                        <select>
                            <option value="0" disabled selected>בחר סוג שליחות</option>
                            <option value="1">גמיש</option>
                            <option value="1">מיידי</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="shippingPage2-div-inner2">
                <label htmlFor="">הערות :</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className="shippingPage2-btn">
                <button onClick={() => goBack()}>חזור</button>
                <button onClick={() => goNext()}>המשך</button>
                
            </div>

        </div>
    )
}

export default ShippingPage2