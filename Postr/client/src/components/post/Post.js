import React from "react";

const Post = ({ post }) => {
    return (
        <div className="box">
            {post.content}
        </div>
    );
};

export default Post;