import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetailsById } from "../../modules/userProfileManager";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserDetailsById(id)
            .then(userData => {
                setUser(userData)
            })
    }, [id])

    if (user === null) {
        return <p>404 not found</p>
    } else {
        return (
            <div class="card mt-1 no-shadow">
                <div class="card-content">
                    <div class="media is-flex-direction-column mb-3">
                        <div class="media-left">
                            <figure class="image is-96x96 mb-4">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4 has-text-weight-bold">{user.fullName}</p>
                            <p class="subtitle is-6 has-text-grey">@{user.displayName}</p>
                        </div>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                </div>
            </div>
        )
    }
};

export default UserDetails;