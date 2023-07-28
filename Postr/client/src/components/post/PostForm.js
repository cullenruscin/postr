import { useState, useEffect } from "react";
import { AddPost } from "../../modules/postManager";
import { useNavigate } from "react-router-dom";

const PostForm = ({ getPosts }) => {
    const navigate = useNavigate();
    const [content, setContent] = useState("");

    const createPostButtonOnClick = (e) => {
        e.preventDefault();

        const post = {
            content,
        };

        AddPost(post).then(() => {
            setContent("");
            getPosts();
        })
    }

    return (
        <div className="container mt-2">
            <form className="box no-shadow">
                <fieldset className="field">
                    <textarea
                        type="textarea"
                        className="textarea"
                        placeholder="What's happening?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </fieldset>
                <button
                    onClick={(clickEvent) => createPostButtonOnClick(clickEvent)}
                    className="button is-link"
                >Post</button>
            </form>
        </div>
    );
};

export default PostForm;