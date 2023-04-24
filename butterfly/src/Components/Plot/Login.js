import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Styles
import Style from '../../Styles/Plot/Login.module.css';
// Images
import loginIndex from '../../Images/Plot/loginIndex.jpg';

const API_BASE = "http://localhost:3001";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        const data = await fetch(API_BASE + '/plot/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json());
        redirect("home", { replace: true });
    };

    return (
        <div className={Style.container}>
            <img className={Style.loginIndex} src={loginIndex} alt='Login Index' />
            <div className={Style.loginBox}>
                <h1>بیا تا گل برافشانیم و می در ساغر اندازیم</h1>
                <h1>فلک را سقف بشکافیم و <span style={{ color: '#285C96' }}> طرحی نو </span> دراندازیم</h1>
                <form onSubmit={e => submitForm(e)} action='/plot' method='POST' >
                    <input type='email' placeholder='your email' onChange={e => setEmail(e.target.value)} value={email} id='email' name='email' required /> <br />
                    <input type='password' placeholder='your password' onChange={e => setPassword(e.target.value)} value={password} id='password' name='password' required /> <br />
                    <button id={Style.login} type='submit'>شروع کن!</button>
                    <Link id={Style.signup} to='/plot/signup'>هنوز ثبت‌نام نکردی؟</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;