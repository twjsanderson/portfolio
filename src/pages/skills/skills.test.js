import React from 'react';
import Skills from './skills.container';
import { shallow, mount } from 'enzyme';

describe('Skills component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Skills />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Skills />);
  });
});