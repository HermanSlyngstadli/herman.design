import React from 'react';

import Layout from '../components/layout/';
import Projects from '../components/work-projects/';

class Work extends React.Component {

    render() {
        return(
            <Layout>
                <div>Work</div>
                <Projects />
            </Layout>
        );
    }


}

export default Work;

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

document.getElementById('projects').innerHTML = posts.map((post)=>
    return (
        <article>
            <h2>{post.title}</h2>
            <div>{post.content}</div>
        </article>
    );
);
*/
