import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../../../img/Close.svg';
import camOn from '../../../img/camOn.svg';
import micOn from '../../../img/micOn.svg';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import loading from '../../../img/loading.png';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import classes from './PleaseWait.module.css';
import { StyledEngineProvider } from '@mui/material/styles';


const PleaseWait = () => {

    const [microphone, setMicrophone] = React.useState(false);
    const [cameraOn, setCameraON] = React.useState(false);

    const turnOnMic = () => {
        if(microphone)
            setMicrophone(false);
        else 
            setMicrophone(true);
    };

        const turnOnCam = () => {
        if(cameraOn)
            setCameraON(false);
        else 
            setCameraON(true);
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="ask" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                            Please Wait.
                            </Typography>
                            <ImageListItem id="my-element47">
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <Typography className={classes.info}>
                            Your host has seen your request, and asks that you please wait. Thank You!
                            </Typography>
                            <Stack className={classes.CameraON}></Stack>
                            <CardContent className={classes.askBtn}>
                                <ImageListItem style={{"display":"flex"}}>
                                    <ImageListItem className={microphone ? classes.askpp : classes.askp} onClick={turnOnMic}>
                                        <img src={micOn} alt="close" loading="lazy" />
                                    </ImageListItem>
                                    <ImageListItem className={cameraOn ? classes.askpp : classes.askp} onClick={turnOnCam}>
                                        <img src={camOn}  alt="close" loading="lazy" />
                                    </ImageListItem>
                                </ImageListItem>
                                <ImageListItem >
                                    <img src={loading} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}

export default PleaseWait;