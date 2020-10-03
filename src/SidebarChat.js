import React from 'react'
import './SidebarChat.css'
import { IconButton , Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebar__chat">
            <Avatar />
            <div className="sidebar__chatInfo">
                <h2>Room Name</h2>
                <p>this is the last message</p>

            </div>
            
        </div>
    )
}

export default SidebarChat
