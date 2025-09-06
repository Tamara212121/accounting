import {useState} from "react";
import {UpdateMode} from "../../utils/types.d";
import EditProfile from "./EditProfile.tsx";
import ChangePassword from "./ChangePassword.tsx";

interface Props {
    login: string;
}

const UpdateUser = ({login}: Props) => {
    const [updateMode, setUpdateMode ] = useState(UpdateMode.DEFAULT);

    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile login={login} close={() => setUpdateMode(UpdateMode.DEFAULT)} />
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword close={() => setUpdateMode(UpdateMode.DEFAULT)} />
        default:
            return (<div>
                <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit Profile</button>
                <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change Password</button>
            </div>)
    }

};

export default UpdateUser;