import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Styles
import Style from '../../Styles/Plot/Signup.module.css';

const API_BASE = "http://localhost:3001";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        const data = await fetch(API_BASE + '/plot/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }).then(res => res.json());
        redirect("/plot", { replace: true });
    };

    return (
        <div className={Style.container}>
            <form onSubmit={e => submitForm(e)} action='/plot/signup' method='POST' >
                <input type='text' placeholder='your name' onChange={e => setName(e.target.value)} value={name} id='name' name='name' required /> <br />
                <input type='email' placeholder='your email' onChange={e => setEmail(e.target.value)} value={email} id='email' name='email' required /> <br />
                <input type='password' placeholder='your password' onChange={e => setPassword(e.target.value)} value={password} id='password' name='password' required /> <br />
                <button type='submit'>شروع کن!</button>
            </form>
        </div>
    );
};

export default Signup;