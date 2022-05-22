import React from "react";
import SongEntry from "./SongEntry";
import { useSelector } from "react-redux";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

const SongList = () => {

    const songs = useSelector((state) => state.song);

    return (
        <main className="songlist">
            <SortBar />
            <FilterBar />
            <ul className="songlist__list">
                <li className="songlist__categories" key="categories">
                    <span>Song Title</span>
                    <span>Artist</span>
                    <span>Genre</span>
                    <span>Rating</span>
                    <span>Delete</span>
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