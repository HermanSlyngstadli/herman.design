import React from 'react';

import Layout from '../components/layout/';
import Projects from '../components/work-full/';

export class Home extends React.Component {
    render() {
        return(
            <Layout>
                <Projects />
            </Layout>
        );
    }
}

export default Home;
