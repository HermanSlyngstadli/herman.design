import React, { Component } from 'react';

import Routes from '../routes'

class App extends Component {

  render() {
      return(
          <Routes />
      );
  }
}

export default App;

/*
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
*/
