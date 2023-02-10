import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';



import {RecentMessage} from '../components/MessageComp2/RecentMessage'
import {ConnectAccount} from '../components/MessageComp2/ConnectAccount'


function MessageComp2() {
    return (
        <div style={{"display":"flex","flexWrap":"wrap"}}>
            <ConnectAccount/>  
            <RecentMessage/> 
        </div>
    )
}

export default MessageComp2;