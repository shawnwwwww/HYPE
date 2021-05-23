import React from 'react'
import './GameItem.css'
import HypeButton from './HypeButton'
import { Redirect, useHistory, Link } from 'react-router-dom';
import GameDetail from '../Pages/GameDetail';


function GameItem({ physicalImage, digitalImage, title, releaseDate, platform }) {
    const history = useHistory();

  const handleOnClick = () => {
      <Redirect to='/gamedetail' render={(props) => <GameDetail {...props} />} />
      history.push('/gamedetail');
    };

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
                <p className='titleP'>{<Link to='/gamedetail'>{title}</Link> }</p>
                    <p className='caption'>{releaseDate}</p>
                </div>
            </div>
            <HypeButton />
        </div>
    )
}

export default GameItem
