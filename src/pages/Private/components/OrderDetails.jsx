import React from 'react'
import "./orderDetails.css"
import { GrLocation } from 'react-icons/gr';
import { CiDeliveryTruck } from 'react-icons/ci';
const OrderDetails = () => {
    return (
        <div className='orderDetails'>
            <h1>ניהול הזמנות</h1>
            <div className="orderDetails-first">
                <h2>ממתין לשליחת הזמנה</h2>
                <p>המערכת תאשר אוטומטית את הקבלה לאחר 24 שעות עם שליחת ההזמנה. </p>
                <p>לבירורים נוספים תוכלו עמנו קשר.</p>
                <div className="orderDetails-btn">
                    <button>ההזמנה נשלחה</button>
                    <button>ההזמנה התקבלה</button>
                    <p> <b> הזמנה:</b> ממתין לשליחה</p>
                </div>
            </div>
            <div className="orderDetails-second">
                <div className='orderDetails-second-div'>
                    <GrLocation />
                    <div>
                        <p>שם לקוח: עידן בן אליהו</p>
                        <p>מספר פלאפון: 0535311471</p>
                        <p>כתובת יעד: משה שמיר 3 , 3  31
                            פתח תקווה, ישראל, 4951945</p>
                    </div>
                </div>
                <div className='orderDetails-second-div'>
                    <CiDeliveryTruck />
                    <div>
                        <p>שם לקוח: עידן בן אליהו</p>
                        <p>מספר פלאפון: 0535311471</p>
                        <p>כתובת יעד: משה שמיר 3 , 3  31
                            פתח תקווה, ישראל, 4951945</p>
                    </div>
                </div>
            </div>
            <div className="orderDetails-third">
                <div className="orderDetails-third-div1">
                    <h2>כלב מוזר עם פרוור עונה לשם אלדר</h2>
                    <div className='orderDetails-third-div1 board'>
                        <h3>פרטי המוצר :</h3>
                        <p>דדדידדדדג גדדדידדדדגגדדד ידדדדגגדדדי דדדדגגדדדד דידדדדגגד דדידדדדגגדדד ידדדדגגדדדיד דדדגגדד</p>
                    </div>
                    <div className='orderDetails-third-div1-boxes'>
                        <div>
                            <h3>מצב מוצר</h3>
                            <p>כמו חדש</p>
                        </div>
                        <div>
                            <h3>סוג</h3>
                            <p>כורסא</p>
                        </div>
                    </div>
                    <div className="orderDetails-third-div1-location">
                        <img src={require(`../../../images/Icongooglemaps.png`)} alt="" />
                        <img src={require(`../../../images/Iconlocation.png`)} alt="" />
                        <div>
                            <h3>: אזור</h3>
                            <p>משה שמיר 3 , פתח תקווה, ישראל, 4951945</p>
                        </div>
                    </div>
                </div>
                <div className="orderDetails-third-div2">
                    <img src={require(`../../../images/PetsCategory1.png`)} alt="" />
                    <h2>סה"כ: ₪300</h2>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails