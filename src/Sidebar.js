import React from 'react';
import './Sidebar.css';
import {IconButton} from'@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

 

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Top Left Header */}
            <div className="sidebar__header" >
            <Avatar src='https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg'/>
                <div className="sidebar__headerRight" >
                       <IconButton>
                       <DonutLargeIcon/>
                       </IconButton>
                       <IconButton>
                       <ChatIcon/>
                       </IconButton>
                       <IconButton>
                       <MoreVert/>
                       </IconButton>
                </div>
            </div>

            {/* Search Input */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer" >
                    <SearchIcon/>
                    <input  placeholder="Search or start a new chat" type="text" />

                </div>
            </div>

            {/* Sidebar Chats */}
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>

        </div>
    )
}

export default Sidebar
