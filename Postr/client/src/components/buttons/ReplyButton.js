import React from "react";

const ReplyButton = ({ onclick }) => {
    return (
        <button
            className="button is-small is-light has-background-white"
            onClick={onclick}>
            <span className="icon">
                <i className="material-icons-outlined">reply</i>
            </span>
        </button >
    )
}

export default ReplyButton;