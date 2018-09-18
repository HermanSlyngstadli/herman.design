import React from 'react';
import {Helmet} from "react-helmet";

import Layout from '../components/layout/';

export class NoMatch extends React.Component {
    render() {
        return(
            <Layout>
                <Helmet>
                    <meta name="robots" content="noindex" />

                    <meta name="description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
                    <meta name="keywords" content="service design, interaction design, design, portfolio, ux, ui, herman slyngstadli" />

                    <meta property="og:site_name" content="Herman Slyngstadli"/>
                    <meta property="og:url"                content="http://herman.design/" />
                    <meta property="og:type"               content="website" />
                    <meta property="og:title"              content="Designer | Herman Slyngstadli" />
                    <meta property="og:description"        content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
                    <meta property="og:image"              content="" />

                    <meta name="twitter:title" content={"Designer | Herman Slyngstadli"}/>
                    <meta name="twitter:image" content=""/>
                    <meta name="twitter:url" content="http://herman.design/"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway."/>

                    <title>{'Designer | Herman Slyngstadli'}</title>
                </Helmet>
                <div>404</div>
            </Layout>
        );
    }
}

export default NoMatch;
