import React from 'react';
import {shallow} from 'enzyme';
import App from './App'
import Timer from '../Timer/Timer'

let container : any
beforeEach(() => (container = shallow(<App />)))
describe('should render div in App',()=>{
  it('should render a <div />',()=>{
    expect(container.find('div').length).toEqual(1);
  });
  it('find Timer',()=>{
    expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
  })
});
