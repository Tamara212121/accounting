import type {UserData, UserProfile, UserRegister} from "../../utils/types";
import {base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {RootState} from "../../app/store.ts";

export const accountApi = createApi({
    reducerPath: "account",
    tagTypes: ["profile"],
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
        prepareHeaders: (headers, {getState, endpoint}) => {
            if (endpoint === 'updateUser') {
                const token = (getState() as RootState).token;
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    endpoints: builder => ({
        registerUser: builder.mutation<UserProfile, UserRegister>({
            query: user => ({
                url: '/account/register',
                method: 'POST',
                body: user
            })
        }),
        fetchUser: builder.query<UserProfile, string>({
            query: token => ({
                url: '/account/login',
                method: 'POST',
                headers: {
                    Authorization: token
                }
            }),
            providesTags: ['profile']
        }),
        updateUser: builder.mutation<UserProfile, { user: UserData, login: string }>({
            query: ({user, login}) => ({
                url: `/account/user/${login}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['profile']
        }),
        changePassword: builder.mutation<void, { newPassword: string, token: string }>({
            query: ({newPassword, token}) => ({
                url: '/account/password',
                method: 'PATCH',
                headers: {
                    Authorization: token,
                    'X-Password': newPassword
                }
            }),
            invalidatesTags: ['profile']
        })
    })
})

export const {useRegisterUserMutation, useFetchUserQuery, useLazyFetchUserQuery, useUpdateUserMutation, useChangePasswordMutation} = accountApi;