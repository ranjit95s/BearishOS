import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../img/Close.svg";
import remove from "../../img/remove.svg";
import greenCheck from "../../img/greenCheck.svg";

import laugh from "../../img/laugh.svg";
import attachment from "../../img/attachment.png";
import pic from "../../img/pic.png";
import s1 from "../../img/s1.svg";

import hide from "../../img/hide.svg";
import trash from "../../img/rtrash.svg";
import BlueLoc from "../../img/BlueLoc.svg";
import ceye from "../../img/ceye.svg";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from './MessageChat.module.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function MessageChat() {

    const [isOpen, setIsOpne] = useState(true);
    const openChange = () => {
        if (isOpen) {
            setIsOpne(false);
        }
        else {
            setIsOpne(true);
        }
    };
     const [deletes, setDeletes] = useState(false);
    const [action, setAction] = useState(false);
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="message" className={classes.boxStyle}>
                    <CardContent className={classes.boxIn}>
                        <CardContent className={classes.title}>
                            <Typography className={classes.textStyle}>Full Name</Typography>
                        </CardContent>
                        <CardContent className={classes.title}>
                            <ImageListItem onClick={openChange} id="my-element1266"><img src={remove} alt="hero" className={classes.imgStyle} />
                                <ReactTooltip className={classes.tooltip} anchorId="my-element1266" type='light' effect='solid'>
                                    <span>Minimize</span>
                                </ReactTooltip>
                            </ImageListItem>
                            <ImageListItem id="my-element13"><img src={Close} alt="hero" className={classes.imgStyle} />
                                <ReactTooltip className={classes.tooltip1} anchorId="my-element13" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                            </ImageListItem>
                        </CardContent>
                    </CardContent>

                    <Card className={isOpen ? classes.mgsBox : classes.spanHide}>
                        <CardContent className={classes.flexWS} >
                            <CardContent className={classes.userStyle}>
                                {/* <Typography variant="h5" className={classes.iconU}>
                                    LB
                                </Typography> */}
                                <ImageListItem style={{ "marginRight": "10px" }} id="my-element1l323"><img src={pic} alt="hero" className={classes.imgStyle} />
                                </ImageListItem>
                                <CardContent className={classes.flexU}>
                                    <CardContent className={classes.padding0}>
                                        <Typography variant="h5" className={classes.fn}>
                                            Full Name
                                        </Typography>
                                        <Typography variant="h6" className={classes.en}>
                                            narutouzumaki2002@gmail.com
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={classes.green}>
                                        <ImageListItem id="my-element132"><img src={greenCheck} alt="hero" className={classes.imgStyle} />
                                            <ReactTooltip className={classes.tooltip} anchorId="my-element132" type='light' effect='solid'>
                                                <span>Added State</span>
                                            </ReactTooltip>
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.msgSec}>
                            <Stack style={{"position":"relative"}} onClick={() => setAction(action ? false : true)}>
                                <Stack className={classes.textG}>
                                <Typography variant="h5" style={{ width: "25px" }} className={classes.iconU}>
                                    LB
                                </Typography>
                            </Stack>
                            <Stack className={classes.times}>
                                00:00:00 - 00:00:00
                            </Stack>
                            <Stack gap={'24px'} className={action ? classes.abs : classes.spanHide}>
                                <Stack style={{"flexDirection":"row","margin":"10px 10px -15px 10px","justifyContent":"space-between","alignItems":"center"}}>
                                <Stack className={classes.absText} style={{"opacity":"1"}}>Comments Menu</Stack>
                                <img src={Close} alt="alt" />
                                </Stack>
                            <Stack gap={"5px"} className={classes.absT}>
                                <img src={greenCheck} alt="alt" />
                                <Stack className={classes.absText}>Resolve Comment</Stack>
                            </Stack>
                            <Stack gap={"5px"} className={classes.absT}>
                                <img src={hide} alt="alt" />
                                <Stack className={classes.absText}>Hide Comments</Stack>
                            </Stack>
                            <Stack gap={"5px"} className={classes.absT}>
                                <img src={ceye} alt="alt" />
                                <Stack className={classes.absText}>View All Comments</Stack>
                            </Stack>
                            <Stack gap={"5px"} className={classes.absT}>
                                <img src={BlueLoc} alt="alt" />
                                <Stack className={classes.absText}>Place Comment</Stack>
                            </Stack>
                            <Stack
                                gap={"5px"}
                                className={classes.absT}
                                onClick={() => setDeletes(deletes ? false : true)}
                            >
                                <img src={trash} alt="alt" />
                                <Stack className={classes.absText}>Delete</Stack>
                                <Stack
                                    style={{ width: "200px" }}
                                    className={deletes ? classes.abs5 : classes.spanHide}
                                >
                                    <Stack style={{ padding: "0px" }} className={classes.ho100}>
                                        <Stack variant="h1" className={classes.dt}>
                                            Delete Comment
                                        </Stack>
                                        <Stack variant="h1" className={classes.infod}>
                                            You are about to delete a comment. If
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
                            </Stack>
                        </CardContent>
                    </Card>
                    <CardContent className={isOpen ? classes.sendPart : classes.spanHide}>
                        <ImageListItem id="my-element1323"><img src={laugh} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                        <ImageListItem id="my-element1323"><img src={attachment} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                        <textarea name="text" placeholder="Type your message here..."></textarea>
                        <ImageListItem id="my-element1433"><img src={s1} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                    </CardContent>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
