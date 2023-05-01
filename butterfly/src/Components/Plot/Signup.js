import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Styles
import Style from '../../Styles/Plot/Signup.module.css';

const API_BASE = "http://localhost:3001";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();

    const signUp = e => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: {
                name: name,
                email: email,
                password: password
            },
            withCredentials: true,
            url: API_BASE + '/plot/signup',
        }).then(res => {
            if (res.data === 'USER ALREADY EXIST!') {
                alert(res.data);
                setName("");
                setEmail("");
                setPassword("");
            }
            else if (res.data === 'USER CREATED!')
                redirect("/plot", { replace: true });
        }).catch(err => console.log(err));
    };

    return (
        <div className={Style.container}>
            <form onSubmit={e => signUp(e)} action='/' method='POST'>
                <input type='text' placeholder='your name' onChange={e => setName(e.target.value)} value={name} id='name' name='name' required /> <br />
                <input type='email' placeholder='your email' onChange={e => setEmail(e.target.value)} value={email} id='email' name='email' required /> <br />
                <input type='password' placeholder='your password' onChange={e => setPassword(e.target.value)} value={password} id='password' name='password' required /> <br />
                <button type='submit' >شروع کن!</button>
            </form>
        </div>
    );
};

export default Signup;