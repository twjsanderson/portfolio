import React from 'react';
import Experience from './experience.container';
import { shallow, mount } from 'enzyme';

describe('Experience component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Experience />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Experience />);
  });
});