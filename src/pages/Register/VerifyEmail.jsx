import React from 'react'
import './verifyEmail.css'
import { Link } from 'react-router-dom';




const VerifyEmail = () => {
    return (
        <div className='body'>
            <div className='verifyContainer'>
                <section className='verifyEmailSection'>
                    <h1>אימות מייל</h1>
                    <p>אנא הזינו את הקוד שנשלח לכם למייל שרשמתם</p>
                    <div className='verifyEmail'>
                        <input placeholder='הזינו את הקוד'></input>
                    </div>


                    <Link to="/"><button className='verifyButton'>אמת</button></Link>

                </section>
            </div>

        </div>
    )
}

export default VerifyEmail