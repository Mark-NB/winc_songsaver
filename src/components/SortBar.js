import React from "react";
import { useDispatch } from "react-redux";
import { sortSongs } from "../features/song/songSlice";

const SortBar = () => {

    const dispatch = useDispatch()

    return (
        <section className="songlist__sortbar">
            <button onClick={() => dispatch(sortSongs('title'))}>Sort by title</button>
            <button onClick={() => dispatch(sortSongs('artist'))}>Sort by artist</button>
            <button onClick={() => dispatch(sortSongs('rating'))}>Sort by rating</button>
        </section>
    )
}

export default SortBar;