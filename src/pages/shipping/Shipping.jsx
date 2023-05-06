import React from 'react'
import ShippingPage1 from './components/ShippingPage1'
import "./shipping.css"
import { useDispatch, useSelector } from 'react-redux';
import ShippingPage2 from './components/ShippingPage2';
import ShippingPage3 from './components/ShippingPage3';
const Shipping = () => {
    const shippingPage1 = useSelector((state) => state.shippingPage1Reducers.shippingPage1);
    const shippingPage2 = useSelector((state) => state.shippingPage2Reducers.shippingPage2);
    let show = undefined;
    function showShippingPage1() {
        if (show == undefined) {
            show = shippingPage1
            return <ShippingPage1 />
        }
        return null
    }
    function showShippingPage2() {
        if (shippingPage1 == "1" || shippingPage1 == "2") {
            show = shippingPage2
            return <ShippingPage2 />
        }
        return null
    }
    function showShippingPage3() {
        if (show == "shippingPage3") {
            return <ShippingPage3 />
        }
        return null
    }
    return (
        <div className='shipping'>
            {
                showShippingPage1()
            }
            {
                showShippingPage2()
            }
            {
                showShippingPage3()
            }
        </div>
    )
}

export default Shipping