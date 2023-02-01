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
import classes from './Embarrassing.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function EmbarrassingGC() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="EmbarrassingMicrosoftCalendar" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={classes.t61825}>
                            Well this is Embarrassing
                        </Typography>
                        <ImageListItem id="my-EmbarrassingMicrosoftCalendar">
                                <ReactTooltip className={classes.tooltip} anchorId="my-EmbarrassingMicrosoftCalendar" type='light' effect='solid'>
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
                    <Typography variant="h1" className={classes.info} >
                        Your intelligent connection to Microsoft Calendar failed. Please press connect and try to connect your account again. Need help? Submit a ticket below.
                    </Typography>
                    <CardActions className={classes.cobtn}>
                            <Button className={classes.flexdl2}>
                                <Typography
                                    variant="h1"
                                    className={classes.tsty}
                                >
                                Submit a Ticket
                                </Typography>
                            </Button>
                        </CardActions>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}