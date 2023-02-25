import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Choose.module.css';
export default function CVschedules() {
    return (
        <>
             <StyledEngineProvider injectFirst>
                <Box component="chooseevent" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.headerStyle}>
                            <Typography variant="h1" className={classes.tllStyle}>
                            Create or View Schedules
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.signHover}>
                            <Button className={classes.ais}
                            
                            >
                                <Typography
                                    variant="h1"
                                    className={classes.als}
                                >
                                   Create Regularly Scheduled Events
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={classes.tsec}
                                >
                                    Create a new template for all your regularly scheduled events.
                                </Typography>
                            </Button>
                            <Button className={classes.ais}>
                                     <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                <Typography
                                    variant="h1"
                                    className={classes.als}
                                >
                                   Single Meeting Link
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={classes.tsec}
                                >
                                    Create a link for a one time meeting to send and share with a single person.
                                </Typography>
                            </Button>
                            <Button className={classes.ais}>
                                <Typography
                                    variant="h1"
                                    className={classes.als}
                                >
                                    View All Created Links
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={classes.tsec}
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