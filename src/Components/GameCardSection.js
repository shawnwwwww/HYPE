import React from 'react'
import  GameItem  from './GameItem'
import  Dropdown  from './Dropdown'
import { GameData } from './GameData'
import './GameCardSection.css'


function GameCardSection(props) {
    return (
        <div className='sectionContainer'>
            <div className='header'>
                <h4>{props.title}</h4>
                <div className='dropdownGroup'>
                    <Dropdown isPlatform='true'/>
                    <Dropdown isPlatform=''/>

                </div>
            </div>

            {props.type === 'section' ?
                <div className='gridContainer'>
                    <div className='gameCardContainer'>
                        {GameData.map((val, key) => {
                            return (
                                <div className='gameItem' key={key}>
                                    <GameItem 
                                    switch_img_self_link={val.switch_img_self_link}
                                    img_self_link={val.img_self_link} 
                                    game_title={val.game_title}
                                    release_date={val.release_date}
                                    platforms={val.platforms}/>
                                </div>
                            )
                        })}
                    {/* grid */}
                    </div>
                </div>
            :null}

            {props.type === 'allReleases' ?
                <div className='gridContainerAllreleases'>
                    <div className='gameCardContainerAllreleases'>
                        {GameData.map((val, key) => {
                            return (
                                <div className='gameItemAllreleases' key={key}>
                                    <GameItem 
                                    switch_img_self_link={val.switch_img_self_link}
                                    img_self_link={val.img_self_link} 
                                    game_title={val.game_title}
                                    release_date={val.release_date}
                                    platforms={val.platforms}/>
                                </div>
                            )
                        })}
                    {/* grid */}
                    </div>
                </div>
            :null}


            

            
            
        </div>

        
    )
}

GameCardSection.defaultProps = {
    game_title: 'Title',
}

export default GameCardSection
