import React from 'react'
import './Button.css'


function Button(props) {
    return (
        <div className='buttonContainer' id={props.id}>

            <p className='buttonText' id='buttonTextID'>{props.buttonText}</p>
            <img id='buttonIconID' alt={props.buttonText}></img>

        </div>
    )
}

export default Button
