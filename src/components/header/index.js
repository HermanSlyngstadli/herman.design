import React, { Component } from 'react';

import { Navigation } from '../navigation/';

import './header.css';

export class Header extends Component {

    render() {
        return(
            <header>
                <Navigation />
            </header>
        );
    }

}

export default Header;
