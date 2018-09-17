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
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm-0 col-0"></div>
                        <div className="content-inner-wrapper col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
                            {this.props.children}
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm-0 col-0"></div>
                    </div>
                <Footer />
            </div>
        );
    }


}

export default Layout;
