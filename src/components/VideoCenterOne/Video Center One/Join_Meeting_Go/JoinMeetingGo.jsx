import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../../../img/Close.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Video_CSS.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function JoinMeetingGo() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="createmeetingGo" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                            Join a Meeting
                            </Typography>
                            <ImageListItem id="my-element48">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element48"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <CardContent className={classes.inputStyle}>
                                <input type="text" placeholder='Meeting Id or Meeting Link' name="code" id="code" />
                            </CardContent>
                            <Typography className={classes.info}>
                            Ask the host of your meeting for a Meeting Id or Meeting Link to join.
                            </Typography>
                            <CardContent className={classes.bottomBtn}>
                                <CardContent className={classes.btnMain}>
                                    <Button variant="contained">
                                        Go
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