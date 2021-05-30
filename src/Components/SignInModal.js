import React from 'react';
import './SignInModal.css'

export const SignInModal = ({showModal, setShowModal}) => {

    return(

        <>
            {showModal ? 

            <div className='signInPage'>
                <div className='signInModalContainer'>
                    <div className='closeIcon'>

                    </div>
                    <div className='signInModalContent'>
                        <div className='signInModalHeader'>
                            <h4>SIGN IN</h4>
                            <ul>
                                <li>Add to your HYPE list.</li>
                                <li>Customize your notification preferences.</li>
                                <li>Receive updates for your HYPEd games.</li>
                            </ul>
                        </div>
                        <div className='signInButtonGroup'>
                            <div className='signInButton'>
                                <img className='signInLogo' id='googleIcon'></img>
                                <p className='buttonText'>Continue with Google</p>
                            </div>
                        </div>
                    </div>
                        

                </div>

            </div>
            
            :null}
        </>

    );

};