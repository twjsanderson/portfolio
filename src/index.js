import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");

if (rootElement) {
    render(<App />, rootElement);
};

serviceWorker.unregister();
