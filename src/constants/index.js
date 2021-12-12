import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// images
import scrimger_homepage from '../assets/images/scrimger_homepage.png';
import glowinme_portal_home from '../assets/images/glowinme_portal_home.png';
import candidly from '../assets/images/candidly.png';
import zenduit from '../assets/images/zenduit.png';
import junior1 from '../assets/images/junior1.jpg';
import junior2 from '../assets/images/junior2.jpg';
import queue from '../assets/images/queue.jpg';
import heap from '../assets/images/heap.jpg';
import bubbles from '../assets/images/bubbles.jpg';
import merge from '../assets/images/merge.jpg';

export const projects = [
    { 
        id: 1,
        website: 'https://glowinme.com/', 
        imageLink: glowinme_portal_home, 
        imgAlt: 'GlowinMe Portal', 
        title: 'Data Cleaning Portal', 
        text: 'A private portal where staff members can clean and review product data from their Firestore database. Built with React, Redux & Algolia.' 
    },
    { 
        id: 2,
        website: 'https://www.scrimger.ca/', 
        imageLink: scrimger_homepage, 
        imgAlt: 'Richard Scrimger website', 
        title: 'Portfolio Website', 
        text: 'A custom built portfolio with JavaScript powered animations. I designed this website from scratch for Canadian author, Richard Scrimger.' 
    },
    { 
        id: 3,
        website: 'https://candidly.me/', 
        imageLink: candidly, 
        imgAlt: 'Candidly App', 
        title: 'Candidly Quiz Questions', 
        text: 'I wrote over 100 multiple choice questions about the React library that are actively being used in the Candidly app to assess the knowledge of software developers at various skill levels.' 
    },
    { 
        id: 4,
        website: 'https://zenduit.com/', 
        imageLink: zenduit, 
        imgAlt: 'ZenduIt Home', 
        title: 'Custom API', 
        text: 'As a junior developer I built a stand alone API in TypeScript that connected IoT devices to a custom client dashboard with real time updates.' 
    },

];

export const articles = [
    { 
        id: 1,
        website: 'https://tom-w-j-sanderson.medium.com/a-practical-guide-to-technical-tests-for-junior-devs-part-1-7890b5689c0', 
        image: junior1, 
        imgAlt: 'python code on a screen', 
        title: 'A Practical Guide to Technical Tests (For Junior Devs): Part I', 
        text: 'We have all been there, in the awkward and often intimidating position of having to show off our technical knowledge to a room of strangers so they will consider giving us a job. Needless to say, the whole process can be stressful...' 
    },
    { 
        id: 2,
        website: 'https://tom-w-j-sanderson.medium.com/a-practical-guide-to-technical-tests-for-junior-devs-part-ii-7fec105d1528', 
        image: junior2, 
        imgAlt: 'javascript code on a screen', 
        title: 'A Practical Guide to Technical Tests (For Junior Devs): Part II', 
        text: 'In Part II of my guide to technical testing I will dig into the specific concepts, skills, technical tricks and resources that will help you pass your next technical test with flying colours...' 
    },
    { 
        id: 3,
        website: 'https://javascript.plainenglish.io/an-introduction-to-queues-and-stacks-in-javascript-efa26203386c', 
        image: queue, 
        imgAlt: 'people walking upstairs', 
        title: 'Introduction to Stacks and Queues', 
        text: 'When you start learning about data structures and algorithms, things can get complicated really fast. So this article is meant to slow things down and get you comfortable with two common data structures (Queues & Stacks)...' 
    },
    { 
        id: 4,
        website: 'https://levelup.gitconnected.com/heap-sort-algorithm-101-dec2aefb0b11', 
        image: heap, 
        imgAlt: 'Heap of dinosaur toys', 
        title: 'Heap Sort Algorithm 101', 
        text: 'This is for any Junior Developers who are not familiar with Binary Search Trees and Max/Min Heaps. The ultimate goal of the Heap Sort Algorithm is to sort a list of values using a Max or Min heap...' 
    },
    { 
        id: 5,
        website: 'https://medium.com/swlh/merge-sort-algorithm-101-c4fdea276289', 
        image: merge, 
        imgAlt: 'Merge Sort Algorithm', 
        title: 'Merge Sort Algorithm 101', 
        text: 'The first function we are going to focus on is the actual MergeSort function that breaks down the initial unsorted array into smaller pieces. Then we will build out a merge function to stitch the arrays back together in sorted order...' 
    },
    { 
        id: 6,
        website: 'https://levelup.gitconnected.com/bubble-sort-algorithm-101-b1864d5b509f', 
        image: bubbles, 
        imgAlt: 'Bubble Sort Algorithm', 
        title: 'Bubble Sort Algorithm 101', 
        text: 'The BSA works by comparing each element in an array to its immediate (adjacent neighbour) to determine which one is greater. The larger of the two elements ends up on the right and the smaller element ends up on the left. This process is repeated...' 
    },
];

export const contacts = [
    {
        id: 1,
        icon: faEnvelope,
        link: 'https://github.com/twjsanderson',
        text: 'Send me an email and setup a time to chat'
    },
    {
        id: 2,
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/tom-sanderson-b6bb5084/',
        text: 'Check out my Linkedin profile'
    },
    {
        id: 3,
        icon: faMedium,
        link: 'https://medium.com/@tom-w-j-sanderson',
        text: 'Read more of my articles on Medium.com'
    },
    {
        id: 4,
        icon: faGithubSquare,
        link: 'https://github.com/twjsanderson',
        text: 'Take a look at some of my code on Github'
    },
];