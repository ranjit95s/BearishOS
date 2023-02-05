import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import aaa from './Choose.module.css';
export default function CVschedules() {
    return (
        <>
             <StyledEngineProvider injectFirst>
                <Box component="chooseevent" className={aaa.boxStyle}>
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography variant="h1" className={aaa.tllStyle}>
                            Create or View Schedules
                            </Typography>
                        </CardContent>
                        <CardActions className={aaa.signHover}>
                            <Button className={aaa.ais}
                            
                            >
                                <Typography
                                    variant="h1"
                                    className={aaa.als}
                                >
                                   Create Regularly Scheduled Events
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={aaa.tsec}
                                >
                                    Create a new template for all your regularly scheduled events.
                                </Typography>
                            </Button>
                            <Button className={aaa.ais}>
                                <Typography
                                    variant="h1"
                                    className={aaa.als}
                                >
                                   Single Meeting Link
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={aaa.tsec}
                                >
                                    Create a link for a one time meeting to send and share with a single person.
                                </Typography>
                            </Button>
                            <Button className={aaa.ais}>
                                <Typography
                                    variant="h1"
                                    className={aaa.als}
                                >
                                    View All Created Links
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={aaa.tsec}
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