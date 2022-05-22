import React from "react";
import SongEntry from "./SongEntry";
import { useSelector } from "react-redux";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

const SongList = () => {

    const songs = useSelector((state) => state.song);

    return (
        <main>
            <SortBar />
            <FilterBar />
            <ul>
                <li key="categories">
                    <span>Song Title - </span>
                    <span>Artist - </span>
                    <span>Genre - </span>
                    <span>Rating</span>
                </li>
                {songs.map(function (e) {
                    if (e.visible === false) {
                        return
                    } else {
                        return <SongEntry key={e.id} props={e} />
                    }
                })}
            </ul>
        </main>
    )


}

export default SongList