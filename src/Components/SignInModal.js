import React from 'react';
import './SignInModal.css'
import { X } from 'react-feather';


export const SignInModal = ({showModal, setShowModal}) => {

    return(

        <>
            {showModal ? 

            <div className='signInPage'>
                <div className='signInModalContainer'>
                    <div className='signInModalContent'>
                        <div className='signInHeaderAndCloseIcon'>
                            <div className='signInModalHeader'>
                                <h4>SIGN IN</h4>
                                <ul>
                                    <li><p>Add to your HYPE list.</p></li>
                                    <li><p>Customize your notification preferences.</p></li>
                                    <li><p>Receive updates for your HYPEd games.</p></li>
                                </ul>
                            </div>
                            <div className='closeIcon'>
                                {/* <img>
                                </img> */}
                                <X color="#DE5BFF" size={24} />
                            </div>
                            
                        </div>
                        
                        <div className='signInButtonGroup'>
                            <div className='signInButton'>
                                <img className='signInLogo' id='googleIcon'
                                src='/Resources/logo/google.png'></img>
                                <p className='buttonText' id='googleButtonText'>Continue with Google</p>
                            </div>
                        </div>
                    </div>
                        

                </div>

            </div>
            
            :null}
        </>

    );

};