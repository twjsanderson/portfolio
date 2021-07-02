import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';

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

        Axios.post('https://us-central1-portfolio-8af66.cloudfunctions.net/sendEmail', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            data: data
        })
        .then(info => console.log(info))
        .catch(error => {
            console.error(data, error)
            if (error) {
                setError(error);
                setSuccess(false)
            } else {
                setSuccess(true);
                setEmail('');
                setMessage('');
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