import React from 'react';
import ProfileHypeItem from '../Components/ProfileHypeItem';
import './Profile.css';
import '../Components/Button.css';
import Switch from '../Components/Switch';
import Button from '../Components/Button';
import { useAuth } from '../Contexts/AuthContext';


const Profile = () => {
    const { currentUser, signOut } = useAuth();

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log('Failed to sign out: ' + error.message);
        }
    };

    return (

        <div className='profilePageContainer'>
            <div className='profilePageHeader'>
                <div className='profileHeader'>
                    <img id='userAvatar' src={currentUser ? currentUser.photoURL : 'https://i.pinimg.com/564x/e5/4f/f1/e54ff1eafb5340f6c2ac57a720f4180f.jpg'} alt="User Avatar"></img>
                    <h1>{currentUser && currentUser.displayName}</h1>
                </div>
                <div className='hypePreference'>
                    <h5>HYPE Preference</h5>
                    <div className='preferenceContainer'>
                        <p id='header'>Send me an email reminder...</p>
                        <ul className='preferenceSettings'>
                            <li>
                                <p>On release day</p>
                                <Switch />
                            </li>
                            <li>
                                <p>One week before release</p>
                                <Switch />
                            </li>
                            <li>
                                <p>One week before release</p>
                                <Switch />
                            </li>
                            <li>
                                <p>One week before release</p>
                                <Switch />
                            </li>
                            <li>
                                <p>One week before release</p>
                                <Switch />
                            </li>

                        </ul>           
                    </div>

                    <button className='buttonContainer' id='buttonTextID' onClick={handleSignOut}>SIGN OUT</button>
                    {/* <Button id='signOutButton' buttonText='SIGN OUT'/> */}
                </div>
            </div>
            <div className='profileHypeList'>
                <h5>Your HYPE List</h5>
                <div className='profileHypeItemGroup'>
                    {/* grid */}
                    <ProfileHypeItem 
                        imageLink='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                    <ProfileHypeItem 
                        imageLink='https://upload.wikimedia.org/wikipedia/en/7/77/Miitopia_3DS.jpg'
                        title='Miitopia'
                        releaseDate='5/21/2021'
                    />
                </div>
            </div>

        </div>

    );
};

export default Profile;