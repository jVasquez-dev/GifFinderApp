import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifFinderApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div className="container">
            <h2>GIF Finder</h2>
            <AddCategory setCategories={setCategories} />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />

                    ))
                }
            </ol>
            
        </div>
    )
}
