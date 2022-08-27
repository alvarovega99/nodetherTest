import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../redux/actions/actions";
import { useNavigate } from 'react-router-dom'

export default function Nav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function logout() {
        dispatch(signOut());
        navigate('/')
    }
    return (
        <div className="nav-container">
            <div className="nav-item">
            <NavLink to="/" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Home</NavLink>   
            </div>
            <div className="nav-item">
                <h3>Alvaro Vega</h3>
                <button onClick={() => { logout() }}>Log Out</button>
            </div>
        </div>
    );
}