import * as React from 'react';
import Stack from '@mui/material/Stack';
import BearishLogo from '../img/LogoM1.jpg.png';
import bg from '../img/bg2.jpg';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import classes from './Login.module.css'
const ForgotP = () => {
    return (
        <>
                <Stack>
                <Stack className={classes.bg}>
                    <Stack className={classes.loginModal}>
                        <Stack className={classes.loginBox}>
                            <Stack gap={'29px'} padding={'63px 90px 77px 85px'}>
                                <Stack className={classes.logoAdnTitle}>
                                    <Stack>
                                        <img width={'75px'} src={BearishLogo} alt={''}/>
                                    </Stack>
                                    <Stack className={classes.bearishOSName}>
                                        Bearish OS
                                    </Stack>
                                </Stack>
                                <Stack style={{ "marginTop": "39px" }} className={classes.inputSty}>
                                    <Stack className={classes.inputT}>
                                        <input type="text" placeholder='Email' name="email" id="email" />
                                    </Stack>
                                </Stack>
                                <Stack alignItems={'center'}>
                                    <Stack className={classes.loginBtn} >
                                        Send me magic password reset link
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
export default ForgotP;