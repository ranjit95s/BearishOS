import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import info from '../../img/info1.svg';
import dad from '../../img/dad.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import logoM from '../../img/add1.svg'
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './SuperCharge.module.css';
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
                <Box component="namereco" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.signCal}>
                            <input type="text" placeholder='Name Your Screen Recording' name="code" id="code" />
                        </CardContent>
                        <CardContent onClick={choose1} className={classes.chooseF}>
                            <Typography variant="h1" className={classes.textM}>
                                Choose Video Folder
                            </Typography>
                            <ImageListItem className={classes.imgFlex}>
                                <img src={dad} style={{ "marginRight": "15px" }} alt="dad" loading="lazy" />
                            <ReactTooltip
                                        className={classes.tooltip2}
                                        anchorId="my-yt"
                                        type="light"
                                        effect="solid"
                                    >
                                        <span>
                                            Add the rough amount of time this agenda item should
                                            take in the meeting
                                        </span>
                                    </ReactTooltip>
                                <img src={info} id="my-yt" className={classes.w14} alt="dad" loading="lazy" />
                            </ImageListItem>
                            <Stack className={choose ? classes.abs : classes.spanHide}>
                                <CardContent  className={classes.hoverBody} >
                                    <Typography variant="h1" className={classes.dtext}>
                                        Bearish OS Folder One
                                    </Typography>
                                    <Typography variant="h1" className={classes.dtext}>
                                        Second Folder Image
                                    </Typography>
                                    <Typography variant="h1" className={classes.dtext}>
                                        Daily Team Meeting
                                    </Typography>
                                    <Typography variant="h1" className={classes.dtext}>
                                        Even More Folder
                                    </Typography>
                                </CardContent>
                            </Stack>
                        </CardContent>
                        <CardContent className={classes.create}>
                            <ImageListItem style={{ "marginRight": "8px" }}>
                                <img src={logoM} alt="close" loading="lazy" />
                            </ImageListItem>
                            <CardContent className={classes.inCreate}>
                                <input onClick={toCreate} type="text" placeholder='Create New Video Folder' name="code" id="code" />
                            </CardContent>
                            <CardContent className={isCreate ? classes.createBtn : classes.spanVis}>
                                <CardContent className={classes.createBtnIn}>
                                    <Button size="small" variant="contained" >
                                        Create
                                    </Button>
                                </CardContent>
                            </CardContent> 
                            
                        </CardContent>
                        <CardContent className={classes.bcreate}>
                            <CardContent className={classes.bbcreate}>
                                <Button variant="contained">
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