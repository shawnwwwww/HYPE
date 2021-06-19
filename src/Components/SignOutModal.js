import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import './SignOutModal.css';
import { ReactComponent as CloseIcon } from './icons/x.svg';
import { useAuth } from '../Contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export const SignOutModal = ({showModal, setShowModal, onPrivateRoute}) => {
    const modalRef = useRef();
    const { signOut } = useAuth();
    const history = useHistory();

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

    const cancelModal = () => {
        setShowModal(false);
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            /* Signing out on private routes should automatically redirect the user if sign out was successful.
            If signing out on a non-private route then close the modal and redirect manually. */
            if (!onPrivateRoute) {
                setShowModal(false);
                history.push('/home');
            }
        } catch (error) {
            console.log('Failed to sign out: ' + error.message);
        }
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

            <div className='signOutPage' ref={modalRef} onClick={closeModal}>
            {/* <div className='signOutPage'> */}
                <animated.div style={animation}>
                <div className='signOutModalContainer'>
                    <div className='signOutModalContent'>
                        <div className='signOutHeaderAndCloseIcon'>
                            <div className='signOutModalHeader'>
                                <h4>Sign Out?</h4>
                            </div>
                            <div className='closeIcon'>
                                {/* <img>
                                </img> */}
                                {/* <X color="#DE5BFF" size={24} /> */}
                                <CloseIcon stroke='#DE5BFF'/>
                            </div>
                            
                        </div>

                        <button className='signOutButton' onClick={handleSignOut}>Yes, sign out</button>
                        <button className='cancelButton' onClick={cancelModal}>Cancel</button>
                        
                    </div>
                        

                </div>

                </animated.div>

            </div>
            
            :null}
        </>

    );

};