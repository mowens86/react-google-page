import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <ul className="Footer_Ul">
                <div className="Footer_LiStart">
                    <li className="Footer_ListItem">
                        <a className="Footer_Link" href="/">Advertising</a>
                    </li>
                    <li className="Footer_ListItem">
                        <a className="Footer_Link" href="/">Business</a>
                    </li>
                    <li className="Footer_ListItem">
                        <a className="Footer_Link" href="/">How Search works</a>
                    </li>
                </div>
                <div className="Footer_LiEnd">
                    <li className="Footer_ListItem">
                        <a className="Footer_Link" href="/">Privacy</a>
                    </li>
                    <li className="Footer_ListItem">
                        <a className="Footer_Link" href="/">Terms</a>
                    </li>
                    <li className="Footer_ListItem">
                        <a className="Footer_Link" href="/">Settings</a>
                    </li>
                </div>
            </ul>
        </footer>
    )
}

export default Footer;