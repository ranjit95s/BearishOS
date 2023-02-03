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
import { Tooltip as ReactTooltip } from 'react-tooltip'
import classes from './Video_CSS.module.css';
export default function ReacordandTranscribeCall() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                            Record and Transcribe Call
                            </Typography>
                            <ImageListItem id="my-element56">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element56"
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
                        Would you like Bearish to record and transcribe this call?
                    </Typography>
                            <CardContent className={classes.recordBtn}>
                                <CardContent className={classes.recoRef}>
                                    <Button variant="contained">
                                        Yes
                                    </Button>
                                </CardContent>
                                <CardContent className={classes.recoOut}>
                                    <Button variant="contained">
                                        No
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