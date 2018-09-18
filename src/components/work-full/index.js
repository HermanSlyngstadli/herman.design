import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './Work-full.css';

class WorkFull extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch('http://slyngstadli.no/herman/wp-json/wp/v2/posts?per_page=50')
        .then(response => response.json())
        .then(response => {
            this.setState({
                projects: response
            })
            //console.log(response);
        })

    }

    render() {
        const projects = this.state.projects.map((project) => {
            var styles={
                backgroundImage:'url('+project.fimg_url+')'
            };
            return (
                <Link key={project.id} className="work-project-link col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" to={{
                    pathname: '/work/' + project.slug,
                    state: {
                        postId: project.id
                    }
                }}>
                    <article className="work-project">
                    <div style={styles} className="work-project-image"></div>
                    </article>
                    <div className="work-project-title-holder"><h2 className="work-project-title">{project.title.rendered}</h2></div>
                </Link>
            );
        });
        return(
            <div>
                <Helmet>
                    <meta name="description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
                    <meta name="keywords" content="service design, interaction design, design, portfolio, ux, ui, herman slyngstadli" />

                    <meta property="og:site_name" content="Herman Slyngstadli"/>
                    <meta property="og:url"                content="http://herman.design/work" />
                    <meta property="og:type"               content="website" />
                    <meta property="og:title"              content="Work | Herman Slyngstadli" />
                    <meta property="og:description"        content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
                    <meta property="og:image"              content="" />

                    <meta name="twitter:title" content={"Work | Herman Slyngstadli"}/>
                    <meta name="twitter:image" content=""/>
                    <meta name="twitter:url" content="http://herman.design/work"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway."/>

                    <title>{'Work | Herman Slyngstadli'}</title>
                </Helmet>

                <div>{projects}</div>
            </div>
        );
    }

}

export default WorkFull;
/*
<h1 className="page-title">work</h1>
<div className="page-sorting"><Link to="/work">All</Link> / <Link to="/work">Digital</Link> / <Link to="/work">Tangible</Link></div>

*/
