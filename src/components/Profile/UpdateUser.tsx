import {useState} from "react";
import {UpdateMode} from "../../utils/types";
import EditProfile from "./EditProfile";


const UpdateUser = () => {
    const [updateMode, setUpdateMode ] = useState(UpdateMode.DEFAULT);
    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile close={() => setUpdateMode(UpdateMode.DEFAULT)} />
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword/>
        default:
            return (<div>
                <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit Profile</button>
                <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change Password</button>
            </div>)
    }

};

export default UpdateUser;