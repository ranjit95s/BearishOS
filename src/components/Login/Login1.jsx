import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import logoM from './LogoM1.jpg.png';
import bg from './bg1.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import log from './Login.module.css'
export default function Login1() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="login1" style={{ "backgroundImage": `url(${bg})` }} className={log.boxStyle}>
                    <Stack className={log.outStyle}>
                        <Stack className={log.inStyle}>
                            <Stack className={log.w}>
                                <Stack className={log.loginHead}>
                                    <ImageListItem style={{ "marginRight": "5px" }} className={log.imgStyle}>
                                        <img className={log.imgStyle} src={logoM} alt="close" loading="lazy" />
                                    </ImageListItem>
                                    <Typography variant="h1" className={log.mainT}>
                                        Bearish OS
                                    </Typography>
                                </Stack>
                                <Stack style={{ "marginTop": "39px" }} className={log.inputSty}>
                                    <Stack className={log.inputT}>
                                        <input type="text" placeholder='Email' name="email" id="email" />
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={log.inputT}>
                                        <input type="Password" placeholder='Password' name="code" id="code" />
                                    </Stack>
                                    <CardContent className={log.flexI}>
                                        <a href="http://"> Forgot Password </a>
                                        <Typography className={log.styFont}>
                                            Don't have an account? 
                                            <span><a href="http://"> Sign Up Now </a></span>
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={log.logbtns}>
                                        <CardContent className={log.logbtn}>
                                            <Button variant="contained" className={log.styFont}>
                                                Login
                                            </Button>
                                        </CardContent>
                                    </CardContent>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}