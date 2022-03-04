import { Avatar } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';

function Chat() {

    const [input, setInput] = useState("");
    // const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

            db.collection("rooms")
                .doc(roomId)
                .collection("messages").orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map(doc => doc.data()))
                })
        }
    }, [roomId]);

    // useEffect(() => {
    //     setSeed();
    // }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You have typed ", input);
        db.collection('rooms')
            .doc(roomId).collection('messages').add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
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
                {messages.map((message) => (
                    <p className={`chat_message ${true && "chat_receiver"}`}>
                        <span className='chat_name'>{message.name}</span>
                        {message.message}
                        <span className='chat_timestamp'>
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}


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