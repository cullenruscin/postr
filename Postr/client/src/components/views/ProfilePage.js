import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../user/UserDetails";
import PostList from "../post/PostList";
import { getAllUserPosts } from "../../modules/postManager";

const ProfilePage = () => {

    const { id } = useParams();

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllUserPosts(id).then(posts => setPosts(posts));
    };

    useEffect(() => {
        getPosts();
    }, [id]);

    return (
        <div className="container is-max-desktop">
            <UserDetails />
            <PostList posts={posts} />
        </div>
    )
};

export default ProfilePage;