import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PostList from "./post/PostList";
import Login from "./auth/Login";

const ApplicationViews = ({ isLoggedIn, role }) => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={isLoggedIn ? <PostList /> : <Navigate to="/login" />} />
                <Route path="login" element={<Login />} />
                <Route path="posts">
                    <Route index element={<PostList />} />
                    <Route path="new" element={<p>TODO: Make Post Form component</p>} />
                    <Route path=":id" element={<p>TODO: Make Post Details component</p>} />
                </Route>
            </Route>
            <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Routes>
    );
};

export default ApplicationViews;