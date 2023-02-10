import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Close from "../../img/Close.svg";
import equals from "../../img/equals.svg";
import logoM from "../../img/LogoM.png";
import downlaods from "../../img/downloads.svg";
import hide from "../../img/hide.svg";
import ceye from "../../img/ceye.svg";
import mute from "../../img/mute.svg";
import rtrash from "../../img/rtrash.svg";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./RecentMessage.module.css";
const RecentMessage = () => {
    const [deletes, setDeletes] = useState(false);
    const [action, setAction] = useState(false);
    const [msgtype, setMsgtype] = useState({MType:'Single',IType:'Bearish'});
    const [user, setUser] = useState({
        firstName: "First Name",
        lastName: "Last Name",
    });

    const singleGroupSwitch = (types) => {
        switch(types){
            case 'Group':
                return (<Stack className={classes.msgGroup}>
                    <Stack className={classes.msgGroup}>TU</Stack>
                    <Stack className={classes.msgGroup}>TU</Stack>
                </Stack>);
            default:
                return (<Stack className={classes.msgDefault}>TU</Stack>);
        }
    }
    const msgLogoSwitch = (types) => {
        switch(types){
            case 'Bearish':
                return (<Stack className={classes.imgStyle}>
                    <img src={logoM} alt="" srcset="" />
                </Stack>);
            default:
                return (<Stack className={classes.imgStyle}>
                </Stack>);
        }
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Stack component="RecentMessage" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <Stack gap={"5px"} className={classes.mflex} onClick={() => setAction(action ? false : true)}>
                            <Stack className={classes.msgIcons}>
                                {singleGroupSwitch(msgtype.MType)}
                                {msgLogoSwitch(msgtype.IType)}
                            </Stack>
                            <Stack
                                gap={"7px"}
                                style={{ flexDirection: "column" }}
                                className={classes.mflex}
                            >
                                <Stack className={classes.mainT}>
                                    {user.firstName}, {user.lastName}
                                    <Stack className={classes.time}> 00:00 AM </Stack>
                                </Stack>
                                <Stack className={classes.subT}>
                                    This is the text of the last most recent message from the
                                    person.
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack className={action ? classes.abs : classes.spanHide}>
                            <Stack gap={"10px"} className={classes.absT}>
                                <img src={equals} alt="alt" />
                                <Stack className={classes.absText}>Chat Details</Stack>
                            </Stack>
                            <Stack gap={"10px"} className={classes.absT}>
                                <img src={downlaods} alt="alt" />
                                <Stack className={classes.absText}>Download Chat</Stack>
                            </Stack>
                            <Stack gap={"10px"} className={classes.absT}>
                                <img src={ceye} alt="alt" />
                                <Stack className={classes.absText}>Mark as Read</Stack>
                            </Stack>
                            <Stack gap={"10px"} className={classes.absT}>
                                <img src={hide} alt="alt" />
                                <Stack className={classes.absText}>Mark as unread</Stack>
                            </Stack>
                            <Stack gap={"10px"} className={classes.absT}>
                                <img src={mute} alt="alt" />
                                <Stack className={classes.absText}>Mute</Stack>
                            </Stack>
                            <Stack
                                gap={"10px"}
                                className={classes.absT}
                                onClick={() => setDeletes(deletes ? false : true)}
                            >
                                <img src={rtrash} alt="alt" />
                                <Stack className={classes.absText}>Delete</Stack>
                                <Stack
                                    style={{ width: "200px" }}
                                    className={deletes ? classes.abs5 : classes.spanHide}
                                >
                                    <Stack style={{ padding: "0px" }} className={classes.ho100}>
                                        <Stack variant="h1" className={classes.dt}>
                                            Delete Chat
                                        </Stack>
                                        <Stack variant="h1" className={classes.infod}>
                                            You are about to delete this with [0000] people in it. If
                                            you are sure you want to do this, type delete below. This
                                            action can not be undone.
                                        </Stack>
                                        <Stack style={{ padding: "7px" }} className={classes.redI2}>
                                            <input
                                                placeholder="Delete (case sensitive)"
                                                className={classes.redII}
                                                type="text"
                                                name="link"
                                                id="link"
                                            />
                                        </Stack>
                                        <Stack className={classes.redII2}>
                                            <button className={classes.redII}>
                                                {" "}
                                                Permanently Delete Now{" "}
                                            </button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </StyledEngineProvider>
        </>
    );
};
export default RecentMessage;
