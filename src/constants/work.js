
// Assets
import scrimger_homepage from '../assets/images/scrimger_homepage.png';
import gcb from '../assets/images/gcb.png';
import glowinme_portal_home from '../assets/images/glowinme_portal_home.png';
import candidly from '../assets/images/candidly.png';
import zenduit from '../assets/images/zenduit.png';

const projects = [
    { 
        website: 'https://glowinme.com/', 
        imageLink: glowinme_portal_home, 
        imgAlt: 'GlowinMe Portal', 
        title: 'GlowinMe', 
        text: 'A private portal where staff members can clean and review product data from their Firestore database, built with React/Redux.' 
    },
    { 
        website: 'https://www.scrimger.ca/', 
        imageLink: scrimger_homepage, 
        imgAlt: 'Richard Scrimger website', 
        title: 'Richard Scrimger', 
        text: 'A custom built website, with JavaScript powered animations, designed for Canadian author, Richard Scrimger.' 
    },
    { 
        website: 'https://candidly.me/', 
        imageLink: candidly, 
        imgAlt: 'Candidly App', 
        title: 'Candidly', 
        text: 'Wrote over 100 multiple choice questions about the React library that are actively being used in the Candidly app to assess the knowledge of software developer at various skill levels.' 
    },
    { 
        website: 'https://zenduit.com/', 
        imageLink: zenduit, 
        imgAlt: 'ZenduIt Home', 
        title: 'ZenduIt', 
        text: 'As a junior developer I built a stand alone API in TypeScript that connected IoT devices to a custom client dashboard with real time updates.' 
    },
    { 
        website: 'https://www.giftcardbank.org/', 
        imageLink: gcb, 
        imgAlt: 'Gift Card Bank website', 
        title: 'Gift Card Bank', 
        text: 'The first iteration of the Gift Card Bank website, built using React & SASS.' 
    },

];

export default { projects };