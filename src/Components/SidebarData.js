import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import GridOnRoundedIcon from '@material-ui/icons/GridOnRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';


export const SidebarData = [
    {
        title: "Home", 
        icon: <HomeRoundedIcon />, 
        link: "/home",
    },
    {
        title: "All Releases", 
        icon: <GridOnRoundedIcon />, 
        link: "/allreleases",
    },
    {
        title: "Profile", 
        icon: <PersonRoundedIcon />, 
        link: "/profile",
    }

]
