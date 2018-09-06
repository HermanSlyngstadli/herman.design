import React from 'react';
import { Link } from 'react-router-dom';

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
        })

    }

    render() {
        const projects = this.state.projects.map((project) => {
            return (
                <article key={project.id}>
                    <Link to={{
                        pathname: '/work/' + project.slug,
                        state: {
                            postId: project.id
                        }
                    }}>
                        {project.title.rendered}
                    </Link>
                    <div>{project.content.rendered}</div>
                </article>
            );
        });
        return(
            <div>
                {projects}
            </div>
        );
    }

}

export default WorkFull;

/*
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
