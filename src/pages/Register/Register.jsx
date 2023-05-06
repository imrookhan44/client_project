


import React from 'react';
import "./register.css"
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
class Register extends React.Component {
    render() {
        return (
            <div className="register-container">
                <div className="register-form">
                    <h2 className="register-heading">ברוכה הבאה 🙂 , אנחנו שמחים לראות אותך מצטרפ/ת אלינו</h2>
                    <div className="register-input-group">
                        <div className="register-input-group-wrapper1">
                            <input type="text" className="register-input register-input-firstname" placeholder="שם פרטי" />
                            <FaUser className="register-input-icon" />
                        </div>
                        <div className="register-input-group-wrapper1">
                            <input type="text" className="register-input register-input-lastname" placeholder="שם משפחה" />
                            <FaUser className="register-input-icon" />
                        </div>
                    </div>
                    <div className="register-input-group register-input-group-wrapper">

                        <input type="email" className="register-input register-input-email" placeholder="אימייל" />
                        <FaUser className="register-input-icon" />
                    </div>
                    <div className="register-input-group">
                        <select className="register-input register-input-country-code">
                            <option value="972">+972</option>
                            <option value="1">+1</option>
                            <option value="44">+44</option>
                            <option value="33">+33</option>
                        </select>
                        <div className="register-input-group-wrapper">
                            <input type="tel" className="register-input register-input-mobile-number" placeholder="מספר נייד" />
                            <FaUser className="register-input-icon" />
                        </div>
                    </div>
                    <div className="register-input-group register-input-group-wrapper">
                        <input type="password" className="register-input register-input-password" placeholder="סיסמה" />
                        <FaUser className="register-input-icon" />
                    </div>
                    <div className="register-input-group register-input-group-wrapper">
                        <input type="password" className="register-input register-input-confirm-password" placeholder="אימות סיסמה" />
                        <FaUser className="register-input-icon" />
                    </div>
                    <Link className='register-submit-button' to="/verifyEmail">המשך הרשמה</Link>
                </div>
            </div>
        );
    }
}

export default Register;
