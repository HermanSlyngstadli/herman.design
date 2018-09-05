import React from 'react';
import axios from 'axios';

export default class ContentCollector extends React.Component {
    constructor(props) {
        super(props);
    }

    getJson()  {
    axios.get('https://herman.design/wp-json/wp/v2/posts')
        .then(function (response) {
            //console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    getContent(props) {
        console.log(props);
    }

    render() {
        return console.log(this.props);
    }
}
