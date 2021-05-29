import React, {useState} from 'react'
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import {SignInModal} from './SignInModal';


function Sidebar() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const history = useHistory();
  const handleOnClick = (url) => {

    history.push(url);
  };

    return (
        <div className='Sidebar'>
            <div>
                <h1>HYPE</h1>
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return (
                          <li className='row' id={val.link ? "active" : ""} key={key} onClick={() => handleOnClick(val.link)}> 
                            {""}
                                <div id='icon'>{val.icon}</div> {""}
                                <h6 id='title'>{val.title}</h6>
                          </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className='UserProfile' onClick={openModal}>
                <img src='https://i.pinimg.com/564x/e5/4f/f1/e54ff1eafb5340f6c2ac57a720f4180f.jpg'></img>
                <h6>Sign In</h6>
                <SignInModal showModal={showModal} setShowModal={setShowModal}/>
            </div>
            
        </div>
    );
}

export default Sidebar
