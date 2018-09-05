import React, { Component } from 'react';

import { Navigation } from '../navigation/';

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
