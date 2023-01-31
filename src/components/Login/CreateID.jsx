import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import logoM from './LogoM1.jpg.png';
import bg from '../img/bg3.jpg';
import dau from '../img/dau.png';
import info from '../img/info1.svg';
import sq from '../img/sq1.svg';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import log from './Login.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function CreateID() {
    const selects = [{id:"1",text:"Sales Team"},
    {id:"2",text:"Marketing Team"},{id:"3",text:"Product Team"},
    {id:"4",text:"Operations Team"},{id:"5",text:"Other - What you'll use Bearish OS for"}];
    const [inputChange, setInputChange] = useState('')
    const [drop, setDrop] = useState(false);
    const onClickS = (id) => {
        setInputChange(selects[id-1].text);
        setDrop(false);
    }
    onchange = () => {
        console.log("onChange");
    }
    const dropIt = () => {
        if(drop)
        setDrop(false);
        else
        setDrop(true);
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="login1" style={{ "backgroundImage": `url(${bg})`, "height":"125vh" }} className={log.boxStyle}>
                    <Stack className={log.outStyle}>
                        <Stack className={log.inStyle} style={{ "height": "fit-content" }}>
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
                                    <Stack className={log.flexII}>
                                        <Stack className={log.inputT}>
                                            <input type="text" placeholder='First Name' name="name1" id="name1" />
                                        </Stack>
                                        <Stack className={log.inputT}>
                                            <input type="text" placeholder='Last Name' name="name2" id="name2" />
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={log.inputT}>
                                        <input type="text" placeholder='Email' name="email" id="email" />
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={log.inputT}>
                                        <input type="Password" placeholder='Password' name="code" id="code" />
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={log.flexII}>
                                        <Stack style={{ "width": "15%" }} className={log.inputT}>
                                            <input type="number" placeholder='+1' name="PhoneExt" id="PhoneExt" />
                                        </Stack>
                                        <Stack style={{ "width": "84%" }} className={log.inputT}>
                                            <input type="number" placeholder='Phone Number' name="phone" id="phone" />
                                        </Stack>
                                    </Stack>
                                    <Stack style={{ "marginTop": "20px" }} className={log.inputT2}>
                                        <input type="text" placeholder='Team Connect Code' readOnly name="TeamCode" id="TeamCode" />
                                        <ImageListItem style={{ "marginRight": "5px" }} className={log.imgStyle2}>
                                            <img className={log.imgStyle2} id="info" src={info} alt="close" loading="lazy" />
                                            <ReactTooltip anchorId="info" className={log.tooltip} type='light' effect='solid'>
                                                <span>Creating an account without a team connect code will make you an admin of your own organization. If your team already uses Bearish OS, have your admin invite you to continue.</span>
                                            </ReactTooltip>
                                        </ImageListItem>
                                    </Stack>
                                    <Stack  style={{ "marginTop": "20px" }} className={log.inputT2}>
                                        <input onChange={onchange} onClick={dropIt} type="text" value={inputChange} placeholder='What type of team are you on?' name="type" id="type" />
                                        <ImageListItem style={{ "marginRight": "5px" }} className={log.imgStyle2}>
                                            <img className={log.imgStyle2} src={dau} alt="close" loading="lazy" />
                                        </ImageListItem>
                                        <Stack className={drop ? log.abs : log.spanHide}>
                                            <CardContent style={{ "padding": "10px" }} className={log.inputT} >
                                        {selects.map((s) => {
                                            return (
                                                <Typography onClick={() => onClickS(s.id)} key={s.id} variant="h4" style={{ "marginBottom": "10px", "cursor":"pointer" }} className={log.inputT}>
                                                    {s.text}
                                                </Typography>
                                            );
                                        } )}
                                            </CardContent>
                                        </Stack>
                                    </Stack>
                                    <CardContent className={log.flexI}>
                                            <ImageListItem style={{ "marginRight": "15px" }} className={log.imgStyle2}>
                                            <img className={log.imgStyle2} src={sq} alt="close" loading="lazy" />
                                        </ImageListItem>
                                        <Typography className={log.styFont2}>
                                            By creating an account and using Bearish OS you agree to our <span><a href="http://">Terms of Service</a></span> and <span><a href="http://">Privacy Policy</a></span>.
                                        </Typography>
                                    </CardContent>
                                    <Stack className={log.flexf}>
                                        <Stack className={log.loginBtn}>
                                            Create an Account
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}