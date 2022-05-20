import React from "react";

const SongEntry = (props) => {
    return (
        <li>
            <span>{props.props.title} - </span>
            <span>{props.props.artist} - </span>
            <span>{props.props.genre} - </span>
            <span>{props.props.rating} stars</span>
        </li>
    )
}

export default SongEntry