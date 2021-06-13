import React from 'react'
import './GameItem.css'
import HypeButton from './HypeButton'
import { useHistory, Link } from 'react-router-dom';


function GameItem({ switch_img_self_link, img_self_link, game_title, release_date, platforms, developer, publisher, msrp, is_physical, is_digital}) {
    const history = useHistory();

    const handleOnClick = () => {
        history.push({
            pathname: '/gamedetail',
            state: {
                switch_img_self_link: switch_img_self_link,
                img_self_link: img_self_link,
                game_title: game_title,
                release_date: release_date,
                platforms: platforms,
                developer: developer,
                publisher: publisher,
                msrp: msrp,
                is_physical: is_physical,
                is_digital: is_digital,
            }
        });
    };

    return (
        <div className='card'>
            <div className='GameInfo'>    

            {/* digital only */}
            {is_physical === '0' ? 
            
            <div className='imageContainer digitalOnly' onClick={() => handleOnClick()}> 
                <div className='mediaFormLabel'>
                    <p className='buttonText'>DIGITAL</p>
                </div>
                <img className='digitalImage' src={img_self_link} alt="Digital copy of {game_title}"></img>
            </div> :null}  

            {/* digital only */}
            {is_physical === '1'  && is_digital === '1'? 
            
            <div className='imageContainer' onClick={() => handleOnClick()}> 
                    <img className='physicalImage' src={switch_img_self_link} alt="Physical copy of {game_title}"></img>
                    <img className='digitalImage' src={img_self_link} alt="Digital copy of {game_title}"></img>
            </div> :null}  

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
                    <p className='titleP' onClick={() => handleOnClick()}>{game_title}</p>
                    <p className='caption'>{release_date}</p>
                </div>
            </div>
            <HypeButton />
        </div>
    )
}

export default GameItem
