import React from 'react';
import ProfileHypeItem from '../Components/ProfileHypeItem'
import './Profile.css'
import Switch from '../Components/Switch'


const Profile = () => {
    return (

        <div className='profilePageContainer'>
            <div className='profilePageHeader'>
                <div className='profileHeader'>

                </div>
                <div className='hypePreference'>
                    <h5>HYPE Preference</h5>
                    <div className='preferenceContainer'>
                        <p>Send me an email reminder...</p>
                        <ul className='preferenceSettings'>
                            <li>
                                <p>On release day</p>
                                <Switch />
                            </li>
                            <li>
                                <p>One week before release</p>
                            </li>

                        </ul>           
                    </div>
                </div>
            </div>
            <div className='profileHypeList'>
                <h5>Your HYPE List</h5>
                <div className='profileHypeItemGroup'>
                    {/* grid */}
                    <ProfileHypeItem 
                        imageLink=''
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink=''
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink=''
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink=''
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink=''
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                </div>
            </div>

        </div>

    );
};

export default Profile;