import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
// import ConnectAccount_C from '../components/Calendar_Center/ConnectAccount_C'
// import TicklingBGC from '../components/Calendar_Center/TicklingBGC'
// import TicklingBMC from '../components/Calendar_Center/TicklingBMC'
// import SuccessGC from '../components/Calendar_Center/SuccessGC'
// import SuccessMC from '../components/Calendar_Center/SuccessMC'
// import EmbarrassingGC from '../components/Calendar_Center/EmbarrassingGC'
// import EmbarrassingMC from '../components/Calendar_Center/EmbarrassingMC'
// import EnterName from '../components/Calendar_Center/EnterName'
// import SuccessName from '../components/Calendar_Center/SuccessName'
import {CalendarScheduleLink} from '../components/Calendar_Center/Calendar_Center/CalendarScheduleLink'
import {CalendarName} from '../components/Calendar_Center/Calendar_Center/ColorCalendarName'

function CalendarComp() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            {/* <ConnectAccount_C/> */}
            <CalendarScheduleLink/>
            <CalendarName/>
            {/* <TicklingBGC/>
            <SuccessGC/>
            <EmbarrassingGC/>
            <EnterName/>
            <TicklingBMC/>
            <EmbarrassingMC/>
            <SuccessMC/>
            <SuccessName/> */}
        </div>
    )
}

export default CalendarComp