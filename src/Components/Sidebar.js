import React from 'react'
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { Redirect, useHistory, withRouter } from 'react-router-dom';


function Sidebar() {
  const history = useHistory();
  const handleOnClick = (url) => {
    console.log(url);
    //< Redirect to={url} />
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
            
            <div className='UserProfile'>
                <img src='https://i.pinimg.com/564x/e5/4f/f1/e54ff1eafb5340f6c2ac57a720f4180f.jpg'></img>
                <h6>Sign In</h6>
            </div>
            
        </div>
    );
}

export default Sidebar
