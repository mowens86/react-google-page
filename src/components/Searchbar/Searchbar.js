import React from 'react';
import './Seachbar.css';

function Searchbar() {

    return (
        <div className="Searchbar">
            <img className="Searchbar_Image" src="google_logo.png" alt="google logo" />
            <form className="Searchbar_Form">
                <input className="Searchbar_Input" />
                <button className="Searchbar_Button">Google Search</button>
            </form>
            
        </div>
    )
}

export default Searchbar;