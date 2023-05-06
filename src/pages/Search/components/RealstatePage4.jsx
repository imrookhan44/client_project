import React, { useEffect } from 'react'
import "./realstatePage4.css"
import { selectDropdown5 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setRealstatePage4 } from '../../../redux/actions/searchCategory-actions';
const RealstatePage4 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("realstatePage4")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage5")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setRealstatePage4(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("realstatePage4")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage3")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown5()
    }, [])
    return (
        <div className='realstatePage4'>
            <h1>על הנכס </h1>
            <div className="realstatePage4-div">
                <div className="realstatePage4-div-inner">
                    <div className="realstatePage4-div-col">
                        <label htmlFor="">:  חניה    </label>
                        <div className="custom-select5" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="realstatePage4-div-col">
                        <label htmlFor="">: מספר חדרים    </label>
                        <div className="custom-select5" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="realstatePage4-div-inner2">
                    <div className="realstatePage4-div-col">
                        <label htmlFor="">:  מרפסת    </label>
                        <div className="custom-select5" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="realstatePage4-div-inner3">
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>דוד שמש</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>סורגים</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>מזגן</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>גישה לנכים</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>מחסן</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>ריהוט</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>מטבח כשר</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>ממ”ד</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>מעלית</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>משופצת</div>
                    </div>
                    <div className="realstatePage4-div-inner3-wrapper">
                        <div>מיזוג</div>
                    </div>
                </div>
                <div className="realstatePage4-div-col2">
                    <label htmlFor="">פרטים נוספים</label>
                    <input type="text" placeholder='...פרטים נוספים ' />
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("realstatePage5")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default RealstatePage4