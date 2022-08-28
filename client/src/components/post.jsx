import React, { useState }from "react";
import { updateDislikes, updateLikes, getPostById } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
export default function Post({id, description, image, user, likes, dislikes}) {
  const dispatch = useDispatch();
  const [likesState, setLikesState] = useState(likes);
  const [dislikeState, setdislikeState] = useState(dislikes);
  const handleLikes = () => {
    dispatch(updateLikes(id)).then((res) => {
      if (res.payload.message === "OK") {
        dispatch(getPostById(id)).then((res) => {
          setLikesState(res.payload.data.likes);
        })
      } else {
        alert("Something went wrong");
      }
    })
  }
  const handleDislikes = () => {
    dispatch(updateDislikes(id)).then((res) => {
      if (res.payload.message === "OK") {
        dispatch(getPostById(id)).then((res) => {
          setdislikeState(res.payload.data.dislikes);
          console.log(res.payload);
        })
      } else {
        alert("Something went wrong");
      }
    })
  }
  return (
    <div className="post-container">
      <span>{user}</span>
      <div className="post-info">
        <h3>{description}</h3>
      </div>
      <div className="cont-image">
        <img src={image} alt={description} />
      </div>
      <div className="like-dislike">
        <span>{likesState}</span>
        <span>{dislikeState}</span>
      </div>
      <div className="like-dislike">
        <span class="material-symbols-outlined" onClick={ ()=>{ handleLikes() }}>thumb_up</span>
        <span class="material-symbols-outlined" onClick={ ()=>{ handleDislikes()}}>thumb_down</span>
      </div>
    </div> 
  );
}
