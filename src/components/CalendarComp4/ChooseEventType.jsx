import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty4 from './CalSty4.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function ChooseEventType() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty4.boxWH2)}>
                    <Card className={cx(sty.inStyle, calSty4.boxIn2)}>
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.tllStyle)}>
                                Choose your Event Type
                            </Typography>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <Button className={cx(calSty4.flexdl)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                    One on One Meetings
                                </Typography>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tseccStyle)}
                                >
                                    Let your guests pick a time to have a one on one meeting with you.
                                </Typography>
                            </Button>

                            <Button className={cx(calSty4.flexdl)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                    Create a One Time Meeting
                                </Typography>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tseccStyle)}
                                >
                                    Create a one time use link to let a single guest pick a time to meet you.
                                </Typography>
                            </Button>

                            <Button className={cx(calSty4.flexdl)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                    More Soon…
                                </Typography>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tseccStyle)}
                                >
                                    View and Edit all the schedules or links that you’ve created.
                                </Typography>
                            </Button>

                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}