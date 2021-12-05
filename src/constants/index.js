
// images
import scrimger_homepage from '../assets/images/scrimger_homepage.png';
import glowinme_portal_home from '../assets/images/glowinme_portal_home.png';
import candidly from '../assets/images/candidly.png';
import zenduit from '../assets/images/zenduit.png';
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
        website: 'https://levelup.gitconnected.com/heap-sort-algorithm-101-dec2aefb0b11', 
        image: heap, 
        imgAlt: 'Heap Sort Algorithm', 
        title: 'Heap Sort Algorithm 101', 
        text: 'I’ll be honest, for any Junior Developers who are not familiar with Binary Search Trees, Max/Min Heaps, and other related concepts, this gonna be a pretty intense walkthrough. The ultimate goal of the Heap Sort Algorithm is to sort a list of values using a Max or Min heap...' 
    },
    { 
        id: 2,
        website: 'https://medium.com/swlh/merge-sort-algorithm-101-c4fdea276289', 
        image: merge, 
        imgAlt: 'Merge Sort Algorithm', 
        title: 'Merge Sort Algorithm 101', 
        text: 'The first function we are going to focus on is the actual MergeSort function that breaks down the initial unsorted array into smaller pieces. Then we will build out a merge function to stitch the arrays back together in sorted order...' 
    },
    { 
        id: 3,
        website: 'https://levelup.gitconnected.com/bubble-sort-algorithm-101-b1864d5b509f', 
        image: bubbles, 
        imgAlt: 'Bubble Sort Algorithm', 
        title: 'Bubble Sort Algorithm 101', 
        text: 'The BSA works by comparing each element in an array to its immediate (adjacent neighbour) to determine which one is greater. The larger of the two elements ends up on the right and the smaller element ends up on the left. This process is repeated...' 
    },
];
