import React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../../img/Close.svg";
import laugh from "../../../img/laugh.svg";
import attachment from "../../../img/attachment.png";
import s1 from "../../../img/s1.svg";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "./CallChat.module.css";
import MsgPart from './MsgPart'
const CallChat = () => {
    return (
        <>
            <Box component="chatsoon" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={classes.t61825}>
                            Call Chat
                        </Typography>

                        <img src={Close} alt="close" loading="lazy" />
                    </CardContent>
                    <CardContent className={classes.msgSec}>
                       <MsgPart/>
                    </CardContent>
                    <CardContent className={classes.sendPart}>
                        <ImageListItem id="my-element1323">
                            <img src={laugh} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                        <ImageListItem id="my-element1323">
                            <img src={attachment} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                        <TextareaAutosize
                        aria-label="textarea"
                        placeholder="Type your message here...."
                        className={classes.textareas}
                        width={'200px'}
                        maxRows={2}
                        />
                        <ImageListItem id="my-element1433">
                            <img src={s1} alt="hero" className={classes.imgStyle} />
                        </ImageListItem>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default CallChat;
