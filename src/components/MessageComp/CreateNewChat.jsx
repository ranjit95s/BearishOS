import React, {useState} from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
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

    const [isAdd, setIsAdd] = useState('Contact Added');
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="AlphaAccess" style={{"height":"315px"}} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography variant="h1" className={cx(sty.tlStyle)}>
                            Create New Chat
                            </Typography>
                            <ImageListItem id="my-element04">
                                <ReactTooltip
                                    anchorId="my-element04"
                                    className={sty.tooltip}
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <Button className={cx(sty.signIn, sty.tlStyle)}>
                                <img src={sem} alt="email" />
                                <Typography
                                    varient="h1"
                                    className={cx(sty.inText, sty.tmStyle)}
                                >
                                    New Bearish Chat
                                </Typography>
                            </Button>
                            <Typography className={cx(sty.info, sty.tsStyle)}>
                            Who would you like to message?
                            </Typography>
                            <CardContent className={cx(sty.headerStyle)}>
                            <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.msgText, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.msgText, calSty.tmr, calSty.op1)}>
                                       {isAdd}
                                        </Typography>
                                        {/* DropDown here */}
                                    </CardContent>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.mt10)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tmr, calSty.org)}>
                                    Messaging
                                    </Typography>
                                </CardContent>
                                <CardContent className={cx(sty.btns,sty.jcs)} style={{"marginTop":"5px"}}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Create
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
