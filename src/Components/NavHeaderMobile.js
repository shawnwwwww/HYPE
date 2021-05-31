import React, {useState} from 'react'
import './NavHeaderMobile.css';
import { SignInModal } from './SignInModal';



function NavHeaderMobile() {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='navHeaderContainer'>
            <div></div>
            <h1>HYPE</h1>
            <img onClick={openModal} id='userAvatar' src='https://i.pinimg.com/564x/e5/4f/f1/e54ff1eafb5340f6c2ac57a720f4180f.jpg'></img>
            <SignInModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default NavHeaderMobile
