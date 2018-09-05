import React, { Component } from 'react';

import { Navigation } from './Navigation';

export class Header extends Component {

    render() {
        return(
            <header>
                <Navigation /><br />
            </header>
        );
    }

}

export default Header;
