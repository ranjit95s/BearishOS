import * as React from 'react';
import Box from '@mui/material/Box';
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

export default function JoinMeetingLoad() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "267px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Join a Meeting
                            </Typography>
                            <ImageListItem >
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Meeting Id or Meeting Link' name="code" id="code" />
                            </CardContent>
                            <Typography className={cx(sty.info,sty.tmsmStyle)}>
                            One moment, we’re connecting you to your meeting.
                            </Typography>
                            <CardContent className={cx(sty.btns)}>
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