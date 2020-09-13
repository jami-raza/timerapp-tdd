import React from 'react'
import {shallow} from 'enzyme'
import Timer from './Timer'
import TimerButton from '../TimerButton/TimerButton'
let container : any
beforeEach(()=>(container = shallow(<Timer/>)))

describe('Timer',()=>{
    it('should render a div',()=>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    });
    it('should render TimerButton',()=>{
        expect(container.find('TimerButton').length).toBeLessThanOrEqual(1)
    })
})