import React from 'react'
import './GameItem.css'


function GameItem({physicalImage, digitalImage, title, releaseDate, platform}) {
    return (
        <div className='card'>
            <div className='GameInfo'>          
                <div className='imageContainer'> 
                    <img className='physicalImage' src={physicalImage}></img>
                    <img className='digitalImage' src={digitalImage}></img>
                </div>
                <div className='platformList'>
                    {
                        platform.map((platform, i) =>
                            <div className='platformIcon' key={i}>
                                <p className='boldCaption'>{platform}</p>
                            </div>
                        )
                    }
                </div>
                <div className='titleAndDate'>
                    <p className='titleP'>{title}</p>
                    <p className='caption'>{releaseDate}</p>
                </div>
            </div>
            <div className='hypeButton' onClick=''>
                <p className='buttonText'>HYPE</p>
                <p className='buttonText'>3.1K</p>
            </div>
        </div>
    )
}

export default GameItem
