import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = () => {

    // const categories = ['Pluto', 'JJK', 'Bleach'];
    const [categories, setCategories] = useState(['Naruto'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Naruto']);
    //     setCategories( cats => [...categories, 'Naruto'] );
    // } 

    return (
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GiftGrid 
                        key={ category }
                        category={ category }
                    />

                ))
            }
        </ol>
        </>
    )
}
