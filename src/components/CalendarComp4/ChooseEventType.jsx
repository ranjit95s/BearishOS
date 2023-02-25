import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Choose.module.css';

export default function ChooseEventType() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="chooseevent" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.headerStyle}>
                            <Typography variant="h1" className={classes.tllStyle}>
                                Choose your Event Type
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.signHover}>
                            <Button className={classes.ais}
                            
                            >
                                <Typography
                                    variant="h1"
                                    className={classes.als}
                                >
                                    One on One Meetings
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={classes.tsec}
                                >
                                    Let your guests pick a time to have a one on one meeting with you.
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
                                    Create a One Time Meeting
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={classes.tsec}
                                >
                                    Create a one time use link to let a single guest pick a time to meet you.
                                </Typography>
                            </Button>
                            <Button className={classes.ais}>
                                <Typography
                                    variant="h1"
                                    className={classes.als}
                                >
                                    More Soon…
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