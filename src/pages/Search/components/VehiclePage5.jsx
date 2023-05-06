import React from 'react'
import "./vehiclePage5.css"
import { useSelector, useDispatch } from 'react-redux';
import { setVehiclePage5 } from '../../../redux/actions/searchCategory-actions';
import FileUpload from './FileUpload';
const VehiclePage5 = () => {
    const dispatch = useDispatch();
    function selectVehicleCat() {
        const component = document.getElementsByClassName("vehiclePage5")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("choosePlan")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setVehiclePage5("choosePlan"))
    }
    function goBack() {
        const component = document.getElementsByClassName("vehiclePage5")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage4")[0];
        component2.style.display = "flex";
    }
    return (
        <div className='vehiclePage5'>
            <h1>פרטי התקשרות</h1>
            <div className="vehiclePage5-div">
                <h2 htmlFor="">: הוספת תמונות </h2>
                <div className="search-uploadImage">
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                </div>
                <label > :איש קשר</label>
                <input type="text" placeholder='עידן בן אליהו' />
                <label>:מספר נייד </label>
                <input type="number" placeholder='0535311471' />
                <label>:אימייל </label>
                <input type="email" placeholder='idanbeneliyaho@gmail.com' />
                <div className="vehiclePage5-inner">
                    <label>קראתי ואישרתי את התקנון</label>
                    <input type="checkbox" />
                </div>
                <div className="vehiclePage2-btn">
                    <button onClick={() => selectVehicleCat()}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default VehiclePage5