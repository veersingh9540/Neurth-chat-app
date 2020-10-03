import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton , Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat'

function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">


                <div className="sidebar__header__left">
                       <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQF_ch0DRk2FdQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=dFzXTKG_vN-Ifa_5p8CKfYsmzvhdDod2UcNPzcx8quE" />
                </div>
                <div className="sidebar__header__right">
                    <IconButton >
                    < DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                    <ChatIcon />
                    </IconButton>
                    <IconButton >
                    < MoreVertIcon />
                    </IconButton>
                </div>
                
            </div>
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                    <IconButton >
                        <SearchOutlined  /> 
                    </ IconButton >    
                        <input type="text" placeholder="Search or start new chat" />
                    </div>
                </div>
            
                <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
        </div>
    )
}


export default sidebar
