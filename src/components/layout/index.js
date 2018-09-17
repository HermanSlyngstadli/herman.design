import React, { Component } from 'react';

import { Header } from '../header/';
import { Footer } from '../footer/';

import './Layout.css';

class Layout extends Component {

    scrollToTop() {
        console.log('click');
    }

    render() {
        return(
            <div>
                <Header />
                <button id="top-scroller" onClick={this.scrollToTop}></button>
                    <div className="content-outer-wrapper">
                        <div className="content-inner-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }


}

export default Layout;
