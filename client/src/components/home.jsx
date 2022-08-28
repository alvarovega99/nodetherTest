import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./nav";
import AllPosts from "./allPosts";
import PostCreate from "./postCreate";
import { getAllPost } from "../redux/actions/actions";
export default function Home() {
    const user = useSelector((state) => state.userLogued);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPost());
    } , [dispatch]);

    return (
        <div className="home-container">
            <Nav user={user.email} />
            <div className="home-content">
                <PostCreate />
            </div>
            <div className="home-posts">
                <AllPosts />
            </div>
        </div>
    );
}