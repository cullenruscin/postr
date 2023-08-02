import React, { useState, useEffect } from "react";
import { createPost } from "../../modules/postManager";

const PostForm = ({ getPosts }) => {
    const [content, setContent] = useState("");
    const [characterCount, setCharacterCount] = useState(0);

    // Determine if the Post button should be disabled
    const isPostButtonDisabled = characterCount > 256;

    // Update the character count whenever the 'content' state changes
    useEffect(() => {
        setCharacterCount(content.length);
    }, [content]);

    const createPostButtonOnClick = (e) => {
        e.preventDefault();

        const post = {
            content,
        };

        createPost(post).then(() => {
            setContent("");
            getPosts();
        });
    };

    return (
        <div className="container mt-1">
            <form className="box no-shadow">
                <fieldset className="field">
                    <textarea
                        className="textarea"
                        placeholder="What's happening?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </fieldset>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <button
                            onClick={createPostButtonOnClick}
                            className="button is-link level-item"
                            disabled={isPostButtonDisabled}
                        >
                            Post
                        </button>
                    </div>
                    <div className="level-right">
                        <div className="character-counter level-item">
                            <span className={characterCount > 256 ? "has-text-danger" : ""}>
                                {characterCount}/256
                            </span>
                        </div>
                    </div>
                </nav>
            </form>
        </div>
    );
};

export default PostForm;