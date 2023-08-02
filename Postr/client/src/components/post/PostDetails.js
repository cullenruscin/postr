import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../modules/postManager";
import Post from "./Post";

const PostDetails = ({ currentUser }) => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    // Fetch post details based on the 'id' parameter
    const getPost = () => {
        getPostDetails(id).then(post => setPost(post));
    };

    // Fetch post details when the 'id' parameter changes or on initial render
    useEffect(() => {
        getPost();
    }, [id]);

    // If the post is not found (null), display a 404 message
    if (post === null) {
        return <p>404 not found</p>;
    } else {
        // Check if the 'post.likes' property is available before rendering the Post component
        if (!post.likes) {
            return <></>;
        }
        return (
            <div className="mt-1">
                <Post post={post} currentUser={currentUser} />
            </div>
        );
    }
};

export default PostDetails;