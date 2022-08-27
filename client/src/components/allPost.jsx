import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Post } from "./post";

export default function AllPosts() {
    const dispatch = useDispatch();
    const posts = [{
        description: "Post 1",
        image: "https://picsum.photos/200/300"
    }
    , {
        description: "Post 2",
        image: "https://picsum.photos/200/300"
    },
    {
        description: "Post 3",
        image: "https://picsum.photos/200/300"
    }];
    return  ( 
        <div className="all-posts-container">
            {
                posts.map(post => (
                    <Post key={post.description} description={post.description} image={post.image} />
                ))
            }
        </div>
    );
}
