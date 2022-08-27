import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/actions";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

export default function UserRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(registerUser(state)).then((res) => {
      if (res.payload.message === "OK") {
        Swal.fire({
          title: "Success",
          text: "You have successfully registered",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate('/')
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    });
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
      <button onClick={() =>navigate('/')}>LogIn</button>
    </div>
  );
}
