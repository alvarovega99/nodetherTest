import React from "react";
import { useSelector } from "react-redux";
import Post from "./post";

export default function AllPosts() {
    const posts = useSelector((state) => state.allPosts);
    return  ( 
        <div className="all-posts-contaner-centered">
            <div className="all-posts-container">
                {
                    posts?.map(post => (
                        <Post key={post.description} description={post.description} image={post.image} id={post._id} user={post.user.email} likes={post.likes} dislikes={post.dislikes}/>
                    ))
                }
            </div>
        </div>
    );
}
