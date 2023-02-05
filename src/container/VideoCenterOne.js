import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CreateNewMeetingLoad from '../components/VideoCenterOne/CreateNewMeetingLoad'
import CreateNewMeetingGo from '../components/VideoCenterOne/CreateNewMeetingGo'
import ScheduleAMeeting from '../components/VideoCenterOne/ScheduleAMeeting'
import ReacordandTranscribeCall from '../components/VideoCenterOne/ReacordandTranscribeCall'
import JoinMeetingLoad from '../components/VideoCenterOne/JoinMeetingLoad'
import JoinMeetingGo from '../components/VideoCenterOne/JoinMeetingGo'
import WellMeeting from '../components/VideoCenterOne/WellMeeting'
import AskingJoinMeeting from '../components/VideoCenterOne/AskingJoinMeeting'

import CreateNewMeetingLoad1 from '../components/VideoCenterOne/Video Center One/Create_Meeting_Loading/CreateNewMeetingLoad'
import CreateNewMeetingGo1 from '../components/VideoCenterOne/Video Center One/Create_Meeting_Go/CreateNewMeetingGo'
import ScheduleAMeeting1 from '../components/VideoCenterOne/Video Center One/Schedule_Meeting/ScheduleAMeeting'
import ReacordandTranscribeCall1 from '../components/VideoCenterOne/Video Center One/Record_&_Transcribe_Call/ReacordandTranscribeCall'
import JoinMeetingLoad1 from '../components/VideoCenterOne/Video Center One/Join_Meeting_Loading/JoinMeetingLoad'
import JoinMeetingGo1 from '../components/VideoCenterOne/Video Center One/Join_Meeting_Go/JoinMeetingGo'
import WellMeeting1 from '../components/VideoCenterOne/Video Center One/WellCome_Meeting/WellMeeting'
import AskingJoinMeeting1 from '../components/VideoCenterOne/Video Center One/Asking_Join_Meeting/AskingJoinMeeting'
function VideoCenterOne() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <CreateNewMeetingLoad1/>

            <CreateNewMeetingGo1/>

            <ScheduleAMeeting1/>

            <ReacordandTranscribeCall1/>

            <JoinMeetingLoad1/>

            <JoinMeetingGo1/>

            <WellMeeting1/>

            <AskingJoinMeeting1/>
        </div>
    )
}

export default VideoCenterOne