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
                                <div id='title' className='h6'>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className='UserProfile'>
                <img></img>
                <h6>Nathan</h6>
            </div>
            
        </div>
    );
}

export default Sidebar
