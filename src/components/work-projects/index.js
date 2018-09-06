import React from 'react';

class Projects extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch('https://herman.design/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(response => {
            this.setState({
                projects: response
            })
        })
    }

    render() {
        let projects = this.state.projects.map((project, index) => {
            return (
                <article key={index}>
                    <h1>{project.title.rendered}</h1>
                    {project.content.rendered}
                </article>
            );
        })
        return(
            <div>
                {projects}
            </div>
        );
    }


}

export default Projects;
