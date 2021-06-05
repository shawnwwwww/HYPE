import React from 'react';
import GameCardSection from '../Components/GameCardSection'
import './AllReleases.css'



const AllReleases = () => {
    return (

        <div className='pageContainer'> 
            <GameCardSection  title='ALL RELEASES' type='allReleases'/>
        </div>

    );

}

export default AllReleases;