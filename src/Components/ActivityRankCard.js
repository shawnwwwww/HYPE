import React from 'react'
import './ActivityCard.css'
// import {GameData} from './GameData'



export default class ActivityRankCard extends React.Component {

    state = {
        loading: true
    };

    async componentDidMount() {
        // const url = 'https://api.randomuser.me/';

        const url = '10.96.90.225:5000/games/hype-of-the-week';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
    return (
        
        <div className='activityCard' id='rankCard'>
            <h5>HYPE OF THE WEEK</h5>
            <div className='rankContainer'>
                <div className='rankItemContainer'>
                    <div className='numberHeader'>
                        <div className='coloredNumber one'>
                            <p className='coloredNumberText'>1</p>
                        </div>
                        <div className='gameHeaderRank'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg' alt="Miitopia"></img>
                            <p className='boldP'>Miitopia</p>
                        </div>
                    </div>

                    <div className='platformIcon'> <p className='boldCaption'>Switch</p>
                    </div>
                </div>

                <div className='rankItemContainer'>
                    <div className='numberHeader'>
                        <div className='coloredNumber two'>
                            <p className='coloredNumberText'>2</p>
                        </div>
                        <div className='gameHeaderRank'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg' alt="Miitopia"></img>
                            <p className='boldP'>Miitopia</p>
                        </div>
                    </div>

                    <div className='platformIcon'> <p className='boldCaption'>Switch</p>
                    </div>
                </div>

                <div className='rankItemContainer'>
                    <div className='numberHeader'>
                        <div className='coloredNumber three'>
                            <p className='coloredNumberText'>3</p>
                        </div>
                        <div className='gameHeaderRank'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg' alt="Miitopia"></img>
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
}
