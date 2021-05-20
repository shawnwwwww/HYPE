import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <div>
                <h1>HYPE</h1>
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return (
                            <li className='row' id={window.location.pathname == val.link ? "active" : ""} key={key} onClick={()=> {window.location.pathname = val.link}}> 
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
