import React from 'react';
import { Link } from 'react-router-dom';

import './WorkProjectPreview.css';

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
            var styles = {
                backgroundImage:'url('+project.fimg_url+')'
            }
            return (
                <article key={project.id}>
                    <div className="project-hero-image-holder">
                        <div className="project-hero-image" style={styles}></div>
                        <div className="project-hero-info">
                            <span>{ project.hero_text }</span>
                            <h1 className="project-hero-title"> {project.title.rendered}</h1>
                            <p>{project.short_description}</p>
                        </div>
                    </div>
                    <div className="project-component-small-container back-to-projects">
                        <Link to='/work'><span className="back-to-projects-arrow"></span><span className="back-to-projects-text">{'Back to projects'}</span></Link>
                    </div>
                    <div>{this.projectContent(project.content.rendered)}</div>
                    <div className="previewed-project-floating-title">{'Project: '+project.title.rendered}</div>
                </article>
            );
        });
        return(
            <div>
                {project}
                <div className="more-projects project-component-small-container">
                    <h2>More projects?</h2>
                    <div>
                        <Link to="/work/spotta">{'Spotta'}</Link>
                        <Link to="/work/chair">{'Chair'}</Link>
                        <Link to="/work/norway-medical">{'Norway Medical'}</Link>
                        <Link to="/work/foodprint">{'Foodprint'}</Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default Project;
