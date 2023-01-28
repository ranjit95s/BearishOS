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
                <Box component="EnterName" style={{ "width": "110px","height":"fit-content" }} className={hide ? cx(sty.boxStyle,stySC.left,sty.rel) : cx(sty.boxStyle,sty.rel)}>
                    <Card className={cx(stySC.f)} style={{"height":"fit-content" }}>
                        <Typography variant="h5" className={cx(stySC.ttstyle, stySC.mt,stySC.op05)}>
                            Screen Recording Name
                        </Typography>
                        <Typography variant="h5" className={cx(stySC.ttstyle, stySC.mt,stySC.op05)}>
                            Video Length
                        </Typography>
                        <Typography variant="h5" className={cx(stySC.ttstyle3, stySC.mt)}>
                            00:00:00
                        </Typography>
                        <CardContent style={{"padding-top":"0px","padding-bottom":"0px"}}>
                            <ImageListItem onClick={handleFun1} className={start ? cx(stySC.imgu, stySC.mt,stySC.bgg) : cx(stySC.imgu, stySC.mt)}>
                                <img src={Close} className={stySC.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={stySC.ttstyle3}>
                                    Start
                                </Typography>
                            </ImageListItem>
                            <ImageListItem onClick={handleFun2} className={pause ? cx(stySC.imgu, stySC.mt,stySC.bgg) : cx(stySC.imgu, stySC.mt)}>
                                <img src={Close} className={stySC.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={stySC.ttstyle3}>
                                    Pause
                                </Typography>
                            </ImageListItem>
                            <ImageListItem onClick={handleFun3} className={end ? cx(stySC.imgu, stySC.mt,stySC.bgg) : cx(stySC.imgu, stySC.mt)}>
                                <img src={Close} className={stySC.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={stySC.ttstyle3}>
                                    End
                                </Typography>
                            </ImageListItem>
                            <ImageListItem className={cx(stySC.imgu, stySC.mt)}>
                                <img src={Close} className={stySC.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={stySC.ttstyle3}>
                                Details
                                </Typography>
                            </ImageListItem>
                        </CardContent>
                    </Card>
                    <Stack onClick={hideBar} className={cx(sty.ddd, calSty.extra, stySC.abs2, sty.padding0)}>
                    <ImageListItem className={cx(stySC.imgu2, stySC.mt,sty.padding0)} >
                                <img src={Close} className={stySC.imgStyle} alt="close" loading="lazy" />
                            </ImageListItem>
                            </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}