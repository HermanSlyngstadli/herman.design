import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

export class Navigation extends Component {

    render() {
        return(
            <menu>
                <Link to='/'><div className="site-logo">herman slyngstadli</div></Link>
                <nav className="site-nav">
                    <ul className="nav-item-holder">

                        <li className="nav-item"><a href="/work">Work</a></li>
                        <li className="nav-item"><a href="/not-work">Not work</a></li>
                        <li className="nav-item"><a href="/contact">Contact</a></li>
                        <li className="nav-item social"><a href="https://www.instagram.com/hermanslyngstadli/">Instagram</a></li>
                        <li className="nav-item social"><a href="https://www.linkedin.com/in/hermanslyngstadli/">LinkedIn</a></li>
                    </ul>
                </nav>
            </menu>
        );
    }

}
