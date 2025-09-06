import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState = '';

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (_state, action: PayloadAction<string>) => action.payload,
        clearToken:() => initialState,
    }
})

export const {setToken, clearToken} = tokenSlice.actions;
export default tokenSlice.reducer;