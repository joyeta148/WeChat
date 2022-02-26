import { Avatar } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';

function Chat() {

    const [input, setInput] = useState("");
    // const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name));
        }
    }, [roomId]);

    // useEffect(() => {
    //     setSeed();
    // }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You have typed ", input);
        setInput("");
    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https:avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />
                <div className='chat_headerInfo'>
                    <h3>{roomName}</h3>
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
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className='chat_name'>Joyeta Saha</span>
                    Hey Guys
                    <span className='chat_timestamp'>3:52pm</span>
                </p>

            </div>
            <div className='chat_footer'>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat