import React from "react";
import { updateDislikes, updateLikes } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
export default function Post({id, description, image, user, likes, dislikes}) {
  const dispatch = useDispatch();
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
        <span>{likes}</span>
        <span>{dislikes}</span>
      </div>
      <div className="like-dislike">
        <span class="material-symbols-outlined" onClick={ ()=>{ dispatch(updateDislikes(id))}}>thumb_up</span>
        <span class="material-symbols-outlined" onClick={ ()=>{ dispatch(updateLikes(id))}}>thumb_down</span>
      </div>
    </div> 
  );
}
