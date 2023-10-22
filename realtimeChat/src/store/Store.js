import { configureStore } from "@reduxjs/toolkit";
import Authentication, { apiSlice } from "../features/authentication/Authentication";

export const store = configureStore({
    reducer: {
        authentication: Authentication,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(apiSlice.middleware);
    },
});
