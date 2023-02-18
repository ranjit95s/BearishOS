import React from 'react'
import "@fontsource/source-serif-pro";
    import {CalScheduleLink1} from '../components/Cal_ScheduleLink/CalScheduleLink1'
    import {CalScheduleLink2} from '../components/Cal_ScheduleLink/CalScheduleLink2'
    import {CalScheduleLink3} from '../components/Cal_ScheduleLink/CalScheduleLink3'

function CalScheduleLinks() {
    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            <CalScheduleLink1/>   
            <CalScheduleLink2/>   
            <CalScheduleLink3/>   
        </div>
    )
}

export default CalScheduleLinks;