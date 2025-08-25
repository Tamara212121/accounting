import {useState} from "react";
import {UpdateMode} from "../../utils/types.d";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword.tsx";


const UpdateUser = () => {
    const [updateMode, setUpdateMode ] = useState(UpdateMode.DEFAULT);
    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile close={() => setUpdateMode(UpdateMode.DEFAULT)} />
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