import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSongsGenre, filterSongsRating } from '../features/song/songSlice'

const FilterBar = () => {

    const [genreFilter, setGenreFilter] = useState();
    const [ratingFilter, setRatingFilter] = useState();

    const dispatch = useDispatch();

    return (
        <section className="songlist__filterbar">
            <span>Filter by Genre</span>
            <select
                className="songlist__select"
                value={genreFilter}
                onChange={(e) => {
                    setGenreFilter(e.target.value)
                    dispatch(filterSongsGenre(e.target.value))
                    setRatingFilter("none")
                }}
                name='genreFilter'
            >
                <option value="none">none</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
                <option value="Dance">Dance</option>
            </select>
            <span>or Filter by Rating</span>
            <select
                className="songlist__select"
                value={ratingFilter}
                onChange={(e) => {
                    setRatingFilter(e.target.value)
                    dispatch(filterSongsRating(e.target.value))
                    setGenreFilter("none")
                }}
                name='ratingFilter'
            >
                <option value="none">none</option>
                <option value="1">One Star</option>
                <option value="2">Two Stars</option>
                <option value="3">Three Stars</option>
                <option value="4">Four Stars</option>
                <option value="5">Five Stars</option>
            </select>
        </section>
    )
}

export default FilterBar