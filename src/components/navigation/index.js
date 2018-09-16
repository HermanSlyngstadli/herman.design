import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

export class Navigation extends Component {

    toggleNav() {
        return '2';
    }

    render() {
        return(
            <nav className="main-nav">
                <Link to='/' className="site-logo">HERMAN SLYNGSTADLI</Link>
                <div className="nav-item-holder" id="navigation">
                    <Link to="/work"  className="nav-item social">Work</Link>
                    <Link to="/not-work" className="nav-item">Not work</Link>
                    <Link className="nav-item" to="/contact">Contact</Link>
                    <a href="https://www.instagram.com/hermanslyngstadli/" className="nav-item social">Instagram</a>
                    <a href="https://www.linkedin.com/in/hermanslyngstadli/" className="nav-item social">LinkedIn</a>
                </div>
                <button className="nav-burger" onClick={function(){
                    var element = document.getElementById("navigation");
                    element.classList.toggle("open"); }}>
                    <div>
                        <span></span>
                    </div>
                </button>
            </nav>
        );
    }

}
