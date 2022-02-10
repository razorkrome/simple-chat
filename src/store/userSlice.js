import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    username: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth(state, action) {
            console.log('Zashel')
            state = {
                isAuth: true,
                username: action.payload
            }
            console.log(state)
        }
    }
})

export const userCreators = userSlice.actions

export default userSlice.reducer