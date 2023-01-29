import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import search from '../img/search.svg';
import edit from '../img/edit1.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import stySC from './superC.module.css';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import logoM from '../img/LogoM.png'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Message() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "width": "310px","height":"fit-content" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{"height":"fit-content"}}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Message
                            </Typography>
                            <ImageListItem id="my-element530">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element530"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardContent className={cx(stySC.signIn1, sty.tmStyle, stySC.inputStyle, sty.NickStyle, stySC.c)}>
                            <CardContent className={stySC.df}>
                            <ImageListItem style={{ "margin-right": "8px" }}>
                                <img src={search} alt="close" loading="lazy" />
                            </ImageListItem>
                            <CardContent className={cx(sty.padding0, calSty.tmr, stySC.ttstyle, stySC.inputStyle, sty.NickStyle, calSty.op1)}>
                                <input type="text" className={stySC.ttstyle} placeholder='Search Message' name="code" id="code" />
                            </CardContent>
                            </CardContent>
                            <CardContent className={cx(sty.padding0)} style={{ "margin-top": "0px" }}>
                            <ImageListItem style={{ "margin-right": "8px" }}>
                                <img src={edit} alt="close" loading="lazy" />
                            </ImageListItem>
                            </CardContent>
                        </CardContent>
                        <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                   Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                   narutouzumaki2002@gmail.com
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                        <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                   Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                   narutouzumaki2002@gmail.com
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                   Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                   narutouzumaki2002@gmail.com
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                   Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                   narutouzumaki2002@gmail.com
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}