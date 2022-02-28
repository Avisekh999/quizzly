import { useState, useEffect } from 'react'
import Link from 'next/link'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import authStyles from '../styles/authStyles.module.css'
import Button from '@mui/material/Button'

const RegisterPage = () => {
    const [animationState, setAnimationState] = useState('initial')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [matchedError, setMatchedError] = useState(false);


    const createAccountHandler = () => {
        if (email?.length === 0) {
            setEmailError(true)
        }
        if (password?.length === 0) {
            setPasswordError(true)
        }
        if (passwordConfirm?.length === 0) {
            setConfirmPasswordError(true)
        }

        if (password !== passwordConfirm) {
            setMatchedError(true)
        }

        if (email?.length > 0 && password?.length > 0 && passwordConfirm?.length > 0 && password === passwordConfirm) {
            alert('Account Created Successfully');
        }

    }


    useEffect(() => {
        if (email.length > 0) {
            setEmailError(false)
        }
        if (password.length > 0) {
            setPasswordError(false)
        }
        if (passwordConfirm.length > 0) {
            setConfirmPasswordError(false)
        }
        if (password === passwordConfirm) {
            setMatchedError(false)
        }
        if (password !== passwordConfirm) {
            setMatchedError(true)
        }

    }, [email, password, passwordConfirm])


    // useEffect(() => {
    //     setAnimationState('slideInLeft')
    //     return () => setAnimationState('slideOutRight')
    // },[])

    return <div className="container paddingVertical-20">
        <div className="icon">
            <LeftArrowIcon />
        </div>
        <div>
            <h1 className={authStyles.heading}>
                <span>Create Account</span>
                {/* <span>Account</span> */}
            </h1>

            <form className={authStyles.form}>
                <div className={authStyles.formGroup}>
                    <label style={{ color: '#0a58ed' }} htmlFor="email">Your Email</label>
                    <input className={emailError ? authStyles.error : authStyles.normal} id="email" onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="user@example.com" />
                    {emailError && <span style={{ color: 'red', marginLeft: "10px", fontSize: "15px" }}>*field is required</span>}
                </div>
                <div className={authStyles.formGroup}>
                    <label style={{ color: '#0a58ed' }} htmlFor="password">Password</label>
                    <input className={passwordError ? authStyles.error : authStyles.normal} id="password" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="*******" />
                    {passwordError && <span style={{ color: 'red', marginLeft: "10px", fontSize: "15px" }}>*field is required</span>}
                </div>
                <div className={authStyles.formGroup}>
                    <label style={{ color: '#0a58ed' }} htmlFor="confirmPassword">Confirm Password</label>
                    <input className={confirmPasswordError ? authStyles.error : authStyles.normal} id="confirmPassword" onChange={(e) => { setPasswordConfirm(e.target.value) }} type="password" placeholder="*******" />
                    {confirmPasswordError && <span style={{ color: 'red', marginLeft: "10px", fontSize: "15px" }}>*field is required</span>}
                    {matchedError && <span style={{ color: 'red', marginLeft: "10px", fontSize: "15px" }}>*password does not match</span>}
                </div>

                <Button
                    variant='outlined' color='primary' style={{ width: "100%", height: "50px", marginTop: "20px" }} onClick={createAccountHandler}>
                    Create account
                </Button>
            </form>
            <p className="textLight">
                Already have an account?{' '}
                <Link href="/login"><a className="active">Log in</a></Link>
            </p>
        </div>
    </div>
}
export default RegisterPage