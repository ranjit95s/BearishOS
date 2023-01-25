import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import alarm from '../img/alarm.svg';
import pinkco from '../img/pinkco.svg';
import noti from '../img/noti.svg';
import edit from '../img/edit.svg';
import pgroup from '../img/pgroup.svg';
import doc from '../img/doc.svg';
import loc from '../img/loc.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty from './CalComp_Sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function CalendarEventRemindar2() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty.boxWH2)}>
                    <Card className={cx(sty.inStyle, calSty.boxIn2)}>
                        <Stack className={cx(calSty.mar)}>
                            <CardContent className={cx(sty.headerStyle)}>
                                <CardContent className={cx(sty.signIn,calSty.tmr, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='Title of Event' name="code" id="code" />
                                </CardContent>
                                <ImageListItem id="my-element61" className={cx(calSty.tmr)}>
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element61"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Edit</span>
                                </ReactTooltip>
                                    <img src={edit} alt="close" loading="lazy" />
                                </ImageListItem>
                                <ImageListItem id="my-element60">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element60"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack)}>
                            <CardContent className={cx(calSty.iconCard2)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={alarm} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr)}>
                                        Thursday, January 12th <span className={calSty.dot}> • </span> 6:00 - 6:30 pm
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt16)}>
                            <CardContent className={cx(calSty.iconCard2)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={loc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent className={cx(sty.padding0, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t31521, calSty.tmr, calSty.op1)}>
                                            Location
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt16)}>
                            <CardContent className={cx(calSty.iconCard2)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={pinkco} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0)}>
                                    <Typography variant="h1" className={cx(calSty.sajmn, calSty.tmr)}>
                                        Start and Join Meeting Now
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt16)}>
                            <CardContent className={cx(calSty.iconCard2)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={pgroup} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr,calSty.overflow2)}>
                                <CardContent className={cx(sty.padding0)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tml, calSty.org)}>
                                        Oranizer
                                    </Typography>
                                </CardContent>
                                <CardContent className={cx(sty.padding0, calSty.mt16)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tml, calSty.org)}>
                                        Guests
                                    </Typography>
                                </CardContent>

                                <CardContent className={cx(sty.padding0, calSty.mt16)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tml, calSty.org)}>
                                        Oranizer
                                    </Typography>
                                </CardContent>
                                <CardContent className={cx(sty.padding0, calSty.mt16)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tml, calSty.org)}>
                                        Guests
                                    </Typography>
                                </CardContent>

                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt16)}>
                            <CardContent className={cx(calSty.iconCard2)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={doc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0)}>
                                    <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                        <textarea type="text" col="2" className={cx(calSty.ta)} placeholder='Add a Descripion' name="code" id="code" />
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt16)}>
                            <CardContent className={cx(calSty.iconCard2)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={noti} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0)}>
                                    <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr)}>
                                        Add a Remindar
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                    </Card>
                    <Stack className={cx(calSty.mainStack, calSty.mt16, calSty.jcsb)}>
                        <CardContent className={cx(sty.padding0)}>
                            <Typography variant="h1" className={cx(calSty.t615211, calSty.tmr, sty.padding0)}>
                                Going?
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(calSty.padding0, calSty.conf)}>
                            <CardContent className={cx(sty.btns, sty.save, sty.padding0,calSty.mr5)} style={{ "margin-top": "0px" }}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref, sty.save)}>
                                    <Button size="small" variant="contained" className={cx(sty.tmStyle)}>
                                        Yes
                                    </Button>
                                </CardContent>
                            </CardContent>
                            <CardContent className={cx(sty.btns, sty.save, sty.padding0)} style={{ "margin-top": "0px" }}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.out, sty.save)}>
                                    <Button size="small" variant="contained" className={cx(sty.tmStyle)}>
                                        No
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}