import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, setMessage } from "../redux/actions/actions";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
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
    dispatch(loginUser(state)).then((res) => {
      if (res.payload.message === "OK") {
        Swal.fire({
          title: "Success",
          text: "You have successfully logged in",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate('/')
        dispatch(setMessage());
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        })
        dispatch(setMessage());
      }
    })
  };

  return (
    <div className="login-centered">
        <div className="login-container">
            <h1>Login</h1>
            <input placeholder="Username" type="text" name="email" id="" value={state.email} onChange={(e) => handleChange(e)}/>
            <input placeholder="Password" type="password" name="password" id="" value={state.password} onChange={(e) => handleChange(e)}/>
            <button onClick={() => handleSubmit()}>Login</button>
            <button onClick={() => navigate('/register')}>Sing-up</button>
        </div>
    </div>
)
}
