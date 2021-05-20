import React from 'react'
import './ActivityCard.css'
import '../App.css'

import { GameData } from './GameData'


export default function ActivityHypeListCard() {
    return (
        <div className='activityCard' id='hypeListCard'>
            <h5>YOUR HYPE LIST</h5>
            <div className='previewContainer'>
                {GameData.map((val, key) => {
                    return (
                        <div className='gamePreview compact' key={key}>
                            <img src={val.digitalImage}></img>
                            <p className='caption' id='previewTitle'>{val.title}</p>
                            <p className='caption'>{val.releaseDate}</p>
                        </div>
                    )})
                }
            </div>
            <button className= 'textOnly'>VIEW ALL</button>

                    
            
        </div>
    )
}
