

import { useEffect, useState } from 'react'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=0CYzbfyfRocH1CKcGwTs8D67cqolgG9b`
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map(img => {
                return {  id: img.id,  title: img.title, url:  img.images?.downsized_medium.url }
        })

        //console.log(gifs)
        setImages(gifs);
        setIsLoading(false)
    }

    useEffect(() => { 
        getGifs();
    }, [])

    return { images , isLoading }
}
