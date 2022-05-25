import { createSlice } from "@reduxjs/toolkit";

export const saveInfoSlice = createSlice({
    name: "saveInfo",
    initialState: {
        author: "Anonymous",
        date: new Date(),
    },
    reducers: {
        setAuthor: (state, action) => {
            state.author = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
    },
});

export const { setAuthor, setDate } = saveInfoSlice.actions;
export default saveInfoSlice.reducer;
