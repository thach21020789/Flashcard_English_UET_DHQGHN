import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login',
                {
                    email, password
                }, { withCredentials: true });
            console.log(response)
            // Redirect to home page
            window.location.href = 'http://localhost:3000/Home';
        } catch (error) {
            console.log(error.response)
            setError(error.response.data.error);
        }
    };

    return (
        <>
            <Helmet><title>Login</title></Helmet>
            <section className="form-login" onSubmit={handleSubmit}>
                <div className='page-title'>
                    <p className='name-pj'>
                        Rạp xiếc UET project
                    </p>
                    <p className='slogan'>
                        Học tiếng anh vui hơn với Flashcard
                    </p>
                </div>
                <div className="form-box-login">
                    <div className="form-value">
                        <form action className='value-container'>
                            <h2 className='login-title'>Login</h2>
                            {error && <div className="error">{error}</div>}
                            <div className="inputbox-login">
                                <ion-icon name="mail-outline" />
                                <input type="email" id="email" required autocomplete="off" list="autocompleteOff" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputbox-login">
                                <ion-icon name="lock-closed-outline" />
                                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="forget-login">
                                <label htmlFor>
                                    <a href="/forgot-password">Forget Password</a>
                                </label>
                            </div>
                            <button type="submit">Log in</button>
                            <div className="register-login">
                                <p>
                                    Don't have an account ? <a href="/register">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;