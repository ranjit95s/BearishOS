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
export default function CVschedules() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty4.boxWH2)}>
                    <Card className={cx(sty.inStyle, calSty4.boxIn2)}>
                    <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.tllStyle)}>
                            Create or View Schedules
                            </Typography>
                    </CardContent>
                    <CardActions className={cx(sty.signSec)}>
                            <Button className={cx(calSty4.flexdl,calSty4.ais)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                   Create Regularly Scheduled Events
                                </Typography>
                                <Typography
                                 varient="h1"
                                 className={cx(calSty4.tseccStyle)}
                                >
                                Create a new template for all your regularly scheduled events.
                                </Typography>
                            </Button>

                            <Button className={cx(calSty4.flexdl,calSty4.ais)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                   Single Meeting Link
                                </Typography>
                                <Typography
                                 varient="h1"
                                 className={cx(calSty4.tseccStyle)}
                                >
                                Create a link for a one time meeting to send and share with a single person.
                                </Typography>
                            </Button>

                            <Button className={cx(calSty4.flexdl,calSty4.ais)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                   View All Created Links
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