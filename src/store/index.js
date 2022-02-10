import { configureStore } from "@reduxjs/toolkit";
import userSlice, { userCreators } from "./userSlice";
import messageSlice, { messageCreators } from "./messageSlice";

export const store = configureStore({
    reducer: {
        message: messageSlice,
        user: userSlice
    }
})

export const actionCreators = {
    ...userCreators,
    ...messageCreators
}