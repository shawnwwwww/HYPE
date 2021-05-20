import React from 'react';
import ActivityRankCard from '../Components/ActivityRankCard'
import ActivityHypeListCard from '../Components/ActivityHypeListCard'

const Home = () => {
  return (
    <div className="Home">
      <div className='AppContainer'>
        <div className='ActivityCards'>
          <ActivityRankCard />
          <ActivityHypeListCard />

        </div>


      </div>

    </div>
  );
};

export default Home;