import React from 'react'
import SMTVid from '../BoostCardSrc/vid/testVid.mp4'
import logo from '../BoostCardSrc/logo/SMTlogo.png'
import HypeButton from './HypeButton'

import './BoostCard.css'

function BoostCard() {

        const handleOnMouseOver = e =>{
            e.currentTarget.play();
        }

        const handleOnMouseOut = e =>{
            e.currentTarget.pause();
        }


    return (
        <div className='boostCardContainer'>
            <img src={logo} className='boostCardLogo'>
            </img>
            <div className='hypeButtonDiv'>
                <HypeButton/>

            </div>
            <video
                loop
                muted
                source src={SMTVid} 
                type='video/mp4'
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                className='boostCardVideo'
            >
            </video>
        </div>
    )
}

export default BoostCard


