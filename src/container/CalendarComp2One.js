import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CalendarWorkSpace from '../components/CalendarComp2One/CalendarWorkSpace'



function CalendarComp2One() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            <CalendarWorkSpace/>
        </div>
    )
}

export default CalendarComp2One