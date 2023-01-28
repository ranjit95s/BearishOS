import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import dad from '../img/dad.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import logoM from '../img/LogoM.png'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import stySC from './superC.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function NameYourReco() {
    const [choose, setChoose] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const toCreate = () => {
        if(isCreate)
        setIsCreate(false);
        else
        setIsCreate(true);
    }

    const choose1 = () => {
        if (choose) {
            setChoose(false);
        }
        else {
            setChoose(true);
        }
    };
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "200px", "width": "350px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "width": "325px" }}>
                        <CardContent className={cx(sty.signIn, stySC.signCal, calSty.tmr, stySC.ttstyle, sty.inputStyle, sty.NickStyle, calSty.op1)}>
                            <input type="text" placeholder='Name Your Screen Recording' name="code" id="code" />
                        </CardContent>
                        <CardContent onClick={choose1} style={{ "width": "275px", "align-items": "center" }} className={cx(sty.borderStyle, sty.rel, calSty.mt10, calSty.dateTimeFlex)}>
                            <Typography variant="h1" className={cx(stySC.ttstyle, calSty.tmr, stySC.op05)}>
                                Choose Video Folder
                            </Typography>
                            <ImageListItem style={{ "display": "flex" }}>
                                <img src={dad} alt="dad" loading="lazy" />
                                <img src={dad} style={{ "margin-left": "15px" }} alt="dad" loading="lazy" />
                            </ImageListItem>
                            <Stack style={{ "width": "200px" }} className={choose ? cx(sty.ddd, calSty.extra, stySC.abs, sty.padding0) : cx(sty.ddd, stySC.abs, sty.padding0, sty.spanHide)}>
                                <CardContent style={{ "padding": "10px" }} className={cx(sty.hoverBody, sty.w100)} >
                                    <Typography variant="h1" className={cx(stySC.ddt, calSty.mt, sty.w100, calSty.hinput)}>
                                        Bearish OS Folder One
                                    </Typography>
                                    <Typography variant="h1" className={cx(stySC.ddt, calSty.mt, sty.w100, calSty.hinput)}>
                                        Second Folder Image
                                    </Typography>
                                    <Typography variant="h1" className={cx(stySC.ddt, sty.mt, sty.w100)}>
                                        Daily Team Meeting
                                    </Typography>
                                    <Typography variant="h1" className={cx(stySC.ddt, sty.mt, sty.w100)}>
                                        Even More Folder
                                    </Typography>
                                </CardContent>
                            </Stack>
                        </CardContent>
                        <CardContent className={cx(stySC.signIn, sty.tmStyle, stySC.inputStyle, sty.NickStyle, stySC.c)}>
                            <ImageListItem style={{ "margin-right": "8px" }}>
                                <img src={logoM} alt="close" loading="lazy" />
                            </ImageListItem>
                            <CardContent className={cx(sty.padding0, calSty.tmr, stySC.ttstyle, stySC.inputStyle, sty.NickStyle, calSty.op1)}>
                                <input onClick={toCreate} type="text" className={stySC.ttstyle} placeholder='Create New Video Folder' name="code" id="code" />
                            </CardContent>
                           
                            <CardContent className={isCreate ? cx(sty.btns, sty.save) : cx(sty.btns, sty.save,sty.spanVis)} style={{ "margin-top": "0px" }}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref, sty.save)}>
                                    <Button size="small" variant="contained" className={cx(sty.tmStyle)}>
                                        Create
                                    </Button>
                                </CardContent>
                            </CardContent> 
                            
                        </CardContent>
                        <CardContent className={cx(sty.btns, stySC.cbtn)}>
                            <CardContent className={cx(sty.btnIn, stySC.ttstyle, sty.ref, stySC.cbtn, calSty.op1)}>
                                <Button variant="contained" className={cx(stySC.ttstyle)}>
                                    Create
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}