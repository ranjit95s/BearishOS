import React from "react";
import "@fontsource/source-serif-pro";
// import "../components/sty.module.css";
import CVschedules from "../components/CalendarComp4/CVschedules";
import ChooseEventType from "../components/CalendarComp4/ChooseEventType";
// import OneToOneMeeting1 from "../components/CalendarComp4/OneToOneMeeting1";
// import OneToOneMeeting2 from '../components/CalendarComp4/OneToOneMeeting2'
import Success from "../components/CalendarComp4/Success";
import Congt from "../components/CalendarComp4/Congt";

import OneToOneMeeting11 from "../components/CalendarComp4/OneToOneMeeting1/OneToOneMeeting1";
// import OneToOneMeeting22 from '../components/CalendarComp4/OneToOneMeeting2/OneToOneMeeting2'
function CalendarComp4() {
  return (
    <div style={{"margin":"10px","gap":"20px"}}>
       <CVschedules /> 
       <ChooseEventType /> 
       <Success /> 
       <Congt /> 
      <OneToOneMeeting11 />
    </div>
  );
}

export default CalendarComp4;
