import React, { useState, useEffect } from 'react'
import  GameItem  from './GameItem'
import  Dropdown  from './Dropdown'
import { GameData } from '../Database/GameData'
import './GameCardSection.css'
import firebase from 'firebase'
// import { useAuth } from '../Contexts/AuthContext';
// import { SignInModal } from './SignInModal';


var storage = firebase.storage();

function GameCardSection(props) {
    // const importLocation = props.location;
    const [game_data, setGameData] = useState([]);
    // const storageRef = firebase.storage().ref();
    // const { currentUser } = useAuth();

    
    const ref = firebase.firestore().collection('game_data');
    console.log(ref);
    
    // realtime update
    // function getGameData() {
    //     ref.onSnapshot((querySnapshot) => {
    //         const items = [];
    //         querySnapshot.forEach ((doc) => {
    //             items.push(doc.data());
    //         });
    //         setGameData(items);
    //     });
    // }

    function getGameData() {
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setGameData(items);
        })
    }

    useEffect(() => {
        getGameData();
    }, []);

    return (
        <div className='sectionContainer'>
            <div className='header'>
                <h4>{props.title}</h4>
                {/* <div className='dropdownGroup'>
                    <Dropdown isPlatform='true'/>
                    <Dropdown isPlatform=''/>

                </div> */}
            </div>

            {props.type === 'section' ?
                <div className='gridContainer'>
                    <div className='gameCardContainer'>
                        {game_data.map((val, key) => {
                            return (
                                <div className='gameItem' key={key}>
                                    <GameItem 
                                    switch_img_self_link={val.switch_img_self_link}
                                    img_self_link={val.img_self_link} 
                                    game_title={val.game_title}
                                    release_date={val.release_date}
                                    platforms={val.platforms}
                                    developer={val.developer}
                                    publisher={val.publisher}
                                    msrp={val.msrp}
                                    is_physical={val.is_physical}
                                    is_digital={val.is_digital}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            :null}

            {props.type === 'allReleases' ?
                <div className='gridContainerAllreleases'>
                    <div className='gameCardContainerAllreleases'>
                        {game_data.map((val) => val.visibility === true ? (
                            // <GameItem game={game.game_title}/>
                            // <p>{game.game_title}</p>
                            // <div key={game.game_id}>
                            //     <p>{game.game_title}</p>
                            // </div>
                            <div className='gameItemAllreleases' key={val.game_id}>
                                <GameItem 
                                switch_img_self_link={val.switch_img_self_link}
                                img_self_link={val.img_self_link} 
                                game_title={val.game_title}
                                release_date={val.release_date}
                                platforms={val.platforms}
                                developer={val.developer}
                                publisher={val.publisher}
                                msrp={val.msrp}
                                is_physical={val.is_physical}
                                is_digital={val.is_digital}
                                />
                            </div>
                        ) : null )}
                        {/* {game_data.map((val, key) => {
                            return (
                                <div className='gameItemAllreleases' key={key}>
                                    <GameItem 
                                    switch_img_self_link={val.switch_img_self_link}
                                    img_self_link={val.img_self_link} 
                                    game_title={val.game_title}
                                    release_date={val.release_date}
                                    platforms={val.platforms}
                                    developer={val.developer}
                                    publisher={val.publisher}
                                    msrp={val.msrp}
                                    is_physical={val.is_physical}
                                    is_digital={val.is_digital}
                                    />
                                </div>
                            )
                        })} */}
                    {/* grid */}
                    </div>
                </div>
            :null}


            

            
            
        </div>

        
    )
}

GameCardSection.defaultProps = {
    game_title: 'Title',
}

export default GameCardSection
