import {HelloWorld} from './HelloWorld'
import * as React from "react";
import {shallow} from 'enzyme'

describe('Hello component' , () => {

    it('tests the h1', () => {
        let ab = shallow(<HelloWorld />)
        if(ab != null)
         {
             const text = ab.find('h1').text();
             expect(text).toEqual("Hello world ");  
         }
          
     })
})