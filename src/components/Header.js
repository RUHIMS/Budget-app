import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <div>
        <h1>Your Budget</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <br />
        <NavLink to="/create" activeClassName="is-active">Create Exp</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Exp</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>

);

export default Header;

