import React from 'react';
import Work from './work.container';
import { shallow, mount } from 'enzyme';

describe('Work component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Work />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Work />);
  });
});