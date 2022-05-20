import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload)
        },
        deleteSong: (state) => {

        }
    }
});

export const { addSong, deleteSong } = songSlice.actions;
export default songSlice.reducer;