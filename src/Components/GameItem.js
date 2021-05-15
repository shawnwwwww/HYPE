import React from 'react'
import './GameItem.css'
import {GameData} from './GameData'

function GameItem({title,imageUrl,body}) {
    return (
        <div className='card-container'>
            {GameData.map((val, key) => {
                return (
                    <div className='card'>
                        <div className='GameInfo'>
                            
                            <div className='imageContainer'> 
                                <img className='physicalImage' src={val.physicalImage}></img>
                                <img className='digitalImage' src={val.digitalImage}></img>
                            </div>
                            <div className='platformList'>
                                <div className='platformIcon'> <p className='boldCaption'>{val.Platform}</p>
                                </div>
                            </div>
                            <div className='titleAndDate'>
                                <p className='titleP'>{val.title}</p>
                                <p className='caption'>{val.releaseDate}</p>
                            </div>
                        </div>
                        <div className='hypeButton' onClick=''>
                            <p className='buttonText'>HYPE</p>
                            <p className='buttonText'>3.1K</p>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default GameItem;
