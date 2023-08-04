import React, { useState, useEffect } from "react";
import { addTagsToPost, createPost } from "../../modules/postManager";
import { getAllTags } from "../../modules/tagManager";

const PostReplyForm = ({ parentId, getPosts }) => {
    const [content, setContent] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        getAllTags()
            .then(tags => setTags(tags))
    }, [])

    // Determine if the Post button should be disabled
    const isPostButtonDisabled = characterCount > 256 || selectedTags.length === 0;

    // Update the character count whenever the 'content' state changes
    useEffect(() => {
        setCharacterCount(content.length);
    }, [content]);

    const createPostButtonOnClick = (e) => {
        e.preventDefault();

        const post = {
            content,
            parentId: parentId
        };

        createPost(post)
            .then((postRes) => {
                addTagsToPost(postRes.id, selectedTags)
            })
            .then(() => {
                setContent("");
                getPosts();
                setSelectedTags([]);
            });
    };

    const handleTagChange = (e, tagId) => {
        if (e.target.checked) {
            const selectedTagsCopy = [...selectedTags]
            selectedTagsCopy.push(parseInt(e.target.value));
            setSelectedTags(selectedTagsCopy);
        } else {
            const selectedTagsCopy = [...selectedTags]
            selectedTagsCopy.pop(parseInt(e.target.value));
            setSelectedTags(selectedTagsCopy);
        }
    }

    return (
        <div className="container mt-1">
            <form className="box no-shadow">
                <fieldset className="field">
                    <textarea
                        className="post textarea"
                        placeholder="Post your reply!"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </fieldset>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <button
                            onClick={createPostButtonOnClick}
                            className="btn button is-black is-rounded level-item"
                            disabled={isPostButtonDisabled}
                        >
                            Reply
                        </button>
                        <fieldset className="field level-item">
                            {tags.map((tag) => (
                                <label className="checkbox ml-4" key={tag.id}>
                                    <input
                                        type="checkbox"
                                        className="mr-1"
                                        value={tag.id}
                                        checked={selectedTags.includes(tag.id)}
                                        onChange={(e) => handleTagChange(e, tag.id)}
                                    />
                                    {tag.name}
                                </label>
                            ))}
                        </fieldset>
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

export default PostReplyForm;