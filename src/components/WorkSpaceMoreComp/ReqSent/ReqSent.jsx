import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import aaa from "./workSMC.module.css";
export default function NameYourFork() {
   
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="accessDenied"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography variant="h1" className={aaa.mainT}>
                            Request Sent
                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.headerStyle2}>
                            <Typography variant="h1" className={aaa.mainT2}>
                            You’re request to access this fork has been successfully sent.
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.btns}
                        >
                            <CardContent
                                className={aaa.btnIn}
                            >
                                <Button
                                style={{"width":"25px"}}
                                    size="small"
                                    variant="contained"
                                >
                                    Done
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}