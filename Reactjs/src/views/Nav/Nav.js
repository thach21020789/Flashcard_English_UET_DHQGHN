import React from "react";
import './Nav.scss';
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div class="topnav">
                <NavLink to="/Home" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/Flashcard" activeClassName="active" exact={true}>Flashcard</NavLink>
                <NavLink to="/MiniGame" activeClassName="active" exact={true}>MiniGame</NavLink>
                <NavLink to="/Search" activeClassName="active" exact={true}>Search</NavLink>
            </div>
        )
    }
}

export default Nav;