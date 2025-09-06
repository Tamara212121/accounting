import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {useRegisterUserMutation} from "../../features/api/accountApi.ts";
import {setToken} from "../../features/token/tokenSlice.ts";
import {createToken} from "../../utils/constants.ts";

const SignUp = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();
    const [registerUser] = useRegisterUserMutation();

    const handleClickSignUp = async () => {
        try {
           const data = await registerUser({login, password, firstName, lastName}).unwrap();
           dispatch(setToken(createToken(data.login, password)));
        }catch (e){
            console.log('registration error', e)
        }
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    return (
        <>
            <label>Login:
                <input type="text"
                       onChange={e => setLogin(e.target.value)}
                       value={login}/>
            </label>
            <label>Password
                <input type="password"
                       onChange={e => setPassword(e.target.value)}
                       value={password}/>
            </label>
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
            <button onClick={handleClickSignUp}>Sign up</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default SignUp;