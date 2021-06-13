import React from 'react';
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


const Home = () => {
  return (
    <div className="Home">
      <NavHeaderMobile />
      <div className='AppContainer'>
        <div className='ActivityCards'>
          <ActivityRankCard />
          <PromoBanner url='atlus.com' imgURl='../Resources/banner/smtv-banner.png'/>
          {/* <ActivityHypeListCard /> */}
        </div>
        {/* <GameCardSection  title='RELEASING SOON' type='section' location=''/>
        <GameCardSection  title='Wholesome Driect' type='section' location=''/>
        <GameCardSection  title='Summer Game Fest Kick Off' type='section' location=''/> */}

        <div className='sectionContainer'>
            <h4>Releasing Soon</h4>
            <div className='gridContainer'>
                <div className='gameCardContainer'>
                    {GameData.map((val, key) => {
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
        </div>

        <div className='sectionContainer'>
            <h4>Wholesome Direct</h4>
            <div className='gridContainer'>
                <div className='gameCardContainer'>
                    {WholesomeDirectData.map((val, key) => {
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
        </div>

        <div className='sectionContainer'>
            <h4>Summer Game Fest Kick Off</h4>
            <div className='gridContainer'>
                <div className='gameCardContainer'>
                    {SummerGameFestKickOffData.map((val, key) => {
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
        </div>
        
      </div>

    </div>
  );
};

export default Home;