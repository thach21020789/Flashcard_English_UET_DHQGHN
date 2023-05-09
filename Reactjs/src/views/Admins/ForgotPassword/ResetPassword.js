import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.scss';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');
    const token =  useParams('token');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log("token check", token)
            console.log("url checl: ", `http://localhost:3001/reset-password/${token.token}`)
            if (password != confirmedPassword) throw new Error("Confirmed password doesn't match password")
            const response = await axios.post(`http://localhost:3001/reset-password/${token.token}`,
                {
                    password
                }, { withCredentials: true });
            setError(response.data.message)
            window.location.href = 'http://localhost:3000/Login';
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

                        <h2>Change your password</h2>

                        {error && <div className="error">{error}</div>}

                        <div className="inputbox">
                            <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="inputbox">
                            <input type="password" id="confirmedPassword" required value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                            <label htmlFor="confirmedPassword">Confirmed password</label>
                        </div>

                        <button type="submit">Reset Password</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;