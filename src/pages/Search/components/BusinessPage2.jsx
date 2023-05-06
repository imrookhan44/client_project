import React from 'react'
import "./businessPage2.css"
import { useSelector, useDispatch } from 'react-redux';
import { setBusinessPage2 } from '../../../redux/actions/searchCategory-actions';
import FileUpload from './FileUpload';
const BusinessPage2 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("businessPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("choosePlan")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setBusinessPage2(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("businessPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("businessPage1")[0];
        component2.style.display = "flex";
    }
    return (
        <div className='businessPage2'>
            <h1>תמונות של הנכס ויצירת קשר</h1><br></br>
            <div className="businessPage2 shadow">
                <h2>הוספת תמונות</h2>
                <div className="search-uploadImage">
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                    <FileUpload />
                </div>

                <label >:איש קשר </label>
                <input type="text" placeholder='עידן בן אליהו' />
                <label >:מספר נייד</label>
                <input type="number" placeholder='0535311471' />
                <label >:אימייל</label>
                <input type="email" placeholder='idanbeneliyaho@gmail.com' />
                <div className="businessPage2-inner">
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

export default BusinessPage2