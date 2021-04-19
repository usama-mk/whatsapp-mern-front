import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import Search from '@material-ui/icons/Search';
import React from 'react';
import './Chat.css';

function Chat() {
    return (
        <div className="chat">

{/* Chat Header */}
            <div className="chat__header" >
            <Avatar/>

            <div className="chat__headerInfo" >
            <h3>Room Name</h3>
            <p>Last seen at...</p>
            </div>

            <div className="chat_headerRight">
                <IconButton>
                    <Search/>
                </IconButton>

                <IconButton>
                   <AttachFileIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>

            </div>

{/* Chat body */}
            <div className="chat__body">
                 <p className="chat__message" >
                     <span className="chat__name">
                        Usama
                     </span>
                     This is a message

                     <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                     </span>
                 </p>

                 <p className="chat__message chat__reciever" >
                     <span className="chat__name">
                        Usama
                     </span>
                     This is a message

                     <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                     </span>
                 </p>


                 
            </div>

{/* Chat footer */}
        <div className="chat__footer">
            <InsertEmoticonIcon/>
            <form>
                <input placeholder="Type a message" type="text" />
                <button type="submit" >Send a message</button>
            </form>
            <MicIcon/>
        </div>
        </div>
    )
}

export default Chat
