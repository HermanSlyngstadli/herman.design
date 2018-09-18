import React from 'react';
import {Helmet} from "react-helmet";

import Layout from '../components/layout/';

const Work = () => (
    <Layout>
        <Helmet>
            <meta name="description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
            <meta name="keywords" content="service design, interaction design, design, portfolio, ux, ui, herman slyngstadli" />

            <meta property="og:site_name" content="Herman Slyngstadli"/>
            <meta property="og:url"                content="http://herman.design/not-work" />
            <meta property="og:type"               content="website" />
            <meta property="og:title"              content="Not Work | Herman Slyngstadli" />
            <meta property="og:description"        content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
            <meta property="og:image"              content="" />

            <meta name="twitter:title" content={"Not Work | Herman Slyngstadli"}/>
            <meta name="twitter:image" content=""/>
            <meta name="twitter:url" content="http://herman.design/not-work"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway."/>

            <title>{'Not Work | Herman Slyngstadli'}</title>
        </Helmet>
        {'I sketch and draw, take photos and stuff.'}
    </Layout>
)

export default Work;
