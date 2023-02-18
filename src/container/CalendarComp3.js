import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CalendarEventRemindar from '../components/CalendarComp3/CalendarEventRemindar'
import CalendarEventRemindar2 from '../components/CalendarComp3/CalendarEventRemindar2'

import CalendarEventRemindar1 from '../components/CalendarComp3/Calendar Components 3/Calendar_Event_Remindar/CalendarEventRemindar'
import CalendarEventRemindar12 from '../components/CalendarComp3/Calendar Components 3/Calendar_Event_Remindar2/CalendarEventRemindar2'

function CalendarComp3() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            {/* <CalendarEventRemindar/> */}
            {/* <CalendarEventRemindar2/> */}

            <CalendarEventRemindar1/>
            <CalendarEventRemindar12/>
        </div>
    )
}

export default CalendarComp3