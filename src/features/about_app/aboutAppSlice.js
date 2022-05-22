import { createSlice } from "@reduxjs/toolkit";

const initialState = [false];

//manages a simple true or false to switch between app and about
export const aboutAppSlice = createSlice({
    name: "aboutApp",
    initialState,
    reducers: {
        toggleAboutApp: (state) => {
            state[0] = !state[0];
        }
    }
});

export const { toggleAboutApp } = aboutAppSlice.actions;
export default aboutAppSlice.reducer;