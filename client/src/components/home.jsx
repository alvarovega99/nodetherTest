import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "./nav";
import { AllPosts } from "./allPost";
import { PostCreate } from "./postCreate";

export default function Home() {
    return (
        <div className="home-container">
            <Nav />
            <div className="home-content">
                <PostCreate />
            </div>
            <div className="home-posts">
                <AllPosts />
            </div>
        </div>
    );
}