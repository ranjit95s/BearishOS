import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import remove from "../img/remove.svg";
import greenCheck from "../img/greenCheck.svg";
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
                            <ImageListItem onClick={openChange} id="my-element12"><img src={remove} alt="hero" className={t106.imgStyle} />
                                <ReactTooltip className={t106.tooltip} anchorId="my-element12" type='light' effect='solid'>
                                    <span>Minimize</span>
                                </ReactTooltip>
                            </ImageListItem>
                            <ImageListItem id="my-element13"><img src={Close} alt="hero" className={t106.imgStyle} />
                                <ReactTooltip className={t106.tooltip} anchorId="my-element13" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                            </ImageListItem>
                        </CardContent>
                    </CardContent>

                    <Card className={isOpen ? t106.mgsBox : t106.spanHide}>
                        <CardContent className={t106.flexWS} >
                            <CardContent className={t106.userStyle}>
                                <Typography variant="h5" className={t106.iconU}>
                                    LB
                                </Typography>
                                <CardContent className={t106.flexU}>
                                    <CardContent className={t106.padding0}>
                                        <Typography variant="h5" className={t106.fn}>
                                            Full Name
                                        </Typography>
                                        <Typography variant="h6" className={t106.en}>
                                            narutouzumaki2002@gmail.com
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={t106.padding0}>
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
                        <CardContent className={isOpen ? t106.sendPart : t106.spanHide}>Send</CardContent>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
