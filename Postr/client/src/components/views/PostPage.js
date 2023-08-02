import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostDetails from "../post/PostDetails";
import { getPostDetails, getPostsByParentId } from "../../modules/postManager";
import PostList from "../post/PostList";
import PostReplyForm from "../post/PostReplyForm";

const PostPage = ({ currentUser }) => {
    const { id } = useParams();
    const [parentPost, setParentPost] = useState({});
    const [childPosts, setChildPosts] = useState([]);

    // Fetch parent post details based on the 'id' parameter
    const getParentPost = () => {
        getPostDetails(id).then(parentPost => setParentPost(parentPost));
    };

    // Fetch child posts
    const getChildPosts = () => {
        getPostsByParentId(id).then(childPosts => setChildPosts(childPosts));
    };

    // Fetch post details when the 'id' parameter changes or on initial render
    useEffect(() => {
        getParentPost();
    }, [id]);

    useEffect(() => {
        getChildPosts();
    }, [id]);

    return (
        <div className="container is-max-desktop">
            <PostDetails currentUser={currentUser} post={parentPost} getPosts={getParentPost} />
            <PostReplyForm parentId={id} getPosts={getChildPosts} />
            <div className="ml-6">
                <PostList posts={childPosts} currentUser={currentUser} getPosts={getChildPosts} />
            </div>
        </div>
    )
};

export default PostPage;