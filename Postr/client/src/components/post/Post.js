import React from "react";

const Post = ({ post }) => {
    return (
        <div class="box no-shadow mb-2">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="DisplayImage" />
                    </figure>
                </div>
                <div class="media-content ml-2">
                    <div class="content">
                        <p>
                            <strong>{post.userProfile.fullName}</strong> <small>@{post.userProfile.displayName}</small> - <small>0m</small>
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