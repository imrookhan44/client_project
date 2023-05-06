import React from 'react'
import "./shippingPage1.css"
import Accordion from "./Accordion"
import { useDispatch, useSelector } from 'react-redux';
import { setShippingPage1 } from '../../../redux/actions/viewItem-actions';

const ShippingPage1 = () => {
    const dispatch = useDispatch();
    function partner(params) {
        const component = document.getElementsByClassName("shippingPage1")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("shippingPage2")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setShippingPage1(params));
    }

    return (
        <div className='shippingPage1'>
            <h1>מסלולי שילוח 🙂 </h1>
            <p>לפניכם 2 מסלולים של משלוחים , אנא בחרו את האפשרות המתאימה לכם.</p>
            <div className="shippingPage1-btn">
                <button onClick={() => { partner("1") }}>התנהלות איתנו</button>
                <button onClick={() => { partner("2") }}>התנהלות עצמאית</button>
            </div>
            <div className="shippingPage1-ques">
                <h1>סוג מסלול</h1>
                <Accordion title="1.מהו מסלול התנהלות עצמאית   ">
                    <p>מסלול זה מספק לכם הצעות מחיר מחברות שילוח מובחרות על פי הנתונים שאתם מזינים שירות המשלוחים אהיה לשירותכם אך תשלום על מוצר עצמו יתבצע על אחריותכם בלבד.</p>
                </Accordion>
                <Accordion title="2. מהו מסלול התנהלות איתנו">
                    <p>מסלול זה מספק לכם הצעות מחיר מחברות שילוח מובחרות על פי הנתונים שאתם מזינים שירות המשלוחים אהיה לשירותכם אך תשלום על מוצר עצמו יתבצע על אחריותכם בלבד.</p>
                </Accordion>
            </div>
        </div>
    )
}

export default ShippingPage1