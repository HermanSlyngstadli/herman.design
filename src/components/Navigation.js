import React, { Component } from 'react';

import './Navigation.css';

export class Navigation extends Component {

    render() {
        return(
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/work">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        );
    }

}
