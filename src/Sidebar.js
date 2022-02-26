import React, { useEffect, useState } from 'react';

import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';


import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import db from './firebase';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ));
    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar />
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>
            <div className='sidebar_chats'>
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                        name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar