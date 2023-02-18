import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
// import EventNameOne from '../components/Calendar_Center_Two/EventNameOne'
// import EventNameTwo from '../components/Calendar_Center_Two/EventNameTwo'
// import SuccessEvent from '../components/Calendar_Center_Two/SuccessEvent'
import CalendarName from '../components/Calendar_Center_Two/CalendarName'


function CalendarComp2() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            {/* <EventNameOne/>
            <EventNameTwo/>
            <SuccessEvent/> */}
            <CalendarName/>
        </div>
    )
}

export default CalendarComp2