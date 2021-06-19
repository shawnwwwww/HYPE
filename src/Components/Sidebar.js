import React, { useState } from 'react'
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { useHistory } from 'react-router-dom';
import { SignInModal } from './SignInModal';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as AllReleasesIcon } from './icons/allreleases.svg';
import { ReactComponent as ProfileIcon } from './icons/profile.svg';
import { useAuth } from '../Contexts/AuthContext';



function Sidebar() {
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalSignIn, setShowModalSignIn] = useState(false);
  const { currentUser } = useAuth();

  const openModalProfile = e => {
    if (currentUser === null) {
      e.preventDefault();
      setShowModalProfile(prev => !prev);
    }
  };

  const openModalSignIn = e => {
    if (currentUser === null) {
      e.preventDefault();
      setShowModalSignIn(prev => !prev);
    }
  };

  const history = useHistory();
  const handleOnClick = (url) => {

    history.push(url);
  };

    return (
        <div className='Sidebar'>
            <div>
                <h1 id='companyName'>HYPE</h1>
                <ul className='SidebarList'>
                    {/* {SidebarData.map((val, key) => {
                        return (
                          <li className='row' id={window.location.pathname == val.link ? "active" : ""} key={key} onClick={() => handleOnClick(val.link)}> 
                            {""}
                                <div id='icon'>{val.icon}</div> {""}
                                <h6 id='title'>{val.title}</h6>
                          </li>
                        )
                    })} */}
                    <li>
                      <NavLink to="/" exact className='row' activeClassName="selected">
                        <HomeIcon id='icon' stroke='#DE5BFF'/>
                        <h6 id='title'>Home</h6>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/allreleases" className='row' activeClassName="selected">
                        <AllReleasesIcon id='icon' stroke='#DE5BFF'/>
                        <h6 id='title'>All Releases</h6>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/profile" className='row' activeClassName="selected" onClick={openModalProfile}>
                        <ProfileIcon id='icon' stroke='#DE5BFF'/>
                        <h6 id='title'>Profile</h6>
                      </NavLink>
                    </li>
                </ul>
                <SignInModal showModal={showModalProfile} setShowModal={setShowModalProfile} />
            </div>
            
            <Link to="/profile" className='UserProfile' onClick={openModalSignIn}>
                <img id='userAvatar' src={currentUser ? currentUser.photoURL : 'https://i.pinimg.com/564x/e5/4f/f1/e54ff1eafb5340f6c2ac57a720f4180f.jpg'} alt="User Avatar"></img>
                <h6>{currentUser ? currentUser.displayName : 'Sign In'}</h6>
            </Link>
            <SignInModal showModal={showModalSignIn} setShowModal={setShowModalSignIn}/>
            
        </div>
    );
}

export default Sidebar
