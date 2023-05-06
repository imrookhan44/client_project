import React, { useEffect, useState } from 'react'
import { selectDropdown } from "../../../components/select"
import "./vehiclePage2.css"
import { useSelector, useDispatch } from 'react-redux';
import { setVehiclePage2 } from '../../../redux/actions/searchCategory-actions';
const VehiclePage2 = () => {
    const dispatch = useDispatch();

    function selectVehicleCat() {
        const component = document.getElementsByClassName("vehiclePage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage3")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setVehiclePage2("vehiclePage3"))
    }
    function goBack() {
        const component = document.getElementsByClassName("vehiclePage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehicleCategory")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown()
    }, [])

    return (
        <div className='vehiclePage2'>
            <h1>סוג רכב</h1>
            <div className="vehiclePage2-div">
                <label htmlFor="manufacturer">: יצרן </label>
                <div className="custom-select" style={{ width: "300px" }}>
                    <select >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

                <label htmlFor="manufacturer">: דגם </label>
                <div className="custom-select" style={{ width: "300px" }}>
                    <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>


                <label htmlFor="manufacturer">: מנוע </label>
                <div className="custom-select" style={{ width: "300px" }}>
                    <select>
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

export default VehiclePage2