import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Work from "../Work/Work";
import ProjectPreview from "../ProjectPreview/ProjectPreview";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Switch>
          <Route exact path="/work" component={Work} />
          <Route path="/work/:slug" component={ProjectPreview} />
        </Switch>
      </Router>
    );
  }
}

export default App;
