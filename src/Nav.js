import React, { useState, useEffect } from 'react'
import netflix_logo from './img/netflix-logo.png';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
            return () => {
                window.removeEventListener("scroll");
            };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src={netflix_logo}
                alt="Netflix Logo"
            />

            <span className="nav_text">Sign in</span>
            
        </div>
    )
}

export default Nav
