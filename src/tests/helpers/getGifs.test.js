import { getGifs }  from '../../helpers/getGifs'

describe('getGifs tests', () => {

    test('should return 10 elements', async() => {
        
        const gifs = await getGifs('Naruto'); 
        
        expect( gifs.length ).toBe( 10 )
    })
    
    test('should return 0 elements', async() => {
        
        const gifs = await getGifs(''); 
        
        expect( gifs.length ).toBe( 0 )
    })
    
})
