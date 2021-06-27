import React from 'react';

const HOC = Component => ({ showAllComponents }) => showAllComponents ? <Component /> : null;

export default HOC;