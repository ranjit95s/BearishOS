import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import BearishLogo from '../img/LogoM1.jpg.png';
import bg from '../img/bg3.jpg';
import dau from '../img/dau.png';
import info from '../img/info1.svg';
import sq from '../img/sq1.svg';
import sq2 from '../img/sq1.svg';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import classes from './Login.module.css'
const CreateID = () => {
    const selects = [{ id: "1", text: "Sales Team" },
    { id: "2", text: "Marketing Team" }, { id: "3", text: "Product Team" },
    { id: "4", text: "Operations Team" }, { id: "5", text: "Other - What you'll use Bearish OS for" }];
    const [inputChange, setInputChange] = useState('')
    const [drop, setDrop] = useState(false);
    const onClickS = (id) => {
        setInputChange(selects[id - 1].text);
        setDrop(false);
    }
    onchange = () => {
        console.log("onChange");
    }
    const dropIt = () => {
        if (drop)
            setDrop(false);
        else
            setDrop(true);
    }
    return (
        <>
            <Stack>
                <Stack className={classes.bg}>
                    <Stack className={classes.loginModal}>
                        <Stack className={classes.loginBox}>
                            <Stack gap={'29px'} padding={'63px 90px 77px 85px'}>
                                <Stack className={classes.logoAdnTitle}>
                                    <Stack>
                                        <img width={'75px'} src={BearishLogo} alt={''} />
                                    </Stack>
                                    <Stack className={classes.bearishOSName}>
                                        Bearish OS
                                    </Stack>
                                </Stack>
                                <Stack style={{ "marginTop": "39px" }} className={classes.inputSty}>
                                    <Stack className={classes.flexII}>
                                        <Stack style={{ "width": "49%" }} className={classes.inputT}>
                                            <input type="text" placeholder='First Name' name="name1" id="name1" />
                                        </Stack>
                                        <Stack style={{ "width": "49%" }} className={classes.inputT}>
                                            <input type="text" placeholder='Last Name' name="name2" id="name2" />
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={classes.inputT}>
                                        <input type="text" placeholder='Email' name="email" id="email" />
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={classes.inputT}>
                                        <input type="Password" placeholder='Password' name="code" id="code" />
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={classes.flexII}>
                                        <Stack style={{ "width": "15%" }} className={classes.inputT}>
                                            <input type="number" placeholder='+1' name="PhoneExt" id="PhoneExt" />
                                        </Stack>
                                        <Stack style={{ "width": "84%" }} className={classes.inputT}>
                                            <input type="number" placeholder='Phone Number' name="phone" id="phone" />
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={classes.inputT2}>
                                        <input type="text" placeholder='Team Connect Code' readOnly name="TeamCode" id="TeamCode" />
                                        <ImageListItem style={{ "marginRight": "5px" }} className={classes.imgStyle2}>
                                            <img className={classes.imgStyle2} id="info" src={info} alt="close" loading="lazy" />
                                        </ImageListItem>
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={classes.inputT2}>
                                        <input onChange={onchange} onClick={dropIt} type="text" value={inputChange} placeholder='What type of team are you on?' name="type" id="type" />
                                        <ImageListItem style={{ "marginRight": "5px" }} className={classes.imgStyle2}>
                                            <img className={classes.imgStyle2} src={dau} alt="close" loading="lazy" />
                                        </ImageListItem>
                                        <Stack className={drop ? classes.abs : classes.spanHide}>
                                            <CardContent style={{ "padding": "10px" }} className={classes.inputT} >
                                                {selects.map((s) => {
                                                    return (
                                                        <Typography onClick={() => onClickS(s.id)} key={s.id} variant="h4" style={{ "marginBottom": "10px", "cursor": "pointer" }} className={classes.inputT}>
                                                            {s.text}
                                                        </Typography>
                                                    );
                                                })}
                                            </CardContent>
                                        </Stack>
                                    </Stack>
                                    </Stack>
                                    <CardContent className={classes.flexI}>
                                        <ImageListItem style={{ "marginRight": "15px" }} className={classes.imgStyle2}>
                                            <img className={classes.imgStyle2} src={sq} alt="close" loading="lazy" />
                                        </ImageListItem>
                                        <Typography className={classes.styFont2}>
                                            By creating an account and using Bearish OS you agree to our <span><a href="http://">Terms of Service</a></span> and <span><a href="http://">Privacy Policy</a></span>.
                                        </Typography>
                                    </CardContent>
                                    <Stack alignItems={'center'}>
                                        <Stack className={classes.loginBtn} >
                                            Create
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
            export default CreateID;

