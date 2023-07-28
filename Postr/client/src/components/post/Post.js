import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const navigate = useNavigate();

    const postOnClick = (e) => {
        navigate(`/post/${post.id}`)
    }

    return (
        <a className="post-page-link" onClick={(clickEvent) => postOnClick(clickEvent)}>
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
                                <strong>{post.userProfile?.fullName}</strong> <small>@{post.userProfile?.displayName}</small>
                                <br />
                                {post.content}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </a>
    );
};

export default Post;