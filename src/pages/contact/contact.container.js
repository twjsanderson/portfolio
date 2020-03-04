import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';


// components 
import ContactView from './contact.component';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const data = { email, message };
        
        Axios.post('https://us-central1-portfolio-8af66.cloudfunctions.net/submit', data).catch(error => {
            if (error) { 
                setError(error);
            }
        });

        if (error) {
            setSuccess(false)
        } else {
            setSuccess(true);
            setEmail('');
            setMessage('');
        }
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