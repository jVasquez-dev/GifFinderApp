import React, { PureComponent } from 'react'
import { shallow } from "enzyme";

import { GifGrid } from '../GifGrid'
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock( '../hooks/useFetchGifs' )

describe('<GifGrid /> tests', () => {

    test('should render correctly', () => {
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const category = 'Naruto';
        const wrapper = shallow( <GifGrid category={ category }/>);
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('should render correctly', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/folder/new.jpg',
            title: 'image'
        },
        {
            id: 'ABCD',
            url: 'https://localhost/folder/newa.jpg',
            title: 'image'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ 'hola' }/>);
        
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    

  
})