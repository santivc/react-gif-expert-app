// Snippet rafcp
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories ] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    //     //setCategories(categories => [...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h1>GifExpertApp</h1>   
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>    
                {
                    categories.map(category => 
                        <GifGrid key={ category } category={ category }/>
                    )
                }
            </ol>
        </>
    )
}

// GifExpertApp.propTypes = {}

export default GifExpertApp
