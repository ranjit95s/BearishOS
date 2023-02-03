import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import loading from '../img/loading.png';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Video_CSS.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function CreateNewMeetingLoad() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="createmeetingLoad" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Create Your Meeting
                            </Typography>
                            <ImageListItem id="my-element49">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element49"
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
                                <input type="text" placeholder='Name your Meeting' name="code" id="code" />
                            </CardContent>
                            <Typography className={classes.info}>
                            Just a second while we create your shiny new meeting.
                    </Typography>
                            <CardContent className={classes.btn}>
                            <ImageListItem >
                                <img src={loading} alt="close" loading="lazy" />
                            </ImageListItem>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}