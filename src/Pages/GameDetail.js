import React from 'react';
import ActivityRankCard from '../Components/ActivityRankCard'
import ActivityHypeListCard from '../Components/ActivityHypeListCard'
import './GameDetail.css'
import Dropdown from '../Components/Dropdown'


const GameDetail = () => {
  return (
    <div className="pageContainer">
      <div className='backNavContainer'>
        <div className='backIcon'></div>
        <h5>BACK</h5>
      </div>

      <div className='gameDetailContainer'>
        <div className='gameDetailCardContainer'>
          
        </div>
        <div className='gameDetailSectionContainer'>
            <h5>Purchase</h5>
            <div className='dropdownGroup'>
              <Dropdown isPlatform='true'/>
              <Dropdown isPlatform=''/>
            </div>

        </div>
      </div>
    </div>
    
  );
};

export default GameDetail;