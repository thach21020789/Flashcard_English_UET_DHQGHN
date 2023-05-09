import React, { useState } from 'react';
import axios from 'axios';
import './Register.scss';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/register',
                {
                    fullName, email, password, confirmedPassword
                }, { withCredentials: true });
            // Redirect to login page
            window.location.href = 'http://localhost:3000/login';
        } catch (error) {
            console.log(error.response)
            setError(error.response.data.error);
        }
    };

    return (
            <section className="login-form" onSubmit={handleSubmit}>
                <div className="form-box">
                    <div className="form-value">
                        <form action className='value-container'>
                            <h2>Register</h2>
                            {error && <div className="error">{error}</div>}
                            <div className="inputbox">
                                <input type="text" id="fullName" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                <label htmlFor="fullName">fullName</label>
                            </div>
                            <div className="inputbox">
                                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" id="confirmedPassword" required value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                                <label htmlFor="confirmedPassword">Confirmed password</label>
                            </div>
                            <button type="submit">Log in</button>
                            <div className="register">
                                <p>
                                    Already have an account ? <a href="http://localhost:3000/login">Log in</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    );
};

export default Register;