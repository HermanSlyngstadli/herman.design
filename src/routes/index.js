import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import Contact from './Contact';

export default () =>
(<BrowserRouter>
    <Switch>
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
    </Switch>
</BrowserRouter>);
