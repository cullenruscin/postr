import React, { useEffect } from "react";
import Post from "./Post";

const PostList = ({ posts, currentUser, getPosts }) => {
    // Sort the posts array by the createDate in descending order.
    const sortedPosts = posts.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

    return (
        <div className="block mt-1">
            {sortedPosts.map(post => (
                <Post post={post} key={post.id} currentUser={currentUser} getPosts={getPosts} />
            ))}
        </div>
    );
};

export default PostList;
