import  React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./notification.module.css";
import sq from '../../img/sq1.svg'
import sq2 from '../../img/sq2.svg'
const Notification = () =>  {
    const [checkChecker, setCheckChecker] = useState({newEmail:false,
        calendarEvent:false,
    taskAssign:false,
    workSpaceShared:false,
docShared:false,
upComingCall:false,
newMsg:false,
upComingETR:false,
notifySummary:false})
    const chc = (id) => {
        if (id === 1) {
            if (checkChecker.newEmail) {
                setCheckChecker({ ...checkChecker, newEmail: false });
            } else {
                setCheckChecker({ ...checkChecker, newEmail: true });
            }
        } else if (id === 2) {
            if (checkChecker.calendarEvent) {
                setCheckChecker({ ...checkChecker, calendarEvent: false });
            } else {
                setCheckChecker({ ...checkChecker, calendarEvent: true });
            }
        }
        else if (id === 3) {
            if (checkChecker.taskAssign) {
                setCheckChecker({ ...checkChecker, taskAssign: false });
            } else {
                setCheckChecker({ ...checkChecker, taskAssign: true });
            }
        }
        else if (id === 4) {
            if (checkChecker.workSpaceShared) {
                setCheckChecker({ ...checkChecker, workSpaceShared: false });
            } else {
                setCheckChecker({ ...checkChecker, workSpaceShared: true });
            }
        }
        else if (id === 5) {
            if (checkChecker.docShared) {
                setCheckChecker({ ...checkChecker, docShared: false });
            } else {
                setCheckChecker({ ...checkChecker, docShared: true });
            }
        }
        else if (id === 6) {
            if (checkChecker.upComingCall) {
                setCheckChecker({ ...checkChecker, upComingCall: false });
            } else {
                setCheckChecker({ ...checkChecker, upComingCall: true });
            }
        }
        else if (id === 7) {
            if (checkChecker.newMsg) {
                setCheckChecker({ ...checkChecker, newMsg: false });
            } else {
                setCheckChecker({ ...checkChecker, newMsg: true });
            }
        }
        else if (id === 8) {
            if (checkChecker.upComingETR) {
                setCheckChecker({ ...checkChecker, upComingETR: false });
            } else {
                setCheckChecker({ ...checkChecker, upComingETR: true });
            }
        }
        else if (id === 9) {
            if (checkChecker.notifySummary) {
                setCheckChecker({ ...checkChecker, notifySummary: false });
            } else {
                setCheckChecker({ ...checkChecker, notifySummary: true });
            }
        }
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="Notification"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    <Stack className={classes.w100}>
                            <Stack className={classes.t61825}>Notifications</Stack>
                            <hr></hr>
                            <Stack style={{"margin-bottom":"20px"}} className={classes.t61115}>Be notified for…</Stack>
                            <Stack className={classes.fpf}> 
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    New Email
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(1)} src={checkChecker.newEmail ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    New Calendar Event
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(2)} src={checkChecker.calendarEvent ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    New Task Assigned to you
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(3)} src={checkChecker.taskAssign ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    New Workspace shared with you
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(4)} src={checkChecker.workSpaceShared ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    New Document shared with you
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(5)} src={checkChecker.docShared ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Upcoming Calls
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(6)} src={checkChecker.upComingCall ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    New Text Message
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(7)} src={checkChecker.newMsg ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Upcoming Events, Task and Reminders
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(8)} src={checkChecker.upComingETR ? sq2 : sq} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Notications Summary
                                    </Stack>
                                </Stack>
                                    <img onClick={() => chc(9)} src={checkChecker.notifySummary ? sq2 : sq} alt="" />
                            </Stack>
                            </Stack>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default Notification;