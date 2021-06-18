import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

// components
import FooterView from './footer.component';

const Footer = () => {
    return (
        <FooterView
            FontAwesomeIcon={FontAwesomeIcon}
            faGithubSquare={faGithubSquare}
            faLinkedin={faLinkedin}
            faMedium={faMedium}
        />
    )
}

export default Footer;