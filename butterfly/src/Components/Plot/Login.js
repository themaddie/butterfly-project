import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Styles
import Style from '../../Styles/Plot/Login.module.css';
// Images
import loginIndex from '../../Images/Plot/loginIndex.jpg';

const API_BASE = "http://localhost:3001";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();

    const loginForm = e => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: {
                email: email,
                password: password
            },
            withCredentials: true,
            url: API_BASE + '/plot/login',
        }).then(res => {
            if (res.data === 'No User Exists') {
                alert(res.data);
                setEmail("");
                setPassword("");
            }
            else if (res.data === 'Successfully Authenticated')
                redirect("/plot/home", { replace: true });
            // else{
            // alert(res.data);
            // setEmail("");
            // setPassword("");}
        }).catch(err => console.log(err));
    };

    return (
        <div className={Style.container}>
            <img className={Style.loginIndex} src={loginIndex} alt='Login Index' />
            <div className={Style.loginBox}>
                <h1>بیا تا گل برافشانیم و می در ساغر اندازیم</h1>
                <h1>فلک را سقف بشکافیم و <span style={{ color: '#285C96' }}> طرحی نو </span> دراندازیم</h1>
                <form onSubmit={e => loginForm(e)} action='/' method='POST' >
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