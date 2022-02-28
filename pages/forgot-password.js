import { useState, useEffect } from 'react'
import Link from 'next/link'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import authStyles from '../styles/authStyles.module.css'

const ForgotPasswordPage = () => {
    return <div className={`container paddingVertical-20`}>
        <div className="icon">
            <LeftArrowIcon />
        </div>
        <h1 className={authStyles.heading}>
            <span>Forgot</span>
            <span>Password</span>
        </h1>

        <form className={authStyles.form}> 
            <div className={authStyles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" placeholder="user@example.com" />
            </div>
            <button className='btn displayBlock btn-large btn-primary'>Reset Password</button>
        </form>
    </div>
}
export default ForgotPasswordPage