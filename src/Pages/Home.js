import React from 'react';
import ActivityRankCard from '../Components/ActivityRankCard'
import ActivityHypeListCard from '../Components/ActivityHypeListCard'
import GameCardSection from '../Components/GameCardSection'


const Home = () => {
  return (
    <div className="Home">
      <div className='AppContainer'>
        <div className='ActivityCards'>
          <ActivityRankCard />
          <ActivityHypeListCard />
        </div>
        <GameCardSection  title='RELEASING SOON'/>
        <GameCardSection  title='Indie ALLSTARS'/>
        <GameCardSection  title='TOP HITS'/>
      </div>

    </div>
  );
};

export default Home;