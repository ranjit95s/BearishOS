import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
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
export default function EnterName() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "200px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography variant="h1" className={cx(sty.tlStyle)}>
                                Create New Calendar
                            </Typography>
                            <ImageListItem id="my-element19">
                                <ReactTooltip className={sty.tooltip} anchorId="my-element19" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                            <ImageListItem style={{ "margin-right": "8px" }}>
                                <img src={logoM} alt="close" loading="lazy" />
                            </ImageListItem>
                                <input type="text" placeholder='Enter Calendar Name' name="name" id="name" />
                            </CardContent>
                            <CardContent className={cx(sty.btns,sty.cbtn)}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref,sty.cbtn)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Create Now
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