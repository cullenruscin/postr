import { useState, useEffect } from "react";
import { getAllPosts } from "../../modules/postManager";
import PostList from "../post/PostList";
import PostForm from "../post/PostForm";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(posts => setPosts(posts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container is-max-desktop">
            <PostForm getPosts={getPosts} />
            <PostList posts={posts} />
        </div>
    );
};

export default HomePage;