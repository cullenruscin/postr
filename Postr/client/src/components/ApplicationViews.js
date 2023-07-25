import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./post/PostList";

const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<PostList />} />
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