import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {clearToken} from "../../features/token/tokenSlice.ts";
import {useFetchUserQuery} from "../../features/api/accountApi.ts";

const Profile = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.token);
    const {data, isLoading} = useFetchUserQuery(token);

    const handleClickLogOut = () => {
        dispatch(clearToken());
    }

    if (isLoading) {
        return  <p>Loading...</p>;
    }
    if (!data){
        return <p>No data</p>
    }

    return (
        <div>
            <ProfileData data={data}/>
            <button onClick={handleClickLogOut}>Logout</button>
            <UpdateUser login = {data.login}/>
            </div>
    );
};

export default Profile;