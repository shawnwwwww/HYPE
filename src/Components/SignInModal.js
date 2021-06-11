import React, {useRef, useEffect, useCallback, useState} from 'react';
import {useSpring, animated} from 'react-spring'
import './SignInModal.css'
import { ReactComponent as CloseIcon } from './icons/x.svg';
import { useAuth } from "../Contexts/AuthContext";



export const SignInModal = ({showModal, setShowModal}) => {
    const modalRef = useRef();
    const { signInWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);

    const animation = useSpring({
        config: {
            duaration: 100
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(15%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            await signInWithGoogle();
        } catch (error) {
            console.log('Failed to sign in: ' + error.message);
        }

        setLoading(false);
    };

    const keyPress = useCallback(e =>{
        if (e.key === 'Escape' && showModal){
            setShowModal(false);
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return(

        <>
            {showModal ? 

            <div className='signInPage' ref={modalRef} onClick={closeModal}>
            {/* <div className='signInPage'> */}
                <animated.div style={animation}>
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
                                {/* <X color="#DE5BFF" size={24} /> */}
                                <CloseIcon stroke='#DE5BFF'/>
                            </div>
                            
                        </div>

                        <button className='signInButton' onClick={handleGoogleSignIn} disabled={loading}>
                            <img className='signInLogo' id='googleIcon' src='/Resources/logo/google.png'></img>
                            <span id='googleButtonText'>Continue with Google</span>
                        </button>
                        
                        {/* <div className='signInButtonGroup'>
                            <div className='signInButton'>
                                <img className='signInLogo' id='googleIcon'
                                src='/Resources/logo/google.png' alt="Google Icon"></img>
                                <p className='buttonText' id='googleButtonText'>Continue with Google</p>
                            </div>
                        </div> */}
                    </div>
                        

                </div>

                </animated.div>

            </div>
            
            :null}
        </>

    );

};