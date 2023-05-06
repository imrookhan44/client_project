import React from 'react'
import "./fashionPage3.css"
import { useSelector, useDispatch } from 'react-redux';
import { setFashionPage3 } from '../../../redux/actions/searchCategory-actions';
import FileUpload from './FileUpload';
const FashionPage3 = () => {
    const dispatch = useDispatch();
    function selectOption() {
        const component = document.getElementsByClassName("fashionPage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("choosePlan")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setFashionPage3("choosePlan"))
    }
    function goBack() {
        const component = document.getElementsByClassName("fashionPage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("fashionPage2")[0];
        component2.style.display = "flex";
    }
    return (
        <div className='fashionPage3'>
            <h1>תמונות של המוצר ויצירת קשר</h1>
            <div className="fashionPage3 shadow">
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
                <div className="fashionPage3-inner">
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

export default FashionPage3