import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {

    const sortedPosts = posts.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

    return (
        <div className="block mt-1">
            {sortedPosts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
