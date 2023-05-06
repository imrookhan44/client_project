import React, { useEffect } from 'react'
import "./realstatePage3.css"
import { selectDropdown4 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setRealstatePage3 } from '../../../redux/actions/searchCategory-actions';
const RealstatePage3 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("realstatePage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage4")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setRealstatePage3(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("realstatePage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage2")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown4()
    }, [])

    return (
        <div className='realstatePage3'>
            <h1> פרטי הנכס</h1>
            <div className="realstatePage3-div">
                <div className="realstatePage3-div-inner">
                    <div className="realstatePage3-div-col">
                        <label htmlFor="">:  מצב הנכס    </label>
                        <div className="custom-select4" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="VehiclePage3-div-col">
                        <label htmlFor="">: סוג הנכס </label>
                        <div className="custom-select4" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="realstatePage3-div-inner">
                    <div className="realstatePage3-div-col">
                        <label htmlFor="">:  רחוב    </label>
                        <div className="custom-select4" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="VehiclePage3-div-col">
                        <label htmlFor="">:  יישוב   </label>
                        <div className="custom-select4" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="realstatePage3-div-col">
                    <label >: מספר בית </label>
                    <input type="number" placeholder='3' />
                </div>
                <div className="realstatePage3-div-inner">
                    <div className="realstatePage3-div-col">
                        <label>: סה”כ קומות בבניין </label>
                        <input type="number" placeholder='3' />
                    </div>
                    <div className="realstatePage3-div-col">
                        <label>: קומה</label>
                        <input type="number" placeholder='3' />
                    </div>
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("realstatePage4")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default RealstatePage3