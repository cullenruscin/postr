import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getAllPosts } from "../../modules/postManager";

const PostList = ({ posts }) => {
    return (
        <div className="block mt-2">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;