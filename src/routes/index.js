import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import NotWork from './NotWork';
import Contact from './Contact';
import Thanks from './Thanks';
import NoMatch from './NoMatch';

export default () =>
(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/not-work" component={NotWork} />
        <Route path="/contact" component={Contact} />
        <Route path="/thanks" component={Thanks} />
        <Route component={NoMatch} />
    </Switch>
</BrowserRouter>);
