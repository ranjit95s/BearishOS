import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../img/Close.svg";
import remove from "../../img/remove.svg";
import greenCheck from "../../img/greenCheck.svg";

import laugh from "../../img/laugh.svg";
import attachment from "../../img/attachment.png";
import pic from "../../img/pic.png";
import s1 from "../../img/s1.svg";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import t106 from './MessageChat.module.css'
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
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="message" className={t106.boxStyle}>
                    <CardContent className={t106.boxIn}>
                        <CardContent className={t106.title}>
                            <Typography className={t106.textStyle}>Full Name</Typography>
                        </CardContent>
                        <CardContent className={t106.title}>
                            <ImageListItem onClick={openChange} id="my-element1266"><img src={remove} alt="hero" className={t106.imgStyle} />
                                <ReactTooltip className={t106.tooltip} anchorId="my-element1266" type='light' effect='solid'>
                                    <span>Minimize</span>
                                </ReactTooltip>
                            </ImageListItem>
                            <ImageListItem id="my-element13"><img src={Close} alt="hero" className={t106.imgStyle} />
                                <ReactTooltip className={t106.tooltip1} anchorId="my-element13" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                            </ImageListItem>
                        </CardContent>
                    </CardContent>

                    <Card className={isOpen ? t106.mgsBox : t106.spanHide}>
                        <CardContent className={t106.flexWS} >
                            <CardContent className={t106.userStyle}>
                                {/* <Typography variant="h5" className={t106.iconU}>
                                    LB
                                </Typography> */}
                                <ImageListItem style={{"marginRight":"10px"}} id="my-element1l323"><img src={pic} alt="hero" className={t106.imgStyle} />
                            </ImageListItem>
                                <CardContent className={t106.flexU}>
                                    <CardContent className={t106.padding0}>
                                        <Typography variant="h5" className={t106.fn}>
                                            Full Name
                                        </Typography>
                                        <Typography variant="h6" className={t106.en}>
                                            narutouzumaki2002@gmail.com
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={t106.green}>
                                        <ImageListItem id="my-element132"><img src={greenCheck} alt="hero" className={t106.imgStyle} />
                                            <ReactTooltip className={t106.tooltip} anchorId="my-element132" type='light' effect='solid'>
                                                <span>Added State</span>
                                            </ReactTooltip>
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={t106.msgSec}>Message Components</CardContent>
                    </Card>
                        <CardContent className={isOpen ? t106.sendPart : t106.spanHide}>
                        <ImageListItem id="my-element1323"><img src={laugh} alt="hero" className={t106.imgStyle} />
                            </ImageListItem>
                            <ImageListItem id="my-element1323"><img src={attachment} alt="hero" className={t106.imgStyle} />
                            </ImageListItem>
                            <textarea name="text" placeholder="Type your message here..."></textarea>
                             <ImageListItem id="my-element1433"><img src={s1} alt="hero" className={t106.imgStyle} />
                            </ImageListItem>
                        </CardContent>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
