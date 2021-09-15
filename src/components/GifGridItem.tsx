import React from 'react'

interface Props{
    id: string;
    title: string;
    url: string;
}

export const GifGridItem = ( { title, url }: Props ) => {

    // console.log({id, title, url});

    return (
        <div className="card animate__animated animate__fadeInUp">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
