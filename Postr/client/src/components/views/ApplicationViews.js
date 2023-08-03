import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProfilePage from "./ProfilePage";
import ProfileEditPage from "./ProfileEditPage";

const ApplicationViews = ({ isLoggedIn, currentUser }) => {
    return (
        <main >
            <Routes>
                <Route path="/" >
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="home" element={isLoggedIn ? <HomePage currentUser={currentUser} /> : <Navigate to="/login" />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="post/:id" element={<PostPage currentUser={currentUser} />} />
                    <Route path="user/:id" element={<ProfilePage currentUser={currentUser} />} />
                    <Route path="user/:id/edit" element={<ProfileEditPage currentUser={currentUser} />} />
                </Route>
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Routes>
        </main >
    );
};

export default ApplicationViews;