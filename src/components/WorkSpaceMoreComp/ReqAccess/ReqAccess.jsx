import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from "./wel.module.css";
export default function ReqAccess() {
    return (
        <>
            <StyledEngineProvider injectFirst>
            <Box
                    component="add"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.headerStyle}>
                            <Typography variant="h1" className={classes.mainT}>
                            Request Access
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.headerStyle2}>
                            <Typography variant="h1" className={classes.mainT2}>
                            To request access to this fork please provide your name & email.
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.signSec}>
                            <CardContent className={classes.wellM}>
                                <CardContent
                                style={{"width":"45%"}}
                                    className={classes.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                                <CardContent
                                style={{"width":"45%"}}
                                    className={classes.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                            <CardContent
                                className={classes.inputStyle}
                            >
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="code"
                                    id="code"
                                />
                            </CardContent>
                            <CardContent
                                className={classes.btns}
                                
                            >
                                <CardContent
                                    className={classes.btnIn}
                                >
                                    <Button
                                        size="small"
                                        variant="contained"
                                    >
                                        Done
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}