import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {updateUser} from "../../features/api/accountApi.ts";

interface EditProfileProps {
    close: () => void;
}

const EditProfile = ({close}: EditProfileProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();

    const handleClickSave = () => {
        dispatch(updateUser({firstName,lastName}));
        close();
    }

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }
    return (
        <>

            <label>First Name:
                <input type="text"
                       onChange={e => setFirstName(e.target.value)}
                       value={firstName}/>
            </label>

            <label>Last Name:
                <input type="text"
                       onChange={e => setLastName(e.target.value)}
                       value={lastName}/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;