import React, { useEffect } from 'react'
import "./secondHandPage2.css"
import { selectDropdown8 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setSecondHandPage2 } from '../../../redux/actions/searchCategory-actions';
const SecondHandPage2 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("secondHandPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("secondHandPage3")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setSecondHandPage2(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("secondHandPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("secondHandPage1")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown8()
    }, [])
    return (
        <div className='secondHandPage2'>
            <h1> מחיר וכתובת</h1>
            <div className="secondHandPage2-div">
                <div className="secondHandPage1-div-inner">
                    <div className="secondHandPage2-div-col">
                        <label htmlFor="">:  רחוב    </label>
                        <div className="custom-select8" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="secondHandPage2-div-col">
                        <label htmlFor="">:  יישוב    </label>
                        <div className="custom-select8" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="secondHandPage2-div-inner">
                    <div className="secondHandPage2-div-col">
                        <label htmlFor="">: מחיר    </label>
                        <input type="text" />
                    </div>
                    <div className="secondHandPage2-div-col">
                        <label htmlFor="">: מספר בית    </label>
                        <input type="text" />
                    </div>


                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("secondHandPage3")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default SecondHandPage2