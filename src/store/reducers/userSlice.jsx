import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        tasks: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setTask: (state, action) => {
            state.tasks = action.payload;
        },
        setCreateTask: (state, action) => {
            state.tasks = state.tasks.push(action.payload);
        }
    }
});

export const { setUser, setTask, setCreateTask } = userSlice.actions;
export default userSlice.reducer;