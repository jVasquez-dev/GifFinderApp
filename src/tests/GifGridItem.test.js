import { shallow } from 'enzyme';
import { GifGridItem } from '../GifGridItem';
import React from 'react';

describe('pruebas GifGridItem', () => {

    const title = 'My title';
    const url = 'https://localhost/imagen.jpg';

    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    
    test('Debe de mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should have a paragraph with the value of title', () => {
       
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )
    })
    
    test('should have an img tag with url and alt as properties', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('should have a div with the class "animate__zoomIn"', () => {
        
        const div = wrapper.find('.card');
        expect( div.prop('className').includes('animate__zoomIn') ).toBe( true );
    })
    
    
})