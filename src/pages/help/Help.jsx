import React from 'react'
import Accordion from '../shipping/components/Accordion'

import "./help.css"
const Help = () => {
    return (
        <div className='help'>
            <div className="help-header">
                <h1>מרכז עזרה</h1>
            </div>
            <div className="help-main">
                <h1>חיפושים פופולרים</h1>
                <div className="help-options">
                    <div>
                        <img src={require(`../../images/help-option1.png`)} alt="" />
                        <p>מידע על השילוח</p>
                    </div>
                    <div>
                        <img src={require(`../../images/help-option3.png`)} alt="" />
                        <p>תשלומים</p>
                    </div>
                    <div>
                        <img src={require(`../../images/help-option2.png`)} alt="" />
                        <p>חוקים</p>
                    </div>
                </div>
                <h2>שאלות נפוצות</h2>
                <div className='dropdownHelp'>
                    <Accordion title="1. מהו מסלול התנהלות איתנו">
                        <p>מסלול זה מספק לכם הצעות מחיר מחברות שילוח מובחרות על פי הנתונים שאתם מזינים שירות המשלוחים אהיה לשירותכם אך תשלום על מוצר עצמו יתבצע על אחריותכם בלבד.</p>
                    </Accordion>
                    <Accordion title="2. מהו מסלול התנהלות איתנו">
                        <p>מסלול זה מספק לכם הצעות מחיר מחברות שילוח מובחרות על פי הנתונים שאתם מזינים שירות המשלוחים אהיה לשירותכם אך תשלום על מוצר עצמו יתבצע על אחריותכם בלבד.</p>
                    </Accordion>
                    <Accordion title="3. מהו מסלול התנהלות איתנו">
                        <p>מסלול זה מספק לכם הצעות מחיר מחברות שילוח מובחרות על פי הנתונים שאתם מזינים שירות המשלוחים אהיה לשירותכם אך תשלום על מוצר עצמו יתבצע על אחריותכם בלבד.</p>
                    </Accordion>
                </div>
                <div className="help-btn">
                    <div>
                        <h1>עדיין צריך עזרה?</h1>
                        <h2>אנחנו תמיד כאן בשבילך.</h2>
                    </div>
                    <button>בואו נדבר!</button>
                </div>
            </div>

        </div>
    )
}

export default Help