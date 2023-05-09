
import React from "react";
import { withRouter, Link } from "react-router";
import './Nav.scss';
import { MenuItem } from "./MenuItems";
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    tempUrl="";
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
                </ul>
            </nav>
            </>
        )
    }
}

// export default withRouter(Home);
export default Nav;