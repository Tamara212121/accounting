import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";
interface ChangePasswordProps {
    close: () => void;
}
const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const dispatch = useAppDispatch();

    const handleClickSave = () => {
        if (newPassword === passwordConfirm) {
            dispatch(changePassword(newPassword));
            close();
        }else {
            alert('Password doesn\'t match');
        }
    }
    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setPasswordConfirm('');
    }
    return (
        <>
            <label>Old password:
            <input
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}/>
            </label>
            <label>New password:
            <input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}/>
            </label>
            <label>Confirm password:
                <input
                type= "password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;