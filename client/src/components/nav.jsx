import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-item">
                <a href="/">Home</a>
            </div>
            <div className="nav-item">
                <button>Log Out</button>
                <h3>Alvaro Vega</h3>
            </div>
        </div>
    );
}