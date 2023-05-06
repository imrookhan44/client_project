import React from 'react'
import "./paymentHelp.css"
import { GrLinkNext } from 'react-icons/gr';
const PaymentHelp = () => {
    return (
        <div className='paymentHelp'>
            <button><GrLinkNext />חזרה</button>
            <h1>תשלומים</h1>
            <h3>תשלומים באתר</h3>
            <p>(שם האתר ) מספק לכם מערכת תשלומים מאובטחת על מנת לספק את רצונכם</p>
            <h3>קבלת התשלום על המוצר בעת משלוח</h3>
            <p>על מנת לקבל את התשלום של מוצרכם נדרש ביצוע מלא של משלוח של שליחה ומסירה ללקוח.</p>
            <p>לקונה יש 72 שעות לסמן “אישור קבלת המשלוח” במידה והקונה אינו סימן כלל</p>
            <p>משלוח זה יסומן בוצע אוטומטית</p>
        </div>
    )
}

export default PaymentHelp