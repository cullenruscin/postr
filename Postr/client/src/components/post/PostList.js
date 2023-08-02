import React from "react";
import Post from "./Post";

const PostList = ({ posts, currentUser }) => {
    // Sort the posts array by the createDate in descending order.
    const sortedPosts = posts.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

    return (
        <div className="block mt-1">
            {sortedPosts.map(post => (
                <Post post={post} key={post.id} currentUser={currentUser} />
            ))}
        </div>
    );
};

export default PostList;
