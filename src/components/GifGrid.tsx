import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Gift } from '../interfaces/Gift';
import { GifGridItem } from './GifGridItem';

interface Props{
    category: string;
}

export const GifGrid = ({category}: Props) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading ? <p>Loading...</p> : null}

            <div className="card-grid">

                {
                    data.map( ( img : Gift ) => (
                        <GifGridItem 
                            key={ img.id } 
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
