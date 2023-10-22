import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import { BASE_API_URI } from '../../utils/api';
import Secure from '../../global/Secure';

// Retrieve the user permissions from local storage
let userPermissions = Secure.get('user_permissions')
if (userPermissions === null || userPermissions === 'undefined') {
    userPermissions = "[]"
}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        user: Secure.get("user"),
        token: Secure.get("token"),
        userPermissions: userPermissions,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUserPermissions: (state, action) => {
            state.userPermissions = action.payload
        },
        logOutLocally: (state) => {
            Secure.wipe()
        }
    },
});

export const { setUser, setToken, logOutLocally, setUserPermissions } = authenticationSlice.actions;
export default authenticationSlice.reducer;


export const apiSlice = createApi({
    reducerPath: 'auth-api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URI
    }),
    endpoints(builder) {
        return {
            loginUser: builder.mutation({
                query(body) {
                    return {
                        url: `/auth/login/`,
                        method: 'POST',
                        body,
                    }
                },
            }),
            registerUser: builder.mutation({
                query(body) {
                    return {
                        url: `/auth/register/`,
                        method: 'POST',
                        body,
                    }
                },
            }),
        };
    },
});

export const { useLoginUserMutation, useRegisterUserMutation } = apiSlice;