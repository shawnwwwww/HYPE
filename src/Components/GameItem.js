import React from 'react'
import './GameItem.css'
import HypeButton from './HypeButton'
import { useHistory, Link } from 'react-router-dom';


function GameItem({ switch_img_self_link, img_self_link, game_title, release_date, platforms }) {
    const history = useHistory();

    const handleOnClick = () => {
      history.push('/gamedetail');
    };

    return (
        <div className='card'>
            <div className='GameInfo'>          
                <div className='imageContainer' onClick={() => handleOnClick()}> 
                    <img className='physicalImage' src={switch_img_self_link}></img>
                    <img className='digitalImage' src={img_self_link}></img>
                </div>
                <div className='platformList'>
                    {
                        platforms.map((platforms, i) =>
                            <div className='platformIcon' key={i}>
                                <p className='boldCaption'>{platforms}</p>
                            </div>
                        )
                    }
                </div>
                <div className='titleAndDate'>
                    <p className='titleP'>{ <Link to='/gamedetail'>{game_title}</Link> }</p>
                    <p className='caption'>{release_date}</p>
                </div>
            </div>
            <HypeButton />
        </div>
    )
}

export default GameItem
