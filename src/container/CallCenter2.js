import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import AddAgendaItems from '../components/CallCenter2/AddAgendaItems'
import AddPreMeetingNotes from '../components/CallCenter2/AddPreMeetingNotes'
import AddUpNext from '../components/CallCenter2/AddUpNext'
// import ChooseAttach from '../components/CallCenter2/ChooseAttach'
import ConnectAcc from '../components/CallCenter2/ConnectAcc'



function CallCenter2() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <AddAgendaItems/> 
            <AddPreMeetingNotes/> 
            <AddUpNext/> 
            {/* <ChooseAttach/>  */}
            <ConnectAcc/> 
        </div>
    )
}

export default CallCenter2