import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../user/UserDetails";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";
import { getUserPosts } from "../../modules/postManager";

const ProfilePage = ({ currentUser }) => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [showPostForm, setShowPostForm] = useState(false);

    const getPosts = () => {
        getUserPosts(id).then(posts => setPosts(posts));
    };

    useEffect(() => {
        getPosts();
    }, [id]);

    useEffect(() => {
        setShowPostForm(currentUser === parseInt(id));
    }, [currentUser, id]);

    return (
        <div className="container is-max-desktop">
            <UserDetails currentUser={currentUser} />
            {showPostForm ? <PostForm getPosts={getPosts} /> : null}
            <PostList posts={posts} currentUser={currentUser} getPosts={getPosts} />
        </div>
    );
};

export default ProfilePage;