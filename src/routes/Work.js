import React from 'react';

import Layout from '../components/layout/';
import axios from 'axios';

class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioContent: null
        }
    }

    componentDidMount() {
        axios.get('https://herman.design/wp-json/wp/v2/posts')
        .then(function (response) {
            //console.log(response)
            this.state = {
                portfolioContent: response
            }
            console.log(this.state);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    render() {
        return(
            <Layout>
                <div>Work</div>
            </Layout>
        );
    }


}

export default Work;
