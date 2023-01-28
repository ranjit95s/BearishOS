import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import logoM from '../img/LogoM.png'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Oops() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{"width":"300px","height":"300px"}} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{"width":"250px"}}>
                        <CardContent style={{"margin-top":"20px"}} className={cx(sty.headerStyle)}>
                            <Typography variant="h1" className={cx(sty.tlStyle)}>
                                Oops!
                            </Typography>
                            <ImageListItem id="my-element19">
                                <ReactTooltip className={sty.tooltip} anchorId="my-element19" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Typography variant="h1" style={{"margin-top":"5px"}} className={cx(sty.kuch)}>
                        The host has rejected your request to Join the meeting. Maybe you’re in the wrong one. Check your link and name again.
                            </Typography>
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent style={{"margin-top":"20px"}} className={cx(sty.signIn, sty.tsStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Meeting Link' name="name" id="name" />
                            </CardContent>
                            <CardContent className={cx(sty.btns,sty.cbtn)}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref,sty.cbtn)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Go
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}