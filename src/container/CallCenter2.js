import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import AddAgendaItems from '../components/CallCenter2/AddAgendaItems'
import AddPreMeetingNotes from '../components/CallCenter2/AddPreMeetingNotes'
import AddUpNext from '../components/CallCenter2/AddUpNext'
import ChooseAttach from '../components/CallCenter2/ChooseAttach'
import ConnectAcc from '../components/CallCenter2/ConnectAcc'

import ChooseAttach1 from '../components/CallCenter2/Choose_Attachment/ChooseAttach'

function CallCenter2() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
             <AddAgendaItems/>  
             <AddPreMeetingNotes/>  
             <AddUpNext/>  
            {/* <ChooseAttach/>  */}
            <ChooseAttach1/> 
             <ConnectAcc/>  
        </div>
    )
}

export default CallCenter2