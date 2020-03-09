import React from 'react';
import About from './about.container';
import { shallow, mount } from 'enzyme';

describe('About component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<About />);
   });
   it('renders component and its children without crashing', () => {
    mount(<About />);
  });
});