import React from 'react'
import "./sent.css"
import OrderBar from './OrderBar'
const Sent = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>סה”כ</th>
                    <th>סטטוס</th>
                    <th>תאריך הושלם</th>
                    <th>תאריך הזמנה</th>
                    <th>סוג הזמנה</th>
                </tr>
            </thead>
            <tbody>

                <OrderBar />

                <OrderBar />

                <OrderBar />

                <OrderBar />

                <OrderBar />

                <OrderBar />
                <OrderBar />
                <OrderBar />
                <OrderBar />
                <OrderBar />
                <OrderBar />
                <OrderBar />
                <OrderBar />

            </tbody>
        </table>
    )
}

export default Sent