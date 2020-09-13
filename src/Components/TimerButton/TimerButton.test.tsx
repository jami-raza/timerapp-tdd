import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton'
let container:any
describe('three buttons',()=>{
  beforeEach(() => (container = shallow(<TimerButton setTimeInseconds={Function}/>)))
    it("should render instances of the Button component", () => {
        expect(container.find("button").length).toEqual(2);
      });
      
})
