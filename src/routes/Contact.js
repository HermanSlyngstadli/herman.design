import React from 'react';
import {Helmet} from "react-helmet";

import Layout from '../components/layout/';

class Contact extends React.Component {

    render() {
        return(
            <Layout>
                <Helmet>
                    <meta name="description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
                    <meta name="keywords" content="service design, interaction design, design, portfolio, ux, ui, herman slyngstadli" />

                    <meta property="og:site_name" content="Herman Slyngstadli"/>
                    <meta property="og:url"                content="http://herman.design/contact" />
                    <meta property="og:type"               content="website" />
                    <meta property="og:title"              content="Contact | Herman Slyngstadli" />
                    <meta property="og:description"        content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway." />
                    <meta property="og:image"              content="" />

                    <meta name="twitter:title" content={"Contact | Herman Slyngstadli"}/>
                    <meta name="twitter:image" content=""/>
                    <meta name="twitter:url" content="http://herman.design/contact"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:description" content="Herman Slyngstadli - Design student specialising in Interaction and Service Design at NTNU, Norway."/>

                    <title>{'Contact | Herman Slyngstadli'}</title>
                </Helmet>
                <div>
                    contact form
                </div>
            </Layout>
        );
    }


}

export default Contact;
