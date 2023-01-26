import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import remove from "../img/remove.svg";
import greenCheck from "../img/greenCheck.svg";
import sem from "../img/LogoM.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import cx from "classnames";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../sty.module.css";
import calSty from '../CalendarComp3/CalComp_Sty.module.css';
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function CreateNewChat() {

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
                <Box component="AlphaAccess" style={{ "height": "fit-content", "width": "340px" }} className={cx(sty.boxStyle)}>
                    <CardContent className={cx(calSty.headers)}>
                        <CardContent className={cx(sty.headerContent, sty.padding0)}>
                            <Typography className={cx(sty.spanShow, calSty.headermain)}>Full Name</Typography>
                        </CardContent>
                        <CardContent className={cx(sty.headerContent, sty.padding0)}>
                            <ImageListItem onClick={openChange} id="my-element12"><img src={remove} alt="hero" className={cx(sty.imgStyle, sty.padding0)} />
                                <ReactTooltip className={sty.tooltip} anchorId="my-element12" type='light' effect='solid'>
                                    <span>Minimize</span>
                                </ReactTooltip>
                            </ImageListItem>
                            <ImageListItem id="my-element13"><img src={Close} alt="hero" className={cx(sty.imgStyle, sty.padding0)} />
                                <ReactTooltip className={sty.tooltip} anchorId="my-element13" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                            </ImageListItem>
                        </CardContent>
                    </CardContent>

                    <Card className={isOpen ? cx(sty.inStyle,calSty.mrtt10) : cx(sty.spanHide)} style={{"width":"310px","height":"unset"}}>
                        <CardContent className={cx(sty.padding0, sty.flexWS)} >
                            <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                <Typography variant="h5" className={cx(sty.pic, calSty.picc, sty.tmsmStyle, sty.padding0)}>
                                    LB
                                </Typography>
                                <CardContent style={{ "align-items": "center" }} className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                    <CardContent className={cx(sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                            Full Name
                                        </Typography>
                                        <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                            narutouzumaki2002@gmail.com
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={cx(sty.padding0)}>
                                        <ImageListItem id="my-element132"><img src={greenCheck} alt="hero" className={cx(sty.imgStyle, sty.padding0)} />
                                            <ReactTooltip className={sty.tooltip} anchorId="my-element132" type='light' effect='solid'>
                                                <span>Added State</span>
                                            </ReactTooltip>
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={cx(calSty.msgSec)}>Message Components</CardContent>
                    </Card>
                        <CardContent className={isOpen ? cx(calSty.sendPart) : cx(sty.spanHide)}>Send</CardContent>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
