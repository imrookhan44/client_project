import React, { useEffect } from 'react'
import "./vehiclePage4.css"
import { selectDropdown3 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setVehiclePage4 } from '../../../redux/actions/searchCategory-actions';
const VehiclePage4 = () => {
    const dispatch = useDispatch();
    function selectVehicleCat() {
        const component = document.getElementsByClassName("vehiclePage4")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage5")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setVehiclePage4("vehiclePage5"))
    }
    function goBack() {
        const component = document.getElementsByClassName("vehiclePage4")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage3")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown3()
    }, [])
    return (
        <div className='vehiclePage4'>
            <h1>פרטי מכירה הרכב</h1>
            <div className="vehiclePage4-div">
                <label htmlFor="">: מחיר</label>
                <input type="text" placeholder='46,000' dir='rtl' />
                <label htmlFor="">: ישוב</label>
                <div className="custom-select3" style={{ width: "300px" }}>
                    <select >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="vehiclePage2-btn">
                    <button onClick={() => selectVehicleCat()}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default VehiclePage4