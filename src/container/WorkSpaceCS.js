import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import TicklingDP from '../components/WorkSpaceCS/TicklingDP'
import TicklingBB from '../components/WorkSpaceCS/TicklingBB'
import TicklingGD from '../components/WorkSpaceCS/TicklingGD'
import SuccessDP from '../components/WorkSpaceCS/SuccessDP'
import SuccessB from '../components/WorkSpaceCS/SuccessB'
import SuccessGD from '../components/WorkSpaceCS/SuccessGD'
import EmbarrassingDP from '../components/WorkSpaceCS/EmbarrassingDP'
import EmbarrassingB from '../components/WorkSpaceCS/EmbarrassingB'
import EmbarrassingGD from '../components/WorkSpaceCS/EmbarrassingGD'
import EnterNameDP from '../components/WorkSpaceCS/EnterNameDP'
import EnterNameB from '../components/WorkSpaceCS/EnterNameB'
import EnterNameGD from '../components/WorkSpaceCS/EnterNameGD'

function CalendarComp2() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            <TicklingDP/>
            <TicklingBB/>
            <TicklingGD/>
            <SuccessDP/>
            <SuccessB/>
            <SuccessGD/>
            <EmbarrassingDP/>
            <EmbarrassingB/>
            <EmbarrassingGD/>
            <EnterNameDP/>
            <EnterNameB/>
            <EnterNameGD/>
        </div>
    )
}

export default CalendarComp2