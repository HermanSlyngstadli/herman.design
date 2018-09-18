import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './WorkProjectPreview.css';

import ReactGA from 'react-ga'
ReactGA.initialize('UA-108289732-3')
ReactGA.pageview(window.location.pathname + window.location.search);


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
        fetch('http://slyngstadli.no/herman/wp-json/wp/v2/posts?slug='+this.state.slug)
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
                <div key={project.id}>
                    <Helmet>
                        <meta name="description" content={project.description} />
                        <meta name="keywords" content={project.tags} />

                        <meta property="og:site_name" content="Herman Slyngstadli"/>
                        <meta property="og:url"                content={"https://herman.design/work/"+project.slug} />
                        <meta property="og:type"               content="website" />
                        <meta property="og:title"              content={project.title.rendered + ' | Herman Slyngstadli'} />
                        <meta property="og:description"        content={project.description} />
                        <meta property="og:image"              content="" />

                        <meta name="twitter:title" content={project.title.rendered + ' | Herman Slyngstadli'} />
                        <meta name="twitter:image" content=""/>
                        <meta name="twitter:url" content={"https://herman.design/work/"+project.slug}/>
                        <meta name="twitter:card" content="summary"/>
                        <meta name="twitter:description" content={project.description} />

                        <title>{project.title.rendered + ' | Herman Slyngstadli'}</title>
                    </Helmet>
                    <article>
                        <div className="project-hero-image-holder">
                            <div className="project-hero-image" style={styles}></div>
                            <div className="project-hero-info">
                                <span>{ project.hero_text }</span>
                                <h1 className="project-hero-title"> {project.title.rendered}</h1>
                                <p>{project.short_description}</p>
                            </div>
                        </div>
                        <div className="project-component-small-container back-to-projects">
                            <Link to='/work'><span className="back-to-projects-arrow"></span><span className="back-to-projects-text">{'Back to work'}</span></Link>
                        </div>
                        <div>{this.projectContent(project.content.rendered)}</div>
                        <div className="previewed-project-floating-title">{'Project: '+project.title.rendered}</div>
                    </article>
                </div>
            );
        });
        return(
            <div>
                {project}
            </div>

        );
    }
}

export default Project;
