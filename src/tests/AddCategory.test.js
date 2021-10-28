import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import { AddCategory } from "../AddCategory";

describe('<AddCategory /> tests', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {

        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);

    })

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should change text box content', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target: { value }});

    })
    
    test('should not call setCategories at submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('should  call SetCategories and clean the input text', () => {
        
        const input = wrapper.find('input');
        const value = 'Bleach'

        input.simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        expect( input.text() ).toBe( '' );

    })
    
    

})