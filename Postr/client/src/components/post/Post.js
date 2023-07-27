import React from "react";

const Post = ({ post }) => {
    return (
        <div className="box no-shadow mb-2">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="DisplayImage" />
                    </figure>
                </div>
                <div className="media-content ml-2">
                    <div className="content">
                        <p>
                            <strong>{post.userProfile.fullName}</strong> <small>@{post.userProfile.displayName}</small>
                            <br />
                            {post.content}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Post;