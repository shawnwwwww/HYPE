import React, { useState, useEffect } from 'react';
import ActivityRankCard from '../Components/ActivityRankCard'
import ActivityHypeListCard from '../Components/ActivityHypeListCard'
import GameCardSection from '../Components/GameCardSection'
import NavHeaderMobile from '../Components/NavHeaderMobile'
import { GameData } from '../Database/GameData';
import { ReleasingSoon } from '../Database/ReleasingSoonData';
import { SummerGameFestKickOffData } from '../Database/SummerGameFestKickOffData';
import { WholesomeDirectData } from '../Database/WholesomeDirectData';
import GameItem from '../Components/GameItem';
import PromoBanner from '../Components/PromoBanner';
import { firebaseFirestore } from '../firebase';
import { parse } from 'json5';


const Home = () => {
   var [games, setGames] = useState({});
    var db_collection = firebaseFirestore.collection("game_data");
    
    // WholesomeDirectData.map((val, key) => {
    //     db_collection.add( {
    //         game_title: val.game_title,
    //         release_date: val.release_date,
    //         preorder_date: val.preorder_date,
    //         developer: val.developer,
    //         publisher: val.publisher,
    //         hype: parseInt(val.hype, 10),
    //         msrp: val.msrp,
    //         amazon_link: val.amazon_link,
    //         target_link: val.target_link,
    //         nintendo_eshop_link: val.nintendo_eshop_link,
    //         is_physical: parseInt(val.is_physical, 10),
    //         is_digital: parseInt(val.is_digital,),
    //         img_self_link: val.img_self_link,
    //         banner_img_self_link: val.banner_img_self_link,
    //         switch_img_self_link: val.switch_img_self_link,
    //         ps5_img_self_link: val.ps5_img_self_link,
    //         ps4_img_self_link: val.ps4_img_self_link,
    //         xbox_img_self_link: val.xbox_img_self_link,
    //         platforms: val.platforms,
    //         screenshot_self_links: val.screenshot_self_links,
    //         coverage_links: val.coverage_links
    //     } )
    // })

    // db_collection.doc('game').add
    // db_collection.get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc);
    //     });
    // })

    useEffect(() => {

    }, [])

    return (
        <div className="Home">
            <NavHeaderMobile />
            <div className='AppContainer'>
                <div className='ActivityCards'>
                    <ActivityRankCard />
                    <PromoBanner url='atlus.com' imgURl='../Resources/banner/smtv-banner.png' />
                    {/* <ActivityHypeListCard /> */}
                </div>
                {/* <GameCardSection  title='RELEASING SOON' type='section' location=''/>
        <GameCardSection  title='Wholesome Driect' type='section' location=''/>
        <GameCardSection  title='Summer Game Fest Kick Off' type='section' location=''/> */}

                <div className='sectionContainer'>
                    <div className='gridContainer'>
                            {
                                <GameCardSection  title='Releasing Soon' type='releasingSoon'/>
                            }
                    </div>
                </div>

                <div className='sectionContainer'>
                    <div className='gridContainer'>
                            {<GameCardSection  title='Wholesome Direct' type='wholesomeDirect'/>}
                    </div>
                </div>

                <div className='sectionContainer'>
                    <div className='gridContainer'>
                            {<GameCardSection  title='Summer Game Fest Kick Off' type='summerGameFestKickoff'/>}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;