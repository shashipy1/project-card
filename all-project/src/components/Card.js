import React from 'react'

import './Card.css'

const Card = ({ title, body, links }) => {

    return (
        
            <div className='card-container'>
            
                <div className='card-title'>
                    <h2>{title}</h2>
                </div>
                <div className='card-body'>
                    <h4>{body}</h4>
                </div>
                <button className='btn'>
                    <a className='links'
                        href={links}>website</a>
                </button>
                <div className='footer'>
                    <p> All website </p>
                </div>
            </div>
            
    )
}

export default Card