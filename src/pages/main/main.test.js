import React from 'react';
import Main from './main.container';
import { shallow, mount } from 'enzyme';

describe('Main component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Main />);
  });
});