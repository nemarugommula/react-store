import React from 'react'
import './Details.css'

function Details({imageUrl,title,price,author}) {
    return (
        <div className="details">
            <img className="details-image" src={imageUrl} alt="img"/>
            <div className="details-body">
                <h1>{title}</h1>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Details
