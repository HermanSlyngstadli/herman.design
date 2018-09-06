import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import NoMatch from './NoMatch';

export default () =>
(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
    </Switch>
</BrowserRouter>);
