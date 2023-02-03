import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';

import play from '../img/play.svg';
import pauses from '../img/pause.svg';
import edit1 from '../img/edit1.svg';
import ends from '../img/end.svg';
import lt from '../img/lt.svg';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './panel.module.css';
export default function NameYourReco1() {
    const [choose, setChoose] = useState(false);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(true)
    const [end, setEnd] = useState(false);
    const [hide, setHide] = useState(false);

    const hideBar = () => {
        if(hide)
        setHide(false);
        else
        setHide(true);
    }

    const handleFun1 = () => {
        if(start){
        setStart(false);
        setPause(true);
        setEnd(false);
    }
        else {
        setStart(true);
        setPause(false);
        setEnd(false);
    }
    }
    const handleFun2 = () => {
        if(pause && (end || start)){
        setPause(false);
    }
        else {
        setStart(false);
        setPause(true);
        setEnd(false);
    }
    }
    const handleFun3 = () => {
        if(end){
        setStart(false);
        setPause(true);
        setEnd(false);
    }
        else {
        setStart(false);
        setPause(false);
        setEnd(true);
    }
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
                <Box component="recoPanel" className={hide ? classes.boxStyleL : classes.boxStyle}>
                    <Card className={classes.f} >
                        <Typography variant="h5" className={classes.mainT}>
                            Screen Recording Name
                        </Typography>
                        <Typography variant="h5" className={classes.mainT}>
                            Video Length
                        </Typography>
                        <Typography variant="h5" className={classes.timer}>
                            00:00:00
                        </Typography>
                        <CardContent className={classes.ptpb}>
                            <ImageListItem onClick={handleFun1} className={start ? classes.bgimgu : classes.imgu}>
                                <img src={play} className={classes.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={classes.ttstyle3}>
                                    Start
                                </Typography>
                            </ImageListItem>
                            <ImageListItem onClick={handleFun2} className={pause ? classes.bgimgu : classes.imgu}>
                                <img src={pauses} className={classes.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={classes.ttstyle3}>
                                    Pause
                                </Typography>
                            </ImageListItem>
                            <ImageListItem onClick={handleFun3} className={end ? classes.bgimgu : classes.imgu}>
                                <img src={ends} className={classes.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={classes.ttstyle3}>
                                    End
                                </Typography>
                            </ImageListItem>
                            <ImageListItem className={classes.imgu}>
                                <img src={edit1} className={classes.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={classes.ttstyle3}>
                                Details
                                </Typography>
                            </ImageListItem>
                        </CardContent>
                    </Card>
                    <Stack onClick={hideBar} className={classes.hid}>
                            <ImageListItem className={classes.hid2} >
                                <img src={lt} className={classes.imgStyle} alt="close" loading="lazy" />
                            </ImageListItem>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}