import React, { useState } from 'react'
import './GameItem.css'
import HypeButton from './HypeButton'
import { useHistory, Link } from 'react-router-dom';
import firebase from 'firebase'
import { useAuth } from '../Contexts/AuthContext';
import { SignInModal } from './SignInModal';
import HypeButtonMock from './HypeButtonMock';

function GameItem({ switch_img_self_link, img_self_link, game_title, release_date, platforms, developer, publisher, msrp, is_physical, is_digital, hypes, game_id}) {
    const history = useHistory();
    const storageRef = firebase.storage().ref();
    const { currentUser } = useAuth();

    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    // what is this
    // const db = firebase.database();
    // var hypeCountRef = firebase.database().ref('game_data/' + game_id + '/hype');
    // hypeCountRef.on('value', (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data);

    //     // updateStarCount(postElement, data);
    // });
      

    const handleOnClick = () => {
        history.push({
            pathname: '/gamedetail',
            state: {
                switch_img_self_link: switch_img_self_link,
                img_self_link: img_self_link,
                game_title: game_title,
                release_date: release_date,
                platforms: platforms,
                developer: developer,
                publisher: publisher,
                msrp: msrp,
                is_physical: is_physical,
                is_digital: is_digital,
                hypes: hypes,
            }
        });
    };

    return (
        <div className='card'>
            <div className='GameInfo'>    

            {/* digital only */}
            {is_physical == false ? 
            
            <div className='imageContainer digitalOnly' onClick={() => handleOnClick()}> 

                <div className='mediaFormLabel'>
                    <p className='buttonText'>DIGITAL</p>
                </div>
                <img className='digitalImage' src={img_self_link} alt="Digital copy of {game_title}"></img>
            </div> :null}  

            {/* digital only */}
            {is_physical == true  && is_digital == true? 
            
            <div className='imageContainer' onClick={() => handleOnClick()}> 
                <img className='physicalImage' src={switch_img_self_link} alt="Physical copy of {game_title}"></img>
                <img className='digitalImage' src={img_self_link} alt="Digital copy of {game_title}"></img>
            </div> :null}  

                <div className='platformList'>
                    {
                        platforms.map((platforms, i) =>
                            <div className='platformIcon' key={i}>
                                <p className='boldCaption'>{platforms}</p>
                            </div>
                        )
                    }
                </div>
                <div className='titleAndDate'>
                    <p className='titleP' onClick={() => handleOnClick()}>{game_title}</p>
                    <p className='caption'>{release_date}</p>
                </div>
            </div>

            {currentUser === null ? <HypeButtonMock hypes={10}/> : <HypeButton hypes={hypes}/>}

        </div>
    )
}

export default GameItem
