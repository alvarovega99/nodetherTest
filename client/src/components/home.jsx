import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import AllPosts from "./AllPosts";
import PostCreate from "./PostCreate";
import { getAllPost } from "../redux/actions/actions";
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPost());
    } , [dispatch]);

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