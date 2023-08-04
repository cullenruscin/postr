import React from "react";

const DeletePostModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="modal is-active">
                    <div className="modal-background" onClick={onCancel}></div>
                    <div className="modal-content">
                        <article className="message is-danger">
                            <div className="message-header">
                                <p>Warning</p>
                                <button className="delete" aria-label="delete" onClick={onCancel}></button>
                            </div>
                            <div className="message-body has-text-centered">
                                <p className="mb-4">Are you sure you want to delete this post?</p>
                                <div className="level">
                                    <button className="button is-danger level-item mr-3" onClick={onConfirm}>
                                        Delete
                                    </button>
                                    <button className="button is-light is-danger level-item ml-3" onClick={onCancel}>
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeletePostModal;