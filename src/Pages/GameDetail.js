import React from 'react';
import ActivityRankCard from '../Components/ActivityRankCard'
import ActivityHypeListCard from '../Components/ActivityHypeListCard'
import './GameDetail.css'
import Dropdown from '../Components/Dropdown'
import HypeButton from '../Components/HypeButton'
import GameData from '../Components/GameData'


const GameDetail = () => {
  return (
    <div className="pageContainer">
      <div className='backNavContainer'>
        <div className='backIcon'></div>
        <h5>BACK</h5>
      </div>

      <div className='gameDetailPageContainer'>
        <div className='gameDetailCardContainer'>
          <div className='gameDetailCard'>
            <div className='gameHeader'>
              <img 
                className='gameImage'
                src='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'>

              </img>
              <div className='gameTitleHeader'>
                <p>Nintendo</p>
                <p className='titleP'>Miitopia</p>
              </div>

            </div>
          
            <div className='divider'></div>

            <div className='gameDetailInfoContainer'>
              {/* make it a grid */}

              <p className='textRightAligned'>Release Date</p>
              <p>5/21/2021</p>

              <p className='textRightAligned'>Platform</p>
              <p>Switch</p>

              <p className='textRightAligned'>Metacritics</p>
              <div className='metacritics'>
                <p>82</p>
              </div>

              <p className='textRightAligned'>MSRP</p>
              <p>$49.99</p>

              <p className='textRightAligned'>Developer</p>
              <p>Nintendo</p>

            </div>
          </div>
          <HypeButton className='ypeButton'/>
          
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