import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAboutApp } from "../features/about_app/aboutAppSlice";

const Header = () => {

    const dispatch = useDispatch();
    const aboutAppToggle = useSelector((state) => state.about[0]);

    return (
        <header>
            <h1>Songsaver</h1>
            <nav>
                <button onClick={() => dispatch(toggleAboutApp())}>{aboutAppToggle ? "Back to App" : "About this app"}</button>
            </nav>
        </header>
    )
};

export default Header;