import React from "react";
import { useDispatch } from "react-redux";
import { deleteSong } from "../features/song/songSlice";

const SongEntry = (props) => {

    const dispatch = useDispatch()

    //delete logic based on item id
    const deleteEntry = (id) => {
        console.log(id);
        dispatch(deleteSong(id));
    }

    return (
        <li className="songlist__entry">
            <span>{props.props.title}</span>
            <span>{props.props.artist}</span>
            <span>{props.props.genre}</span>
            <span>{props.props.rating} stars</span>
            <button onClick={() => deleteEntry(props.props.id)}>X</button>
        </li>
    )
}

export default SongEntry