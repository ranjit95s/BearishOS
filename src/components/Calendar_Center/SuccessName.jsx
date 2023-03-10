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
export default function SuccessName() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "150px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography variant="h1" className={cx(sty.tlStyle)}>
                                Success
                            </Typography>
                            <ImageListItem id="my-element21">
                                <ReactTooltip className={sty.tooltip} anchorId="my-element21" type='light' effect='solid'>
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
                                <input type="text" defaultValue="Calendar Name" readOnly name="name" id="name" />
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}