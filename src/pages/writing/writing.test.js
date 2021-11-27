import React from 'react';
import Writing from './writing.container';
import { shallow, mount } from 'enzyme';

describe('Writing component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Writing />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Writing />);
  });
});