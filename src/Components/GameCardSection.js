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
            <div className='gameCardContainer'>
                {GameData.map((val, key) => {
                    return (
                        <div className='gameItem' key={key}>
                            <GameItem 
                            physicalImage={val.physicalImage}
                            digitalImage={val.digitalImage} 
                            title={val.title}
                            releaseDate={val.releaseDate}
                            platform={val.platform}/>
                        </div>
                    )
                })}
            {/* grid */}
            </div>
            
        </div>
    )
}

GameCardSection.defaultProps = {
    title: 'Title',
}

export default GameCardSection
