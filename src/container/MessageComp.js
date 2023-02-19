import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
// import ComingSoonChat from '../components/MessageComp/ComingSoonChat'
// import ComingSoonRoom from '../components/MessageComp/ComingSoonRoom'
// import CreateNewChat from '../components/MessageComp/Create_New_Chat/CreateNewChat'
import MessageChat from '../components/MessageComp/Message_Chat/MessageChat'



function MessageComp() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
             
            <MessageChat/> 
            
        </div>
    )
}

export default MessageComp