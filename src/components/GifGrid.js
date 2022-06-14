import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './';

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs(category);

    //console.log({ isLoading })

    return (
        <>
            <h3>{ category }</h3>
            {/* <h3>{ count }</h3>
            <button onClick={ () =>  setCount(count + 1) } /> */}
            {/* {
                isLoading ? (<h2 >Cargando...</h2>): null
            } */}

            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            
            <div className='card-grid'>
                {
                    images.map(img => 
                        <GifGridItem key={ img.id } { ...img }/>
                    )
                }
            </div>
        </>
  )
}

