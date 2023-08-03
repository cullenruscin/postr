import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TimeElapsed from "../helpers/TimeElapsed";
import { LikeButton } from "../buttons/LikeButton";
import ReplyButton from "../buttons/ReplyButton";
import { getPostDetails, deletePost } from "../../modules/postManager";
import DeletePostModal from "../helpers/DeletePostModal";

const Post = ({ post, currentUser, getPosts }) => {
    const [parentPost, setParentPost] = useState(null);
    const navigate = useNavigate();

    //This is for the modal for deleting a post
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        navigate(`/post/${post.id}`);
    }

    //Navigate to the Post Page of the parent when the link is clicked
    const parentPostOnClick = (e) => {
        e.stopPropagation();
        navigate(`/post/${post.parentId}`);
    };

    // Navigate to the User's profile when the username is clicked
    const userOnClick = (e) => {
        e.stopPropagation();
        navigate(`/user/${post.userProfileId}`);
    }

    // Call the deletePost function from postManager with the post.id to soft delete the post
    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    // Function to handle the actual post deletion after user confirms in the modal
    const handlePostDelete = () => {
        deletePost(post.id)
            .then(() => {
                setIsModalOpen(false);
                getPosts();
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };

    return (
        <div className="box no-shadow mb-1" style={{ cursor: "pointer" }}>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-square is-48x48">
                        <img className="is-rounded" src={post.userProfile?.displayPicture} alt="DisplayImage" />
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
                                <span className="has-text-grey level-left mt-2">
                                    <span class="material-icons-outlined mr-1 ">error_outline</span>This post has been deleted
                                </span>
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

            <DeletePostModal isOpen={isModalOpen} onCancel={() => setIsModalOpen(false)} onConfirm={handlePostDelete} />

        </div>


    );
};

export default Post;