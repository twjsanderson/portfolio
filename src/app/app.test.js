import React from 'react';
import App from './app';
import { shallow, mount } from 'enzyme';

describe('App component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<App />);
   });
   it('renders component and its children without crashing', () => {
    mount(<App />);
  });
});