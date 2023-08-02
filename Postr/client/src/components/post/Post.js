import React from "react";
import { useNavigate } from "react-router-dom";
import TimeElapsed from "../helpers/TimeElapsed";
import { LikeButton } from "../buttons/LikeButton";

const Post = ({ post, currentUser }) => {
    const navigate = useNavigate();

    // Navigate to the Post Page when the post is clicked
    const postOnClick = (e) => {
        navigate(`/post/${post?.id}`);
    }

    // Navigate to the User's profile when the username is clicked
    const userOnClick = (e) => {
        e.stopPropagation();
        navigate(`/user/${post?.userProfileId}`);
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
                                <strong>{post.userProfile?.fullName}</strong> <small>@{post.userProfile?.displayName} </small>
                            </a>
                            <small className="has-text-grey">∙ <TimeElapsed datetimeString={post.createDate} /></small>
                            <br />
                            {post.content}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <LikeButton post={post} currentUser={currentUser} />
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
};

export default Post;