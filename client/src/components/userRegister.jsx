import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserRegister() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You are logged in as ${state.email}`);
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        name="email"
        id=""
        value={state.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="password"
        id=""
        value={state.password}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => handleSubmit()}>Sing-up</button>
    </div>
  );
}
