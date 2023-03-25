
import React from "react";
import './Login.scss';

class Login extends React.Component {
    handleLogin = () =>{

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
                <form onClick={this.handleLogin}>
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

export default Login;