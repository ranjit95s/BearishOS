import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sem from '../img/smc.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Tickling.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function TicklingBMC() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="TicklingtheBackendMicroCalendar" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={classes.t61825}>
                        Tickling the Backend
                        </Typography>
                        <ImageListItem id="my-TicklingtheBackendMicroCalendar">
                                <ReactTooltip className={classes.tooltip} anchorId="my-TicklingtheBackendMicroCalendar" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <CardActions className={classes.signSection}>
                    <Button className={classes.signIn}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                            Microsoft Calendar
                        </Typography>
                    </Button>
                    <Typography variant="h1" className={classes.info}>
                    This page should automatically redirect for you to login to Microsoft Calendar.
                    </Typography>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}