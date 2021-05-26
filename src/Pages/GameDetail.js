import React from 'react';
import ActivityRankCard from '../Components/ActivityRankCard'
import ActivityHypeListCard from '../Components/ActivityHypeListCard'
import './GameDetail.css'
import Dropdown from '../Components/Dropdown'
import HypeButton from '../Components/HypeButton'
import GameData from '../Components/GameData'
import PurchaseButton from '../Components/PurchaseButton'
import Video from '../Components/Video'


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
          <div className='sectionContainer'>
            <h5>Purchase</h5>
            <div className='dropdownGroup'>
              <Dropdown isPlatform='true'/>
              <Dropdown isPlatform=''/>
            </div>
            <div className='purchaseButtonGroup'>
              {/* grid */}
              <PurchaseButton retailer='amazon' preorderBonus={true}/>
              <PurchaseButton retailer='bestbuy'/>
              <PurchaseButton retailer='eshop'/>
              <PurchaseButton retailer='target'/>


            </div>
          </div>

          <div className='sectionContainer'>
            <h5>Screenshot</h5>
            <div className='screenshotArray'>
              <img 
                className='screenshotItem' 
                src='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Customize_1_Wigs_SCRN.jpg'>
              </img>
              <img 
                className='screenshotItem' 
                src='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Customize_2_Roles_Cleric_SCRN.jpg'>
              </img>
              <img 
                className='screenshotItem' 
                src='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Improvements_4_Graphics_Dragon_SCRN.jpg'>
              </img>

            </div>
          </div>

          <div className='sectionContainer'>
            <h5>Coverage</h5>
            <div className='videoGroup'>
              {/* grid */}
              <Video 
                title=''
                uploader=''
                coverImageURL=''
                videoTime=''/>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
};

export default GameDetail;