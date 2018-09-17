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
            return (
                <Link key={project.id} className="work-project-link col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" to={{
                    pathname: '/work/' + project.slug,
                    state: {
                        postId: project.id
                    }
                }}>
                    <h2 className="work-project-title">{project.title.rendered}</h2>
                    <article className="work-project">
                        <img src={project.fimg_url} className="work-project-image" />
                    </article>
                </Link>
            );
        });
        return(
            <div>
                <h1 className="page-title">work</h1>
                <div><Link to="/work">Digital</Link> / <Link to="/work">Tangible</Link></div>
                <div>{projects}</div>
            </div>
        );
    }

}

export default WorkFull;
