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
        Axios.post('https://us-central1-portfolio-8af66.cloudfunctions.net/sendEmail', { 
            data: {
                email, 
                message
            }
        })
        .then(info => {
            console.log(info)
            if (info.status === 200) {
                setSuccess(true);
                setEmail('');
                setMessage('');
            }
        })
        .catch(error => {
            console.log(error)
            if (error) {
                setError(error);
                setSuccess(false);
            } 
        });
        event.preventDefault();
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