import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../modules/postManager";
import Post from "./Post";

const PostDetails = () => {
    const { id } = useParams(),
        [post, setPost] = useState({});

    const getPost = () => {
        getPostDetails(id).then(post => setPost(post));
    };

    useEffect(() => {
        getPost();
    }, []);

    if (post === null) {
        return <p>404 not found</p>
    } else {
        return (
            <div className="mt-2">
                <Post post={post} />
            </div>
        )
    }
};

export default PostDetails;