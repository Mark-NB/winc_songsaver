import React from "react";
import { useDispatch } from "react-redux";
import { deleteSong } from "../features/song/songSlice";

const SongEntry = (props) => {

    const dispatch = useDispatch()


    const deleteEntry = (id) => {
        console.log(id);
        dispatch(deleteSong(id));
    }

    return (
        <li>
            <span>{props.props.title} - </span>
            <span>{props.props.artist} - </span>
            <span>{props.props.genre} - </span>
            <span>{props.props.rating} stars</span>
            <button onClick={() => deleteEntry(props.props.id)}>Delete</button>
        </li>
    )
}

export default SongEntry