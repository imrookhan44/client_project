import React, { useEffect } from 'react'
import "./vehiclePage3.css"
import { selectDropdown2 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setVehiclePage3 } from '../../../redux/actions/searchCategory-actions';
const VehiclePage3 = () => {
    const dispatch = useDispatch();
    function selectVehicleCat() {
        const component = document.getElementsByClassName("vehiclePage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage4")[0];
        if (component2) {
            component2.style.display = "flex";
        }

        dispatch(setVehiclePage3("vehiclePage4"))
    }
    function goBack() {
        const component = document.getElementsByClassName("vehiclePage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage2")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown2()
    }, [])
    return (
        <div className='vehiclePage3'>
            <h1>פרטי הרכב </h1>
            <div className="VehiclePage3-div">
                <label htmlFor="colors">: בחר צבע </label>
                <div className="colors">
                    <div className="red"></div>
                    <div className="blue"></div>
                    <div className="green"></div>
                    <div className="yellow"></div>
                    <div className="black"></div>
                    <div className="white"></div>
                </div>
                <label htmlFor="colors">: בחר גוון </label>
                <div className="colors">
                    <div className="red"></div>
                    <div className="blue"></div>
                    <div className="green"></div>
                    <div className="yellow"></div>
                    <div className="black"></div>
                    <div className="white"></div>
                </div>
                <label htmlFor="">:   חודש עלייה לכביש </label>
                <div className="custom-select2" style={{ width: "300px"}}>
                    <select >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <label htmlFor="">:  טסט עד  </label>
                <div className="VehiclePage3-date">
                    <input type="number" min="1900" max="2099" step="1" placeholder='enter year' />
                    <input type="number" min="1" max="12" step="1" placeholder='enter month' />
                </div>
                <div className="VehiclePage3-div-inner">
                    <div className="VehiclePage3-div-col">
                        <label htmlFor="">:  בעלות קודמת  </label>
                        <div className="custom-select2" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="VehiclePage3-div-col">
                        <label htmlFor="">:  בעלות נוכחית </label>
                        <div className="custom-select2" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="VehiclePage3-div-inner">
                    <div className="VehiclePage3-div-col">
                        <label htmlFor="">: קילומטרז’  </label>
                        <div className="custom-select2" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="VehiclePage3-div-col">
                        <label htmlFor="">: יד  </label>
                        <div className="custom-select2" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="VehiclePage3-div-inner2" style={{ width: "200px" }}>
                    <label htmlFor="">? מותאם לנכים </label>
                    <div className="VehiclePage3-div-inner">
                        <div className="yes">
                            לא
                        </div>
                        <div className="no">
                            כן
                        </div>
                    </div>
                </div>
                <div className="VehiclePage3-div-inner2" >
                    <label htmlFor="">פרטים נוספים</label>
                    <input type="text" placeholder='פרטים נוספים...' />
                </div>
                <div className="vehiclePage2-btn">
                    <button onClick={() => selectVehicleCat()}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default VehiclePage3