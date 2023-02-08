import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import aaa from './Choose.module.css';

export default function ChooseEventType() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="chooseevent" className={aaa.boxStyle}>
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography variant="h1" className={aaa.tllStyle}>
                                Choose your Event Type
                            </Typography>
                        </CardContent>
                        <CardActions className={aaa.signHover}>
                            <Button className={aaa.ais}
                            >
                                <Typography
                                    variant="h1"
                                    className={aaa.als}
                                >
                                    One on One Meetings
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={aaa.tsec}
                                >
                                    Let your guests pick a time to have a one on one meeting with you.
                                </Typography>
                            </Button>
                            <Button className={aaa.ais}>
                                <Typography
                                    variant="h1"
                                    className={aaa.als}
                                >
                                    Create a One Time Meeting
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className={aaa.tsec}
                                >
                                    Create a one time use link to let a single guest pick a time to meet you.
                                </Typography>
                            </Button>
                            <Button className={aaa.ais}>
                                <Typography
                                    variant="h1"
                                    className={aaa.als}
                                >
                                    More Soon…
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