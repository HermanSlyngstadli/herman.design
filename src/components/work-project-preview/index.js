import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project:[],
            slug:this.props.match.params.slug
        }
    }

    // Må gjøres: ----- Fange 404 ved ukjent post

    componentDidMount() {
        fetch('https://herman.design/wp-json/wp/v2/posts?slug='+this.state.slug)
        .then(response => response.json())
        .then(response => {
            this.setState({
                project: response
            })
        })
    }

    createMarkup(str) {
      return {__html: str};
    }

    projectContent(str) {
      return <div dangerouslySetInnerHTML={this.createMarkup(str)} />;
    }

    render() {
        const project = this.state.project.map((project) => {
            return (
                <article key={project.id}>
                    <h1>
                        {project.title.rendered}
                    </h1>
                    <div>{this.projectContent(project.content.rendered)}</div>
                </article>
            );
        });
        return(
            <div>
                <Link to='/work'>{'<----Back'}</Link>
                {project}
            </div>

        );
    }
}

export default Project;
