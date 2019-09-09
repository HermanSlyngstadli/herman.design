import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../Home';
import Work from '../Work';

class App extends Component {

  render() {
      return(
          <Router>
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/work" component={Work} />
              </div>
          </Router>
      );
  }
}

export default App;