import React, { Component } from 'react';

import './MoreProjects.css';

class MoreProjects extends Component {

    render() {
        return(
            <div className="more-projects project-component-small-container">
                <h2>More projects?</h2>
                <div>
                    <Link to="/work/spotta">{'Spotta'}</Link>
                    <Link to="/work/chair">{'Chair'}</Link>
                    <Link to="/work/norway-medical">{'Norway Medical'}</Link>
                    <Link to="/work/foodprint">{'Foodprint'}</Link>
                </div>
            </div>
        );
    }


}

export default MoreProjects;
