import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('<GiftExpertApp /> tests', () => {


    test('should render correctly', () => {
        
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    })

    test('should shows categories', () => {
        
        const categories = ['Metallica', 'Slipknot']
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    })
    
    
})