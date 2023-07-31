import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../modules/postManager";
import Post from "./Post";

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    const getPost = () => {
        getPostDetails(id).then(post => setPost(post));
    };

    useEffect(() => {
        getPost();
    }, [id]);

    if (post === null) {
        return <p>404 not found</p>
    } else {
        return (
            <div className="mt-1">
                <Post post={post} />
            </div>
        )
    }
};

export default PostDetails;