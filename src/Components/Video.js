import React from 'react'
import './Video.css'

function Video(props) {

    return (
        <div className='videoContainer'>
            <div className='videoCoverContainer'>
                <div className='addGradient'>
                    <img 
                        className='videoCover'
                        src={props.coverImageURL}
                        >
                    </img>
                </div>

                <p className='buttonText'>{props.videoTime}</p>

            </div>

            <div className='videoHeaderContainer'>
                <p>{props.title}</p>
                <div className='uploaderContainer'>
                    {props.uploader === 'IGN' ? <img 
                        className='uploaderLogo'
                        id='ignLogo' 
                        src='/Resources/logo/ign.jpg'>
                    </img> : null}
                    <p>{props.uploader}</p>
                </div>

            </div>
            
        </div>
    )
}

export default Video
