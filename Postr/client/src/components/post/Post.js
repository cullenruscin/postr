import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TimeElapsed from "../helpers/TimeElapsed";
import { LikeButton } from "../buttons/LikeButton";
import ReplyButton from "../buttons/ReplyButton";
import { getPostDetails, deletePost } from "../../modules/postManager";

const Post = ({ post, currentUser, getPosts }) => {
    const [parentPost, setParentPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (post.parentId !== null) {
            getPostDetails(post.parentId)
                .then((parentPostData) => {
                    setParentPost(parentPostData);
                })
                .catch((error) => {
                    console.error("Error fetching parent post details:", error);
                });
        }
    }, [post.parentId]);

    // Navigate to the Post Page when the post is clicked
    const postOnClick = (e) => {
        navigate(`/post/${post?.id}`);
    }

    //Navigate to the Post Page of the parent when the link is clicked
    const parentPostOnClick = (e) => {
        e.stopPropagation();
        navigate(`/post/${post.parentId}`);
    };

    // Navigate to the User's profile when the username is clicked
    const userOnClick = (e) => {
        e.stopPropagation();
        navigate(`/user/${post?.userProfileId}`);
    }

    // Call the deletePost function from postManager with the post.id to soft delete the post
    const handleDeleteClick = () => {
        deletePost(post.id).then(() => getPosts());
    };

    return (
        <div className="box no-shadow mb-1" style={{ cursor: "pointer" }}>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="DisplayImage" />
                    </figure>
                </div>
                <div className="media-content ml-2">
                    <div className="content">
                        {post.parentId !== null && parentPost && (
                            <small className="has-text-grey">
                                Replying to{" "}
                                <a className="has-text-grey" onClick={(clickEvent) => parentPostOnClick(clickEvent)}>
                                    @{parentPost.userProfile?.displayName}
                                </a>
                            </small>
                        )}
                        <p>
                            <a onClick={(clickEvent) => userOnClick(clickEvent)}>
                                <strong>{post.userProfile?.fullName}</strong> <small className="has-text-grey">@{post.userProfile?.displayName} </small>
                            </a>
                            <small className="has-text-grey"> ∙ <TimeElapsed datetimeString={post.createDate} /></small>
                            <br />
                            {post.isDeleted ? (
                                <em className="has-text-grey">This post has been deleted</em>
                            ) : (
                                post.content
                            )}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <div className="level-item">
                                <LikeButton post={post} currentUser={currentUser} />
                            </div>
                            <div className="level-item">
                                <ReplyButton onclick={postOnClick} />
                            </div>
                            {currentUser === post.userProfileId && (
                                <div className="level-item">
                                    <button className="button is-small is-light has-background-white" onClick={handleDeleteClick}>
                                        <span className="icon">
                                            <i className="material-icons-outlined">delete</i>
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
};

export default Post;