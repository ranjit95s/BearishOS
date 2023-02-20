import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from "../img/Close.svg";
import greenCheck from "../img/greenCheck.svg";

import laugh from "../img/laugh.svg";
import attachment from "../img/attachment.png";
import s1 from "../img/s1.svg";

import hide from "../img/hide.svg";
import trash from "../img/rtrash.svg";
import BlueLoc from "../img/BlueLoc.svg";
import ceye from "../img/ceye.svg";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import classes from './Comment.module.css';
export default function Comments() {
    const [deletes, setDeletes] = useState(false);
    const [action, setAction] = useState(false);
 
    return (
        <>
            <Box component="chatsoon" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Comments
                            </Typography>
                            <Stack style={{"flexDirection": "row","alignItems":"center"}} id="my-chatsoon">
		<Stack gap={'10px'} style={{marginRight:"15px","flexDirection": "row"}}>
<Stack className={classes.tt}>All</Stack>
<Stack className={classes.tt}>Hidden</Stack>
<Stack className={classes.tt}>Resolved</Stack>
</Stack>
                                <img src={Close} alt="close" loading="lazy" />
                            </Stack>
                        </CardContent>
                        <CardContent className={classes.msgSec}>
                            <Stack style={{"position":"relative"}} onClick={() => setAction(action ? false : true)}>
                                <Stack className={classes.textG}>
                                <Typography variant="h5" style={{ width: "25px" }} className={classes.iconU}>
                                    LB
                                </Typography>
                            </Stack>
                            <Stack gap={'10px'} direction={'row'} justifyContent={'end'} aliingItem={'center'}>
                               <Stack  className={classes.times}>View Comment</Stack>
                               <Stack  className={classes.times}> 00:00:00 - 00:00:00</Stack>
                            </Stack>
                            <Stack gap={'24px'} className={action ? classes.abs : classes.spanHide}>
                                <Stack style={{"flexDirection":"row","margin":"10px 10px -15px 10px","justifyContent":"space-between","alignItems":"center"}}>
                                <Stack className={classes.absText} style={{"opacity":"1"}}>Comments Menu</Stack>
                                <img src={Close} alt="alt" />
                                </Stack>
                            <Stack gap={"8px"} className={classes.absT}>
                                <img src={greenCheck} alt="alt" />
                                <Stack className={classes.absText}>Resolve Comment</Stack>
                            </Stack>
                            <Stack gap={"8px"} className={classes.absT}>
                                <img src={hide} alt="alt" />
                                <Stack className={classes.absText}>Hide Comments</Stack>
                            </Stack>
                            <Stack gap={"8px"} className={classes.absT}>
                                <img src={ceye} alt="alt" />
                                <Stack className={classes.absText}>View All Comments</Stack>
                            </Stack>
                            <Stack gap={"8px"} className={classes.absT}>
                                <img src={BlueLoc} alt="alt" />
                                <Stack className={classes.absText}>Place Comment</Stack>
                            </Stack>
                            <Stack
                                gap={"8px"}
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
                        <CardContent className={classes.sendPart}>
                        <ImageListItem id="my-element1323"><img src={laugh} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                        <ImageListItem id="my-element1323"><img src={attachment} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                        <textarea name="text" placeholder="Type your message here..."></textarea>
                        <ImageListItem id="my-element1433"><img src={s1} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                    </CardContent>
                    </Card>
                </Box>
        </>
    );
}