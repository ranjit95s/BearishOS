import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import aaa from "./wel.module.css";
export default function AddComment() {
    return (
        <>
            <StyledEngineProvider injectFirst>
            <Box
                    component="add"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography variant="h1" className={aaa.mainT}>
                            Add a Comment

                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.headerStyle2}>
                            <Typography variant="h1" className={aaa.mainT2}>
                            Please complete the below form to add a comment to this item. Thank You!
                            </Typography>
                        </CardContent>
                        <CardActions className={aaa.signSec}>
                            <CardContent className={aaa.wellM}>
                                <CardContent
                                style={{"width":"45%"}}
                                    className={aaa.inputStyle}
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
                                    className={aaa.inputStyle}
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
                                className={aaa.inputStyle}
                            >
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="code"
                                    id="code"
                                />
                            </CardContent>
                            <CardContent
                                className={aaa.btns}
                                
                            >
                                <CardContent
                                    className={aaa.btnIn}
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