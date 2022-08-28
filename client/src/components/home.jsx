import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./nav";
import AllPosts from "./allPost";
import PostCreate from "./postCreate";
import { getAllPost } from "../redux/actions/actions";
export default function Home() {
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.userLogued);
    const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true);
        dispatch(getAllPost()).then(() => {
            setLoading(false);
        }
        );
    } , [dispatch]);

    function refreshPosts() {
        setLoading(true);
        dispatch(getAllPost()).then(() => {
            setLoading(false);
        }
        );
    }

    return (
        <div className="home-container">
            <Nav user={user.email} refreshPosts={refreshPosts} />
            <div className="home-content">
                <PostCreate />
            </div>
            <div className="home-posts">
                { loading ? <h1 className="loading" >Loading...</h1> : <AllPosts /> }
            </div>
        </div>
    );
}