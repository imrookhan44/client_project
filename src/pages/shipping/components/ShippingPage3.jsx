import React from 'react'
import "./shippingPage3.css"
const ShippingPage3 = () => {
    function goBack() {
        const component = document.getElementsByClassName("shippingPage3")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("shippingPage2")[0];
        component2.style.display = "flex";
    }
    return (
        <div className='shippingPage3'>
            <h1>אנא בחרו את ההצעה הכי נכונה לכם לפי </h1>
            <h1>המידע שסיפקתם 🙂</h1>
            <h2>חברות שילוח :</h2>
            <div className="shippingPage3-options">
                <div className="shippingPage3-options-div">
                    <img src={require(`../../../images/shipping1.png`)} alt="" />
                    <p>30 ימי משלוח</p>
                    <h1>₪ 60</h1>
                </div>
                <div className="shippingPage3-options-div">
                    <img src={require(`../../../images/shipping2.png`)} alt="" />
                    <p>30 ימי משלוח</p>
                    <h1>₪ 30</h1>
                </div>
                <div className="shippingPage3-options-div">
                    <img src={require(`../../../images/shipping3.png`)} alt="" />
                    <p>30 ימי משלוח</p>
                    <h1>₪ 90</h1>
                </div>
            </div>
        </div>
    )
}

export default ShippingPage3