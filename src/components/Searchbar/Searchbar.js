import React from 'react';
import './Seachbar.css';

function Searchbar() {

    return (
        <div className="Searchbar">
            <img className="Searchbar_Image" src="google_logo.png" alt="google logo" />
            <input className="Searchbar_Input" />
        </div>
    )
}

export default Searchbar;