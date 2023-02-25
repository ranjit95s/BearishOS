// import EmailComp from "./container/EmailComp";
// // import EmailComp2 from './container/EmailComp2'
// import EmailTwo from "./container/EmailTwo";
// import CalendarComp from "./container/CalendarComp";
// import CalendarComp2 from "./container/CalendarComp2";
// import CalendarComp2One from "./container/CalendarComp2One";
// import WorkSpaceCS from "./container/WorkSpaceCS";
// import CalendarComp3 from "./container/CalendarComp3";
// import VideoCenterOne from "./container/VideoCenterOne";
import CalendarComp4 from "./container/CalendarComp4";
// import WorkSpaceMoreComp from "./container/WorkSpaceMoreComp";
// import MessageComp from "./container/MessageComp";
// import TaskCenter from "./container/TaskCenter";
// import CallCenter2 from "./container/CallCenter2";
// import SuperChargeComp from "./container/SuperChargeComp";
// import Login from "./container/Login";
// import ContactCenterComp2 from "./container/ContactCenterComp2";
// import MessageComp2 from "./container/MessageComp2";
// import SettingComps from './container/SettingComps'
// import CalScheduleLinks from "./container/CalScheduleLinks";
// import InsideContact from "./container/InsideContact";
import theme from "./MUI/theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst={true}>
          {/* <WorkSpaceCS /> */}
          {/* <EmailComp/> */}
          {/* <EmailTwo /> */}
          {/* <CalendarComp2One /> */}
          {/* <CalendarComp /> */}
          {/* <CalendarComp2 /> */}
          {/* <CalendarComp3 /> */}
          {/* <VideoCenterOne /> */}
          <CalendarComp4 />
          {/* <MessageComp /> */}
          {/* <WorkSpaceMoreComp /> */}
          {/* <TaskCenter /> */}
          {/* <SuperChargeComp /> */}
          {/* <CallCenter2 /> */}
          {/* <Login /> */}
          {/* <ContactCenterComp2 /> */}
          {/* <MessageComp2 /> */}
          {/* <SettingComps /> */}
          {/* <CalScheduleLinks /> */}
          {/* <InsideContact /> */}
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
