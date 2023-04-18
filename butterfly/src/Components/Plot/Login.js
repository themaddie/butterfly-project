import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../../Styles/Plot/Login.module.css';
// Images
import loginIndex from '../../Images/Plot/loginIndex.jpg';

const Login = () => {
    return (
        <div className={Style.container}>
            <img className={Style.loginIndex} src={loginIndex} />
            <div className={Style.loginBox}>
                <h1>بیا تا گل برافشانیم و می در ساغر اندازیم</h1>
                <h1>فلک را سقف بشکافیم و <span style={{color: '#285C96'}}> طرحی نو </span> دراندازیم</h1>
                <form>
                    <input type='email' placeholder='your email' /> <br />
                    <input type='password' placeholder='your password' /> <br />
                    <button id={Style.login} type='submit'>شروع کن!</button> <br />
                    <Link id={Style.signup} to='/home'>هنوز ثبت‌نام نکردی؟</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;