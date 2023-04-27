
import React from "react";
import './Login.scss';
import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import axios from "axios";
class Login extends React.Component {
    handleLogin = () =>{
        console.log("testing")
        let res = axios.get(`http://localhost:3000/search/tree`)
        console.log(res)
        this.props.history.push('/Home');
    }
    
    state = {
        userName: "Thach",
        passWord:"123"
    }

    render() {
        return (
            <>
                <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
                <form onSubmit={this.handleLogin}>
                    <h3>Login Here</h3>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" />
                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />
                    <button>Log In</button>
                </form>
            </>
        )
    }
}

export default withRouter(Login);