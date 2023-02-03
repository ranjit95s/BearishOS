import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../../../img/Close.svg';
// import loading from '../img/loading.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Video_CSS.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function WellMeeting() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="well" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Welcome to the Meeting
                            </Typography>
                            <ImageListItem id="my-element57">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element57"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                        <Typography className={classes.info}>
                                Help Bearish better identify you in the meeting.
                            </Typography>
                            <CardContent className={classes.WellM}>
                                <CardContent style={{"width":"45%"}} className={classes.inputStyle}>
                                    <input type="text" placeholder='First Name' name="code" id="code" />
                                </CardContent>
                                <CardContent style={{"width":"45%"}} className={classes.inputStyle}>
                                    <input type="text" placeholder='Last Name' name="code" id="code" />
                                </CardContent>
                            </CardContent>
                            <CardContent className={classes.inputStyle}>
                                <input type="text" placeholder='Email Address' name="code" id="code" />
                            </CardContent>
                            <CardContent className={classes.inputStyle}>
                                <input type="text" placeholder='Meeting Name' name="code" id="code" />
                            </CardContent>
                            <CardContent className={classes.bottomBtn}>
                                <CardContent className={classes.btnMain}>
                                    <Button variant="contained">
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