import React from 'react';
import Contact from './contact.container';
import { shallow, mount } from 'enzyme';

describe('Contact component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Contact />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Contact />);
  });
});