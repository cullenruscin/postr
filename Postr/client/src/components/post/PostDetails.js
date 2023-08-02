import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../modules/postManager";
import Post from "./Post";

const PostDetails = ({ currentUser, post, getPosts }) => {


    // If the post is not found (null), display a 404 message
    if (post === null) {
        return <p>404 not found</p>;
    } else {
        // Check if the 'post.likes' property is available before rendering the Post component
        if (!post.likes) {
            return <></>;
        }
        return (
            <div className="mt-1">
                <Post post={post} currentUser={currentUser} getPosts={getPosts} />
            </div>
        );
    }
};

export default PostDetails;