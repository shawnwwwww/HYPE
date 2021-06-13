import React from 'react'
import './PromoBanner.css'

function PromoBanner(props) {

    // takes in url (in the future we need to replace this with a gamedetailpage link)
    // url, imgURL
    return (
        <div className='bannerContainer'>
            <img src={props.imgURL}>
            </img>
            <div className='promotedLabel'>
                <p className='buttonText'>PROMOTED</p>
            </div>
            <button>PREORDER NOW</button>
        </div>
    )
}

export default PromoBanner
