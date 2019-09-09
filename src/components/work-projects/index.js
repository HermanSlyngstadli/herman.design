import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WorkFull from '../work-full';
import Project from '../work-project-preview';

class Projects extends React.Component {

    render() {
        return(
            <Switch>
                <Route exact path='/' component={WorkFull} />
                <Route exact path='/work' component={WorkFull} />
                <Route path='/work/:slug' component={Project} />
            </Switch>
        );
    }


}

export default Projects;