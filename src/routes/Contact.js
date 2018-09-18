import React from 'react';

import Layout from '../components/layout/';

class Contact extends React.Component {

    render() {
        return(
            <Layout>
                <form name="contact" method="POST" netlify>
                    <p>
                        <label>Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </Layout>
        );
    }


}

export default Contact;
