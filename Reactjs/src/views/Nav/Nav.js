
import React from "react";
import { withRouter, Link } from "react-router";
import './Nav.scss';
import { MenuItem, LoginItem } from "./MenuItems";

import axios from 'axios'
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    tempUrl = "";

    async componentDidMount() {

        // check login
        let checkAuth = await axios.get(
            `http://localhost:3001/user`,
            { withCredentials: true }
        );
        let user = checkAuth.data.user;
        console.log(user)
        if (!user) {
            this.setState({ login: false })
            console.log("Not login: ", this.state.login)
        } else {
            this.setState({ login: true })
            console.log(this.state.login)
            let name = user.fullname;
            this.setState({ name })
        }
        console.log(this.state.login)
    }

    render() {

        return (
            <>
                <nav className="NavbarItems">
                    <a href="/Home">
                        <h1 className="navbar-logo"> StuEng </h1>
                    </a>
                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItem.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        <i className={item.icon}></i>{item.title}
                                    </a>
                                </li>
                            );
                        })}

                        {/* check login */}
                        {this.state.login ?
                            <a className={LoginItem[1].cName} href={LoginItem[1].url}>
                                <i className={LoginItem[1].icon}></i> {this.state.name}
                            </a>
                            :
                            <a className={LoginItem[0].cName} href={LoginItem[0].url}>
                                <i className={LoginItem[0].icon}></i> {LoginItem[0].title}
                            </a>
                        }

                    </ul>
                </nav>
            </>
        )
    }
}

// export default withRouter(Home);
export default Nav;