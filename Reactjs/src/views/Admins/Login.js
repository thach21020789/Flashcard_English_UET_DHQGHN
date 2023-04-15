
import React from "react";
import './Login.scss';
import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import axios from "axios";
class Login extends React.Component {
    handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const { username, password } = this.state;
        console.log({ username, password })
        axios.post('http://localhost:3001/login', {
            "email" : username,
            "password" : password
        })
        
        console.log(axios.get("http://localhost:3001/check-authenticate"));
    }

    handleInputChange = (event) => {
        const { id, value } = event.target;
        this.setState({
          [id]: value
        });
      }

    state = {
        userName: "Thach",
        passWord: "123"
    }

    render() {
        return (
            <>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form onSubmit={this.handleLogin}>
                    <h3>Login Here</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" value={this.state.username} onChange={this.handleInputChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" value={this.state.password} onChange={this.handleInputChange} />
                    <button type="submit">Log In</button>
                </form>
            </>
        )
    }
}

export default withRouter(Login);