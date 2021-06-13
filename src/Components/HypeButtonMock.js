import React, { useState } from 'react'
import './HypeButton.css'
import firebase from 'firebase'
import { useAuth } from '../Contexts/AuthContext';
import { SignInModal } from './SignInModal';

function HypeButtonMock(props) {

    const { currentUser } = useAuth();
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev);
      };


    return (
        <div className='hypeButtonContainer'>
            <div onClick={openModal} >
                <div className='hypeButton'
                    style={{
                        backgroundColor: 
                            'rgba(222, 91, 255, 0.04)'
                    }}
                    // onClick={this.handleClick}
                >

                    <p className='buttonText'>
                        HYPE
                    </p>

                    <p className='buttonText'>{props.hypeCount}</p>

                </div>

            </div>
            <SignInModal showModal={showModal} setShowModal={setShowModal}/>



        </div>

        
    )
}

export default HypeButtonMock
