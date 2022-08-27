import React from "react";

export default function Post({ description, image }) {
  return (
    <div className="post-container">
      <div className="post-info">
        <h3>{description}</h3>
      </div>
      <img src={image} alt={description} />
      <div>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
}
