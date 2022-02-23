import { Avatar } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chat.css';

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https:avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat_headerInfo'>
                    <h3> Room Name</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                <p className='chat_message chat_receiver'>
                    <span className='chat_name'>Joyeta Saha</span>
                    Hey Guys
                    <span className='chat_timestamp'>3:52pm</span>
                </p>

            </div>
            <div className='chat_footer'>

            </div>
        </div>
    )
}

export default Chat