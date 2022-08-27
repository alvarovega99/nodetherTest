import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    description: "",
    image: "",
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
      <h1>Login</h1>
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        value={state.description}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <input
        type="text"
        name="image"
        id="image"
        value={state.password}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => handleSubmit()}>Create Post</button>
    </div>
  );
}
