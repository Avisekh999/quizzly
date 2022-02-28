import { useEffect, useState } from 'react'
import Link from 'next/link'
import LeftArrowIcon from '../components/icons/LeftArrowIcon'
import authStyles from '../styles/authStyles.module.css'
import { Button } from '@mui/material'


const LoginPage = () => {
    const [animationState, setAnimationState] = useState('initial')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setAnimationState('slideInLeft')
        return () => setAnimationState('slideOutRight')
    }, [])

    const LoginHandler = () => {
        if (email?.length == 0) {
            setEmailError(true)
        }
        if (password?.length === 0) {
            setPasswordError(true)
        }
        if (email?.length > 0 && password?.length > 0) {
            alert('Login Successfully');
        }

    }

    useEffect(() => {
        if (email.length > 0) {
            setEmailError(false)
        }
        if (password.length > 0) {
            setPasswordError(false)
        }
    }, [email, password])

    return <div className="container paddingVertical-20">
        <div className="icon">
            <LeftArrowIcon />
        </div>
        <div className={`animateComponent ${animationState}`}>
            <h1 className={authStyles.heading}><span>Login</span></h1>

            <form className={authStyles.form}>
                <div className={authStyles.formGroup}>
                    <label style={{ color: "#0a58ed" }} htmlFor="email">Your Email</label>
                    <input className={emailError ? authStyles.error : authStyles.normal} onChange={(e) => { setEmail(e.target.value) }} id="email" type="email" placeholder="user@example.com" />
                    {emailError && <span style={{ color: 'red', marginLeft: "10px", fontSize: "15px" }}>*field is required</span>}
                </div>
                <div className={authStyles.formGroup}>
                    <label style={{ color: "#0a58ed" }} htmlFor="password">Password</label>
                    <input className={passwordError ? authStyles.error : authStyles.normal} onChange={(e) => { setPassword(e.target.value) }} id="password" type="password" placeholder="*******" />
                    {passwordError && <span style={{ color: 'red', marginLeft: "10px", fontSize: "15px" }}>*field is required</span>}
                </div>

                <Button variant='outlined' color='primary' style={{ width: "100%", height: "50px", marginTop: "20px" }} onClick={LoginHandler}>Login</Button>
            </form>
            <p className="textLight">
                Don't have an account?{' '}
                <Link href="/register"><a className="active">Sign up</a></Link>
            </p>
        </div>
    </div>
}
export default LoginPage