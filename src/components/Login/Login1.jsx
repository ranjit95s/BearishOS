import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {Stack, TextField} from "@mui/material";
import BearishLogo from './LogoM1.jpg.png';
import classes from './Login.module.css'
export default function Login1() {
    const [state, setState] = useState({password: '', email: ''});
    const handleChange = ({target}) => {
        setState(pre => ({...pre, [target.name]: target.value}))
    };
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
                                <Stack>
                                    <Stack gap={'20px'} >
                                        <TextField placeholder={'Email'} name={'email'} onChange={handleChange}/>
                                        <Stack gap={'10px'}>
                                            <TextField  placeholder={'Password'} type={'password'} name={'password'}
                                                       onChange={handleChange}/>
                                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                                <Stack className={classes.forgotPassword}>
                                                    Forgot Password
                                                </Stack>
                                                <Stack direction={'row'} gap={'3px'}>
                                                    <Stack fontSize={'13px'}>
                                                        Don’t have an account?
                                                    </Stack>
                                                    <Stack className={classes.signUp}>
                                                        Sign Up Now
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack alignItems={'center'}>
                                    <Stack className={classes.loginBtn} >
                                        Login
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