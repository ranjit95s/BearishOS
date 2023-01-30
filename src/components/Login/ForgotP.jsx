import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import logoM from './LogoM1.jpg.png';
import bg from '../img/bg2.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import log from './Login.module.css'
export default function ForgotP() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="login2" style={{ "backgroundImage": `url(${bg})` }} className={log.boxStyle}>
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
                                    <CardContent className={log.logbtns}>
                                        <CardContent className={log.forgot}>
                                            <Button variant="contained" className={log.styFont}>
                                                Send me a magic password reset link
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