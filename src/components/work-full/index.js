import React from 'react';
import { Link } from 'react-router-dom';

import './Work-full.css';

class WorkFull extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch('https://herman.design/wp-json/wp/v2/posts?per_page=50')
        .then(response => response.json())
        .then(response => {
            this.setState({
                projects: response.reverse()
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
                <h1 className="page-title">work</h1>
                <div className="page-sorting"><Link to="/work">All</Link> / <Link to="/work">Digital</Link> / <Link to="/work">Tangible</Link></div>
                <div>{projects}</div>
            </div>
        );
    }

}

export default WorkFull;
