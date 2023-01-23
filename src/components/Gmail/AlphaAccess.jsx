import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import sem from '../img/sem.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function AlphaAccess() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="AlphaAccess" className={cx(sty.boxStyle)}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Alpha Access
                        </Typography>
                        <ImageListItem id="my-element4">
                                <ReactTooltip  anchorId="my-element4" className={sty.tooltip} type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sem} alt="email" />
                        <Typography varient="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Google Gmail
                        </Typography>
                    </Button>
                    <Typography className={cx(sty.info,sty.tsStyle)}>
                    Our Intelligent Connection connecting Google Gmail and Bearish OS is currently in Alpha Access only. 
                    If you think you should have access contact, your admin. You will be
                    automatically redirected if your alpha access code is correct.
                    </Typography>
                    <CardContent className={cx(sty.signIn,sty.tmStyle,sty.inputStyle)}>
                        <input type="text" placeholder='Enter Alpha Access Code' name="code" id="code" />
                    </CardContent>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}