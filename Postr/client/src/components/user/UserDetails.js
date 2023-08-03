import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserDetailsById } from "../../modules/userProfileManager";

const UserDetails = ({ currentUser }) => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getUserDetailsById(id)
            .then(userData => {
                setUser(userData);
            })
    }, [id])

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
                                    <span className="ml-2">
                                        <button className="button is-small is-light has-background-white" onClick={editOnClick}>
                                            <span className="icon">
                                                <i className="material-icons-outlined">edit</i>
                                            </span>
                                        </button>
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