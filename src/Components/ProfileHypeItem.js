import React from 'react'
import './ProfileHypeItem.css'

function ProfileHypeItem(props) {
    return (
        <div className='profileItemContainer'>
            <img src={props.imageLink} alt={props.title}></img>
            <div className='itemHeader'>
                <p>{props.title}</p>
                <p className='caption'>{props.releaseDate}</p>
            </div>
        </div>
    )
}

export default ProfileHypeItem
