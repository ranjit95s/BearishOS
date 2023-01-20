import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import loading from '../img/loading.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function AskingJoinMeeting() {

    const [microphone, setMicrophone] = React.useState(false);
    const [cameraOn, setCameraON] = React.useState(false);

    const turnOnMic = () => {
        if(microphone){
            setMicrophone(false);
        }
        else {
            setMicrophone(true);
        }
    };

        const turnOnCam = () => {
        if(cameraOn){
            setCameraON(false);
        }
        else {
            setCameraON(true);
        }
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "350px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Asking to Join the Meeting
                            </Typography>
                            <ImageListItem >
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <Typography className={cx(sty.info, sty.tmsmStyle)}>
                                Your host will let you into the meeting soon. You can test your mic and video while you wait below
                            </Typography>
                            <Stack className={cx(sty.CameraON, sty.borderStyle)}></Stack>
                            <CardContent className={cx(sty.btns,sty.ask)}>
                                <ImageListItem style={{"display":"flex"}}>
                                    <ImageListItem className={microphone ? cx(sty.askp,sty.pink) : cx(sty.askp)} onClick={turnOnMic}>
                                        <img src={Close} alt="close" loading="lazy" />
                                    </ImageListItem>
                                    <ImageListItem className={cameraOn ? cx(sty.askp,sty.pink) : cx(sty.askp)} onClick={turnOnCam}>
                                        <img src={Close} alt="close" loading="lazy" />
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