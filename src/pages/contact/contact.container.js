import React, { useState } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Components 
import ContactView from './contact.component';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const data = { email, message };

        Axios.get('https://us-central1-portfolio-8af66.cloudfunctions.net/sendEmail', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            data: data
        })
        .then(info => {
            if (info.status === 200 && info.data.data.message === 'message sent') {
                setSuccess(true);
                setEmail('');
                setMessage('');
            }
        })
        .catch(error => {
            if (error) {
                setError(error);
                setSuccess(false)
            } 
        });
    };

    return (
        <section id='contact'>
            <ContactView 
                FontAwesomeIcon={FontAwesomeIcon} 
                faCheckCircle={faCheckCircle} 
                faTimesCircle={faTimesCircle}
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                error={error}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
            />
        </section>
    )
};

export default Contact;