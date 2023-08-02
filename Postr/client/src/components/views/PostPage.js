import PostDetails from "../post/PostDetails";

const PostPage = ({ currentUser }) => {
    return (
        <div className="container is-max-desktop">
            <PostDetails currentUser={currentUser} />
        </div>
    )
};

export default PostPage;