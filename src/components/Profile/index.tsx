import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";

const Profile = () => {
    return (
        <div>
            <ProfileData/>
            <button>Logout</button>
            <UpdateUser/>
            </div>
    );
};

export default Profile;