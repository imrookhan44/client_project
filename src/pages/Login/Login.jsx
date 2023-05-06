import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import google from '../../images/icons/google.png';
import facebook from '../../images/icons/facebook.png';

const Login = () => {
    return (
        <div className='body'>
            <div className='loginContainer'>
                <section className='login'>
                    <Link to="/"><button className='mediatorsButton'>כניסה למתווכים</button></Link>
                    <h1>ברוכה הבאה 🙂 , <br></br>
                        אנחנו שמחים לראות אותך אצלנו
                    </h1>
                    <div className='email'>
                        <input placeholder='מייל'></input>
                    </div>
                    <div className='password'>
                        <input placeholder='סיסמא'></input>
                    </div>
                    <div className='forgetPassword'>
                        <Link to="/resetPassword"> <button className='textForgetPassword'>שכחתי סיסמא</button></Link>
                    </div>
                    <Link to="/"> <button className='textLogin'>התחבר</button></Link>

                    <div className='socialIcons'>
                        <Link to=""><button className='textSocialButton'><img src={facebook} alt='facebookicon'></img>התחברות עם</button> </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to=""><button className='textSocialButton'><img src={google} alt='googleicon'></img> התחברות עם</button></Link>
                    </div>
                    <Link to="/register"><button className='registerButton'>הרשמה</button></Link>

                </section>
            </div>






        </div>
    )
}

export default Login