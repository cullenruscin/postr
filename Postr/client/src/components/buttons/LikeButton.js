import { useEffect, useState } from "react";
import { createLike, deleteLike } from "../../modules/likeManager";

export const LikeButton = ({ post, currentUser }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likeCount);

    // Hook to update "isLiked" state based on "post.likes" array and the currently logged in user
    useEffect(() => {
        const userLiked = post.likes && post.likes.some((like) => like.userProfileId === currentUser);
        setIsLiked(userLiked);
    }, [post, currentUser]);

    const likeData = {
        postId: post.id,
        userProfileId: currentUser
    };

    const likeOnClick = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isLiked) {
            // Unlike the post
            setIsLiked(false);

            // Decrease the like count
            setLikeCount((prevCount) => Math.max(0, prevCount - 1));

            // Make an API request to unlike the post
            deleteLike(post.id, currentUser)
                .then(() => console.log("Post unliked successfully!"))
                .catch((error) => console.error("Failed to unlike the post:", error.message));
        } else {
            // Like the post
            setIsLiked(true);

            // Increase the like count
            setLikeCount((prevCount) => prevCount + 1);

            // Make an API request to like the post
            createLike(likeData)
                .then(() => console.log("Post liked successfully!"))
                .catch((error) => console.error("Failed to like the post:", error.message));
        }
    };

    return (
        <button
            className={`like-button button is-small is-light has-background-white ${isLiked ? 'has-text-danger' : ''}`}
            onClick={likeOnClick}>
            <span className="icon">
                {
                    isLiked
                        ? <i className="material-icons">favorite</i>
                        : <i className="material-icons-outlined">favorite_border</i>
                }
            </span>
        </button >
    );
}

export default LikeButton;
