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
        fetch('https://herman.design/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(response => {
            this.setState({
                projects: response
            })
            console.log(response);
        })

    }

    createMarkup(str) {
      return {__html: str};
    }

    projectContent(str) {
      return <div dangerouslySetInnerHTML={this.createMarkup(str)} />;
    }

    render() {
        const projects = this.state.projects.map((project) => {
            return (
                <Link key={project.id} className="work-project-link" to={{
                    pathname: '/work/' + project.slug,
                    state: {
                        postId: project.id
                    }
                }}>
                    <article className="work-project">
                        <h2>{project.title.rendered}</h2>
                        <div>{project.description}</div>

                    </article>
                </Link>
            );
        });
        return(
            <div>
                <h1 className="page-title">.work</h1>
                {projects}
            </div>
        );
    }

}

export default WorkFull;

/*
//<div>{this.projectContent(project.content.rendered)}</div>

axios.get('https://herman.design/wp-json/wp/v2/posts')
    .then( function(response) {
            const projects = response.data.map((project, i) =>
                <article>
                    <h2>{response.data[i].title}</h2>
                    <div>{response.data[i].content}</div>
                </article>
            );
            console.log(projects);
            this.setState({
                projects: [1,2,3]
            })
    })
    .catch( function(error) {
            console.log(error);
    })
--------
// https://flaviocopes.com/axios/
const getProjects = async () => {
    try {
        return await axios.get('https://herman.design/wp-json/wp/v2/posts')
    } catch (error) {
        console.log(error);
    }
}

const loadProjects = async () => {
    const projects = await getProjects()
    if(projects.data) {
        const dosd = projects.data.map((project, i) =>

            <article>
                <h2>{projects.data[i].title}</h2>
                <div>{projects.data[i].content}</div>
            </article>
        );
    }
}

loadProjects();
---------
const posts = response.data;


*/
