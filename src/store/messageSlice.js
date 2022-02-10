import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage(state, action) {
            state.push(
                {
                    id: Date.now(),
                    body: action.payload
                }
            )
        },
        deleteMessage(state, action) {
           return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const messageCreators = messageSlice.actions

export default messageSlice.reducer