import React from 'react';
import Articles from './articles.container';
import { shallow, mount } from 'enzyme';

describe('Articles component rendering ability', () => {
  it('renders without crashing', () => {
    shallow(<Articles />);
   });
   it('renders component and its children without crashing', () => {
    mount(<Articles />);
  });
});