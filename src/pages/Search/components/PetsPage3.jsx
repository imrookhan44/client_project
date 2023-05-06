import React from 'react'
import "./petsPage3.css"
import { useSelector, useDispatch } from 'react-redux';
import { setPetsPage3 } from '../../../redux/actions/searchCategory-actions';
import FileUpload from './FileUpload';
const PetsPage3 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("petsPage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("choosePlan")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setPetsPage3(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("petsPage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("petsPage2")[0];
        component2.style.display = "flex";
    }
    return (
        <div className='petsPage3'>
            <h1>תמונות של הנכס ויצירת קשר</h1>
            <div className="petsPage3 shadow">
                <label>הוספת תמונות</label>
                <div className="search-uploadImage">
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                </div>
                <label >:  איש קשר  </label>
                <input type="text" placeholder='עידן בן אליהו' />
                <label >:  פלאפון  </label>
                <input type="number" placeholder=' 0535311471 ' />
                <label >: דוא”ל   </label>
                <input type="email" placeholder=' idanbeneliyaho@gmail.com ' />
                <div className="petsPage3-inner">
                    <label>קראתי ואישרתי את התקנון</label>
                    <input type="checkbox" />
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("choosePlan")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default PetsPage3