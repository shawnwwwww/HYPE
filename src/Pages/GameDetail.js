import React from 'react';
import './GameDetail.css'
import Dropdown from '../Components/Dropdown'
import HypeButton from '../Components/HypeButton'
import PurchaseButton from '../Components/PurchaseButton'
import Video from '../Components/Video'
import { useLocation, useHistory } from "react-router-dom";


// Receives:
// switch_img_self_link, img_self_link, game_title, release_date, platforms

const GameDetail = () => {
    const location = useLocation();
    let history = useHistory();


  return (
    <div className="pageContainer">
      <div className='backNavContainer'>
        <button onClick={() => history.goBack()}>Back</button> 
      </div>

      <div className='gameDetailPageContainer'>
        <div className='gameDetailCardContainer'>
          <div className='gameDetailCard'>
            <div className='gameHeader'>
              <img 
                className='gameImage'
                src={location.state.img_self_link}
                alt="{location.state.title} Cover">

              </img>
              <div className='gameTitleHeader'>
                <p>{location.state.publisher}</p>
                <p className='titleP'>{location.state.game_title}</p>
              </div>

            </div>
          
            <div className='divider'></div>

            <div className='gameDetailInfoContainer'>
              {/* make it a grid */}

              <p className='textRightAligned'>Release Date</p>
              <p>{location.state.release_date}</p>

              <p className='textRightAligned'>Platform</p>
                <p>{location.state.platforms}</p>

              {/* <p className='textRightAligned'>Metacritics</p>
              <div className='metacritics'>
                <p>82</p>
              </div> */}

              <p className='textRightAligned'>MSRP</p>
              <p>{location.state.msrp}</p>

              <p className='textRightAligned'>Developer</p>
              {/* <p>Nintendo</p> */}
              <p>{location.state.developer}</p>


            </div>
          </div>
          <HypeButton className='hypeButton'/>
          
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
                src='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Customize_1_Wigs_SCRN.jpg'
                alt="Miitopia Game Capture">
              </img>
              <img 
                className='screenshotItem' 
                src='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Customize_2_Roles_Cleric_SCRN.jpg'
                alt="Miitopia Game Capture">
              </img>
              <img 
                className='screenshotItem' 
                src='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Improvements_4_Graphics_Dragon_SCRN.jpg'
                alt="Miitopia Game Capture">
              </img>

            </div>
          </div>

          <div className='sectionContainer'>
            <h5>Coverage</h5>
            <div className='videoGroup'>
              {/* grid */}
              <Video 
                title='Miitopia - Review'
                uploader='IGN'
                coverImageURL='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Improvements_4_Graphics_Dragon_SCRN.jpg'
                videoTime='1:32'/>
              <Video 
              title='Miitopia - Review'
              uploader='IGN'
              coverImageURL='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Improvements_4_Graphics_Dragon_SCRN.jpg'
              videoTime='1:32'/>
              <Video 
              title='Miitopia - Review'
              uploader='IGN'
              coverImageURL='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Improvements_4_Graphics_Dragon_SCRN.jpg'
              videoTime='1:32'/>
              <Video 
              title='Miitopia - Review'
              uploader='IGN'
              coverImageURL='https://www.nintendo.com/content/dam/noa/en_US/games/switch/m/miitopia-switch/egdp/Switch_Miitopia_eGDP_Improvements_4_Graphics_Dragon_SCRN.jpg'
              videoTime='1:32'/>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
};

export default GameDetail;