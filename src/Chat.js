import { Avatar ,IconButton } from '@material-ui/core'
import { SearchOutlined,AttachFile,MoreVert, InsertEmoticon  } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react'
import "./Chat.css"
import axios from './axios'

function Chat({ messages }) {
    const [input , setInput]= useState("")
    
    
    const sendMessage = async (event) =>{
       event.preventDefault();
        console.log("hello");
       await axios.post('/messages/new',{
                message: input,
                name: "Veer",
                timestamp: "Just Now!",
                received: true,
        });
        console.log(input);
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at.....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        < SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        < MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) =>(

                        <p className={`chat__message ${message.received && "chat__reciever"} `}>
                        <span className="chat__name">{message.name}</span>
                            {message.message}

                        <span className="chat__timestamp">
                            {message.timestamo}
                        </span>
                        </p>

                ))}
               
            </div>
            <div className="chat__footer">
                    <IconButton >
                        < InsertEmoticon />
                    </IconButton>
                    
                    <form >
                        <input 
                        
                        value={input} 
                        onChange={(e)=> setInput(e.target.value)} 
                        type="text" 
                        placeholder="Type a message"
                        />
                        <button onClick={sendMessage} type="submit" >
                            Send message
                            </button>
                    </form>
                    <IconButton >
                        <MicIcon />
                        </ IconButton>
            </div>
        </div>
    )
}

export default Chat
