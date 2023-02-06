import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import ComingSoonChat from '../components/MessageComp/ComingSoonChat'
import ComingSoonRoom from '../components/MessageComp/ComingSoonRoom'
import CreateNewChat from '../components/MessageComp/Create_New_Chat/CreateNewChat'
import MessageChat from '../components/MessageComp/Message_Chat/MessageChat'



function MessageComp() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
             
            <ComingSoonChat/> 
            <ComingSoonRoom/> 
            <CreateNewChat/> 
            <MessageChat/> 
            
        </div>
    )
}

export default MessageComp