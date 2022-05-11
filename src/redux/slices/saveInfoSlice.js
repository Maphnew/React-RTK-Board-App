import { createSlice } from "@reduxjs/toolkit";

export const saveInfoSlice = createSlice({
    name: "saveInfo",
    initialState: {
        saveInfo: {
            author: "Anonymous",
            date: new Date(),
        },
    },
    reducers: {
        setAuthor: (state, action) => {
            state.saveInfo.author = action.payload;
        },
        setDate: (state, action) => {
            state.saveInfo.date = action.payload;
        },
    },
});

export const { setAuthor, setDate } = saveInfoSlice.actions;
export default saveInfoSlice.reducer;
