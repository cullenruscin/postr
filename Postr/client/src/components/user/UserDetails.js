import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserDetailsById } from "../../modules/userProfileManager";

const UserDetails = ({ currentUser }) => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getUserDetailsById(id)
            .then(userData => {
                setUser(userData);
            })
    }, [id])

    const handleButtonClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleEditProfile = () => {
        // Perform the action you want when the "Edit Profile" option is clicked
        // For example, you can call your existing `editOnClick` function here
        editOnClick();
    };

    // Navigate to the Post Page when the post is clicked
    const editOnClick = (e) => {
        navigate(`/user/${id}/edit`);
    }

    if (user === null) {
        return <p>404 not found</p>;
    } else {
        return (
            <div className="card mt-1 no-shadow">
                <div className="card-content">
                    <div className="media is-flex-direction-column mb-3">
                        <div className="media-left">
                            <figure className="image is-square is-96x96 mb-4">
                                <img className="is-rounded" src={user.displayPicture} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4 has-text-weight-bold has-text-black">{user.fullName}
                                {currentUser === user.id && (
                                    <span>
                                        <div className={`dropdown ${showDropdown ? 'is-active' : ''}`}>
                                            <div className="dropdown-trigger">
                                                <button
                                                    className="button is-small is-light has-background-white"
                                                    aria-haspopup="true"
                                                    aria-controls="dropdown-menu"
                                                    onClick={handleButtonClick}
                                                >
                                                    <span className="icon">
                                                        <i className="material-icons-outlined">more_vert</i>
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                                <div className="dropdown-content">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={handleEditProfile}
                                                    >
                                                        Edit Profile
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                )}
                            </p>
                            <p className="subtitle is-6 has-text-grey">@{user.displayName}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{user.bio}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserDetails;