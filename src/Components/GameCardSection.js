import React, { useState, useEffect } from 'react'
import  GameItem  from './GameItem'
import './GameCardSection.css'
import firebase from 'firebase'
import { gameConverter, getCount } from './FirebaseHelpers'


var storage = firebase.storage();

function GameCardSection(props) {
    const [game_data, setGameData] = useState([]);

    let items;
    
    const ref = firebase.firestore();

    function formatDate(date) {
        let month = date.getMonth() + 1;
        return date.getFullYear() + "-" + month + "-" + date.getDate();
    }

    function getGameData(type) {
        switch (type) {
            case 'allReleases':
                // get {num} of all releases, sorted by newest released?
                ref.collection('game_data').withConverter(gameConverter).get().then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setGameData(items);
                    console.log(items);
                })
                break;
            case 'releasingSoon':
                // get {num} releases that are releasing soon
                ref.collection('game_data').withConverter(gameConverter).get().then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setGameData(items);
                    console.log(items);
                })
                break;
            case 'wholesomeDirect':
                ref.collection('game_data').withConverter(gameConverter).get().then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setGameData(items);
                    console.log(items);
                })
                break;
            case 'summerGameFestKickoff':
                ref.collection('game_data').withConverter(gameConverter).get().then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setGameData(items);
                    console.log(items);

                })
                break;
        }
    }

    useEffect(() => {
        getGameData(props.type);
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

            {props.type !== 'allReleases' ?
                <div className='gridContainer'>
                    <div className='gameCardContainer'>
                        {Object.keys(game_data).map((val, key) => {
                            return (
                                <div className='gameItem' key={key}>
                                    <GameItem 
                                    switch_img_self_link={game_data[val].switch_img_self_link}
                                    img_self_link={game_data[val].img_self_link} 
                                    game_title={game_data[val].game_title}
                                    release_date={formatDate(game_data[val].release_date.toDate())}
                                    platforms={game_data[val].platforms}
                                    developer={game_data[val].developer}
                                    publisher={game_data[val].publisher}
                                    msrp={game_data[val].msrp}
                                    is_physical={game_data[val].is_physical}
                                    is_digital={game_data[val].is_digital}
                                    hypes={game_data[val].hype}
                                    game_id={game_data[val].game_id}
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
                        {Object.keys(game_data).map((val, key) => {
                                return (
                                    <div className='gameItem' key={key}>
                                        <GameItem 
                                        switch_img_self_link={game_data[val].switch_img_self_link}
                                        img_self_link={game_data[val].img_self_link} 
                                        game_title={game_data[val].game_title}
                                        release_date={formatDate(game_data[val].release_date.toDate())}
                                        platforms={game_data[val].platforms}
                                        developer={game_data[val].developer}
                                        publisher={game_data[val].publisher}
                                        msrp={game_data[val].msrp}
                                        is_physical={game_data[val].is_physical}
                                        is_digital={game_data[val].is_digital}
                                        hypes={game_data[val].hype}
                                        game_id={game_data[val].game_id}
                                        />
                                    </div>
                                )
                            })}
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
