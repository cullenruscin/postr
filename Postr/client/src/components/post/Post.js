import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const navigate = useNavigate();

    const postOnClick = (e) => {
        navigate(`/post/${post.id}`);
    }

    const userOnClick = (e) => {
        e.stopPropagation();
        navigate(`/user/${post.userProfileId}`);
    }

    return (
        <div className="box no-shadow mb-1" onClick={(clickEvent) => postOnClick(clickEvent)} style={{ cursor: "pointer" }}>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="DisplayImage" />
                    </figure>
                </div>
                <div className="media-content ml-2">
                    <div className="content">
                        <p>
                            <a onClick={(clickEvent) => userOnClick(clickEvent)}>
                                <strong>{post.userProfile?.fullName}</strong> <small>@{post.userProfile?.displayName}</small>
                            </a>
                            <br />
                            {post.content}
                        </p>
                    </div>
                </div>
            </article >
        </div >
    );
};

export default Post;