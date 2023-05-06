import React from 'react'
import "./choosePlan.css"
import { useSelector, useDispatch } from 'react-redux';
import { setChoosePlan } from '../../../redux/actions/searchCategory-actions';
const ChoosePlan = () => {
    const dispatch = useDispatch();
    function selectVehicleCat() {
        const component = document.getElementsByClassName("choosePlan")[0];
        component.style.display = "none";
        dispatch(setChoosePlan("final"))
    }
    function goBack() {
        const component = document.getElementsByClassName("choosePlan")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage5")[0];
        const component3 = document.getElementsByClassName("realstatePage6")[0];
        const component4 = document.getElementsByClassName("businessPage2")[0];
        const component5 = document.getElementsByClassName("fashionPage3")[0];
        const component6 = document.getElementsByClassName("petsPage3")[0];
        const component7 = document.getElementsByClassName("secondHandPage3")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        if (component3) {
            component3.style.display = "flex";
        }
        if (component4) {
            component4.style.display = "flex";
        }
        if (component5) {
            component5.style.display = "flex";
        }
        if (component6) {
            component6.style.display = "flex";
        }
        if (component7) {
            component7.style.display = "flex";
        }

    }
    return (
        <div className='choosePlan'>
            <div className="choosePlan-div">
                <h1>בחירת סוג מסלול</h1>
                <div className="chooseplan-div-inner1">
                    <h3>רגע לפני עליית המודעה שלך נשאר לנו לבחור את סוג מסלול הפרסום שלך</h3>
                    <h3>אנו ממליצים לשדרג את המודעה ובכך למכור / לחפש במהירות גבוהה הרבה יותר מאחרים</h3>
                </div>
                <div className="chooseplan-div-inner2">
                    <h3>אנא בחרו את סוג המסלול שאתם מעוניינים למודעתכם</h3>
                    <div className="choosePlan-plans">
                        <div className="choosePlan-plan Advenced">
                            <h3>מודעה מתקדמת</h3>
                            <hr />
                            <h1> ₪ 50</h1>
                            <p className='greyColor'>30 ימים</p>
                            <p>מופיעים למעלה ובצבע מודגש </p>
                            <p>מודעה מוקפצת פעם אחת ליום</p>
                            <p>חשיפה גבוהה יותר ויותר פניות</p>
                            <button>בחירת מסלול</button>
                        </div>
                        <div className="choosePlan-plan Success">
                            <h3>מודעה הצלחה</h3>
                            <hr />
                            <h1> ₪ 100</h1>
                            <p className='greyColor'>30 ימים</p>
                            <p>מופיעים הכי למעלה ובצבע ומסגרת מודגש יותר</p>
                            <p>המודעה מוקפצת עד שלוש פעמים ליום</p>
                            <p>מוכרים ומחפשים את המוצר במהירות גבוהה יותר מאחרים</p>
                            <button>בחירת מסלול</button>
                        </div>
                        <div className="choosePlan-plan Free">
                            <h3>מודעה רגילה</h3>
                            <hr />
                            <h1> חינם</h1>
                            <p className='greyColor'>14 ימים</p>
                            <p>מודעה רגילה</p>
                            <p>חשיפה סטנדרטית</p>
                            <p className='grey'>ללא הקפצה אוטומטית</p>
                            <button>בחירת מסלול</button>
                        </div>
                    </div>
                    <div className="vehiclePage2-btn">
                        <button onClick={() => selectVehicleCat()}>המשך</button>
                        <button onClick={() => goBack()} >חזור</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosePlan