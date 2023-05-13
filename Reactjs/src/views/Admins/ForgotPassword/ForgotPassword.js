import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.scss';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/forgot-password',
                {
                    email
                }, { withCredentials: true });

            setMessage(response.data.message);
        } catch (error) {
            console.log(error.response)
            setMessage(error.response.data.error);
        }
    };

    return (
        <section className="forgotPass-form" onSubmit={handleSubmit}>
            <div className="form-box-forgotPass">
                <div className="form-value">
                    <form action className='value-container'>
                        <h2 className='forgot-header'>Enter your email</h2>
                        {message && <div className="message">{message}</div>}
                        <div className="inputbox">
                            <ion-icon name="mail-outline" />
                            <input type="email" id="email" required value={email} autocomplete="off" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;