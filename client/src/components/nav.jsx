import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../redux/actions/actions";
export default function Nav({ user }) {
    const dispatch = useDispatch();
    function logout() {
        dispatch(signOut()).then(() => {
            window.location.reload();
        }
        );
    }
    return (
        <div className="nav-container">
            <div className="nav-item">
            <NavLink to="/" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Home</NavLink>   
            </div>
            <div className="nav-item">
                <h3>{user}</h3>
                <button onClick={() => { logout() }}>Log Out</button>
            </div>
        </div>
    );
}