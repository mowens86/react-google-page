import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="App_Nav">
        <ul className="App_Ul">
          <div className="App_StartingItems">
            <li>
              <a className="App_Link" href="/">About</a>
            </li>
            <li>
              <a className="App_Link" href="/">Store</a>
            </li>
          </div>
          <div className="App_EndingItems">
            <li>
            <a className="App_Link" href="/">Gmail</a>
              </li>
            <li>
            <a className="App_Link" href="/">Images</a>
              </li>
            <li>
              <svg className="App_Dots" focusable="false" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
              </svg>
            </li>
            <li>
              <img className="App_Icon" src="icon.png" alt="icon" />
            </li>
          </div>
        </ul>
      </nav>
    )
};

export default Navbar;