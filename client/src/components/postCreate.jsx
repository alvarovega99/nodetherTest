import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getAllPost } from "../redux/actions/actions";
import Swal from "sweetalert2";

export default function Login() {
  const user = useSelector((state) => state.userLogued);
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
    const obj = {
      description: state.description,
      image: state.image,
      userId: user.id,
    };
    dispatch(createPost(obj)).then((res) => {
      if (res.payload.message === "OK") {
        Swal.fire({
          title: "Success",
          text: "You have successfully created a post",
          icon: "success",
          confirmButtonText: "OK",
        });
        dispatch(getAllPost());
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    });
    setState({
      description: "",
      image: "",
    });
  };

  return (
    <div className="create-post-centered">
      <div className="create-post-container">
        <h1>Crear publicación</h1>
        <div>
          <textarea
          className="description"
          name="description"
          id=""
          placeholder="Description..."
          value={state.description}
          onChange={(e) => handleChange(e)}
        ></textarea>
        </div>
        <div>
        <input
          placeholder="Image..."
          type="text"
          name="image"
          id="image"
          value={state.password}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => handleSubmit()}>Create Post</button>
        </div>
      </div>
    </div>
  );
}
