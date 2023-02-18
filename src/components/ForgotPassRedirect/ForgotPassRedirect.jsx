import * as React from 'react';
import Stack from '@mui/material/Stack';
import BearishLogo from '../img/LogoM1.jpg.png';
import classes from './ForgotPassRedirect.module.css'
const ForgotPassRedirect = () => {
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
                                <Stack gap={'20px'} style={{ "marginTop": "19px" }} className={classes.inputSty}>
                                    <Stack className={classes.inputT}>
                                        <input type="text" placeholder='Email' name="email" id="email" />
                                    </Stack>
                                    <Stack className={classes.inputT}>
                                        <input type="password" placeholder='New Password' name="oldPass" id="op" />
                                    </Stack>
                                    <Stack className={classes.inputT}>
                                        <input type="password" placeholder='New Password' name="newPass" id="np" />
                                    </Stack>
                                </Stack>
                                <Stack alignItems={'center'}>
                                    <Stack className={classes.loginBtn} >
                                        Save
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
export default ForgotPassRedirect;