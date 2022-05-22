import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from 'uuid';
import { addSong } from "../features/song/songSlice";



const AddSong = () => {

    const dispatch = useDispatch();
    const [titleField, setTitleField] = useState("");
    const [artistField, setArtistField] = useState("");
    const [genreField, setGenreField] = useState("Jazz");
    const [ratingField, setRatingField] = useState("3");

    const clearInputForm = () => {
        setTitleField("");
        setArtistField("");
        setGenreField("Jazz");
        setRatingField(3);
    }

    const addSongFromForm = (event) => {
        event.preventDefault();
        if (event.target.title.value && event.target.artist.value) {
            const { title, artist, genre, rating } = event.target;
            const randomId = v4();
            const songObject = {
                title: title.value,
                artist: artist.value,
                genre: genre.value,
                rating: rating.value,
                id: randomId,
                visible: true
            }
            dispatch(addSong(songObject));
            clearInputForm();
        } else {
            alert("Please fill out all fields")
        }
    }

    return (
        <section className="addsong">
            <form className="addsong__form" onSubmit={addSongFromForm}>
                <input
                    type="text"
                    value={titleField}
                    name="title"
                    placeholder="Song Title..."
                    onChange={(e) => setTitleField(e.target.value)}
                >
                </input>
                <input
                    type="text"
                    value={artistField}
                    name="artist"
                    placeholder="Artist..."
                    onChange={(e) => setArtistField(e.target.value)}
                >
                </input>
                <select
                    value={genreField}
                    onChange={(e) => setGenreField(e.target.value)}
                    name='genre'
                >
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                    <option value="Dance">Dance</option>
                </select>
                <select
                    value={ratingField}
                    onChange={(e) => setRatingField(e.target.value)}
                    name='rating'
                >
                    <option value="1">One Star</option>
                    <option value="2">Two Stars</option>
                    <option value="3">Three Stars</option>
                    <option value="4">Four Stars</option>
                    <option value="5">Five Stars</option>
                </select>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default AddSong;