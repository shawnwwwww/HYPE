import React from 'react'
import './ActivityCard.css'
import {GameData} from './GameData'



export default function ActivityRankCard() {
    return (
        <div className='activityCard' id='rankCard'>
            <h5>HYPE OF THE WEEK</h5>
            <div className='rankContainer'>
                <div className='rankItemContainer'>
                    <div className='numberHeader'>
                        <div className='coloredNumber one'>
                            <p className='coloredNumberText one'>1</p>
                        </div>
                        <div className='gameHeader'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'></img>
                            <p className='boldP'>Miitopia</p>
                        </div>
                    </div>

                    <div className='platformIcon'> <p className='boldCaption'>Switch</p>
                    </div>
                </div>

                <div className='rankItemContainer'>
                    <div className='numberHeader'>
                        <div className='coloredNumber two'>
                            <p className='coloredNumberText two'>2</p>
                        </div>
                        <div className='gameHeader'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'></img>
                            <p className='boldP'>Miitopia</p>
                        </div>
                    </div>

                    <div className='platformIcon'> <p className='boldCaption'>Switch</p>
                    </div>
                </div>

                <div className='rankItemContainer'>
                    <div className='numberHeader'>
                        <div className='coloredNumber three'>
                            <p className='coloredNumberText three'>3</p>
                        </div>
                        <div className='gameHeader'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'></img>
                            <p className='boldP'>Miitopia</p>
                        </div>
                    </div>

                    <div className='platformIcon'> <p className='boldCaption'>Switch</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
