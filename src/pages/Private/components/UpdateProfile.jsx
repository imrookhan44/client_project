import React from 'react'
import "./updateProfile.css"
const UpdateProfile = () => {
    return (
        <div className='updateProfile'>
            <h1>עדכון פרטים</h1>
            <div className="updateProfile-header">
                <img src={require(`../../../images/profilepic.png`)} alt="" />
                <p>עידן בן אליהו</p>
            </div>
            <div className="updateProfile-edit">
                <h2>עריכת פרופיל</h2>
                <h3>פרטיים אישיים</h3>
                <div className="updateProfile-inner">
                    <div className="updateProfile-inner-col">
                        <label>שם משפחה:</label>
                        <input type="text" placeholder='שם פרטי' />
                    </div>
                    <div className="updateProfile-inner-col">
                        <label>שם משפחה:</label>
                        <input type="text" placeholder='שם משפחה' />
                    </div>
                </div>
                <div className="updateProfile-inner">
                    <div className="updateProfile-inner-col">
                        <label> אימייל:</label>
                        <input type="text" placeholder='idanbeneliyaho@gmail.com' />
                    </div>
                    <div className="updateProfile-inner-col">
                        <label> תאריך לידה:</label>
                        <input type="text" placeholder='  יום/חודש/שנה' />
                    </div>
                </div>
                <h2>כתובת</h2>
                <p>מומלץ לרשום כתובת על מנת לחבר אוטומטית לפוסט הבא  / משלוח שלך</p>
                <div className="updateProfile-inner">
                    <div className="updateProfile-inner-col">
                        <label> עיר:</label>
                        <input type="text" placeholder='יישוב/עיר' />
                    </div>
                    <div className="updateProfile-inner-col">
                        <label> כתובת:</label>
                        <input type="text" placeholder='רחוב' />
                    </div>
                </div>
                <div className="updateProfile-inner">
                    <div className="updateProfile-inner-col">
                        <label> מספר בית:</label>
                        <input type="text" placeholder='מספר בית' />
                    </div>
                    <div className="updateProfile-inner-col">
                        <label>מספר טלפון:</label>
                        <input type="text" placeholder='מספר פלאפון' />
                    </div>
                </div>
                <div className="updateProfile-btns">
                    <button>שמירה</button>
                    <button>ביטול</button>
                </div>
            </div>

        </div>
    )
}

export default UpdateProfile