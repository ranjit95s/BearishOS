import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
// import loading from '../img/loading.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function WellMeeting() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "350px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Welcome to the Meeting
                            </Typography>
                            <ImageListItem id="my-element57">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element57"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent className={cx(sty.wellM)}>
                                <CardContent className={cx(sty.signIn, sty.wellC ,sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='First Name' name="code" id="code" />
                                </CardContent>
                                <CardContent className={cx(sty.signIn,sty.wellC ,sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='Last Name' name="code" id="code" />
                                </CardContent>
                            </CardContent>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Email Address' name="code" id="code" />
                            </CardContent>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Meeting Name' name="code" id="code" />
                            </CardContent>
                            <Typography className={cx(sty.info2, sty.tmsmStyle)}>
                                Help Bearish better identify you in the meeting.
                            </Typography>
                            <CardContent className={cx(sty.btns,sty.wbtn)}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Enter Call
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