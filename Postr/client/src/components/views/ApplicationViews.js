import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProfilePage from "./ProfilePage";

const ApplicationViews = ({ isLoggedIn, role }) => {
    return (
        <main>
            <Routes>
                <Route path="/" >
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="post/:id" element={<PostPage />} />
                    <Route path="user/:id" element={<ProfilePage />} />
                </Route>
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Routes>
        </main >
    );
};

export default ApplicationViews;