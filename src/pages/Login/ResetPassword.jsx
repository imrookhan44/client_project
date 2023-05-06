import React from 'react'
import "./resetPassword.css"
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    return (
        <div className="resetPassword-container">
            <div className="resetPassword-form">
                <h2 className="resetPassword-heading">  🙂מלאו את הצעדים הבאים על מנת לאפס את סיסמתך </h2>

                <div className="resetPassword-input-group resetPassword-input-group-wrapper">

                    <input type="email" className="resetPassword-input resetPassword-input-email" placeholder="אימייל" />
                    <FaEnvelope className="resetPassword-input-icon" />
                </div>

                <Link className='resetPassword-submit-button' to="/verifyEmail">שלחו לי קוד</Link>
            </div>
        </div>
    )
}

export default ResetPassword