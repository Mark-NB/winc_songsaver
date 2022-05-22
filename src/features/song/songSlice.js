import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//manages array of song objects
export const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload)
        },
        deleteSong: (state, action) => {
            state.splice(state.findIndex((element) => element.id === action.payload), 1);
        },
        sortSongs: (state, action) => {
            if (action.payload === 'title') {
                state.sort((a, b) => (a.title > b.title) ? 1 : -1);
            } else if (action.payload === 'artist') {
                state.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
            } else {
                state.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
            }
        },
        filterSongsGenre: (state, action) => {
            state.forEach(element => {
                if (action.payload === 'none') {
                    element.visible = true;
                } else if (element.genre === action.payload) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            })
        },
        filterSongsRating: (state, action) => {
            state.forEach(element => {
                if (action.payload === 'none') {
                    element.visible = true;
                } else if (element.rating === action.payload) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            })
        }
    }
});

export const { addSong, deleteSong, sortSongs, filterSongsGenre, filterSongsRating } = songSlice.actions;
export default songSlice.reducer;