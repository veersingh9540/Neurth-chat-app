import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios';


function App() {
  const [messages , setMessages]= useState([]);
  useEffect(()=>{
    
    axios.get('/messages/sync').then(response =>{
        
        setMessages(response.data)

      })
      
  },[messages])
  useEffect(()=>{

    // once on load 
    const pusher = new Pusher('d2f0cdb2c450754a60df', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages , data ])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };

  },[messages])
  return (
    <div className="App">
     <div className="app__body">
        {/* sidebar component  */}
          <Sidebar />

        {/* chat component */}
          <Chat messages={messages}/>
     </div>
     
    </div>
  );
}

export default App;
