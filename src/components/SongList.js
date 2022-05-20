import React from "react";
import SongEntry from "./SongEntry";
import { useSelector } from "react-redux";

const SongList = () => {

    const songs = useSelector((state) => state.song);

    return (
        <main>
            <ul>
                <li key="categories">
                    <span>Song Title - </span>
                    <span>Artist - </span>
                    <span>Genre - </span>
                    <span>Rating</span>
                </li>
                {songs.map(function (e) {
                    return <SongEntry key={e.id} props={e} />
                })}
            </ul>
        </main>
    )


}

export default SongList