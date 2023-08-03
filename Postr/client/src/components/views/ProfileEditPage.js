import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserUpdateForm from "../user/UserUpdateForm";
import { getUserDetailsById } from "../../modules/userProfileManager";

const ProfileEditPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserDetailsById(id)
            .then(userData => {
                setUser(userData);
            })
    }, [id])

    return (
        <div className="container is-max-desktop">
            <UserUpdateForm user={user} />
        </div>
    );
};

export default ProfileEditPage;