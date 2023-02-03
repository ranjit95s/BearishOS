import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import clock from '../img/clock.svg';
import alarm from '../img/alarm.svg';
import dad from '../img/ad.svg';
import noti from '../img/noti.svg';
import addC from '../img/addC.png';
import pgroup from '../img/pgroup.svg';
import Checkbox from '@mui/material/Checkbox';
import doc from '../img/doc.svg';
import loc from '../img/loc.svg';
import logoM from '../img/LogoM.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty from './CalComp_Sty.module.css';
import classes from './CalendarEventRemindar.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function CalendarEventRemindar() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [timeZoneShow, setTimeZoneShow] = React.useState(false);
    const timeZS = () => {
        if (timeZoneShow) 
            setTimeZoneShow(false);
        else 
            setTimeZoneShow(true);
    };

    const [remindarShow, setRemidarShow] = React.useState(false);
    const remindarS = () => {
        if (remindarShow) 
            setRemidarShow(false);
        else 
            setRemidarShow(true);
    };

    const [pMTS, setPMTS] = React.useState(false);
    const pmtS = () => {
        if (pMTS) 
            setPMTS(false);
        else 
            setPMTS(true);
    };

    const [aDS, setADS] = React.useState(false);
    const adS = () => {
        if (aDS) 
            setADS(false);
        else 
            setADS(true);
    };

    const [startDate, setStartDate] = React.useState('00/00/0000');
    const [startTime, setStartTime] = React.useState('00:00 AM');
    const [endDate, setEndDate] = React.useState('00/00/0000');
    const [endTime, setEndTime] = React.useState('00:00 AM');
    const [timeZone, setTimeZone] = React.useState('Time Zone');
    const [remindar, setRemindar] = React.useState('Add A Remindar');
    const [purposeTime, setPurposeTime] = React.useState('Propose Multiple Times');


    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty.boxWH)}>
                    <Card className={cx(sty.inStyle, calSty.boxIn)}>
                        <Stack className={cx(calSty.mar)}>
                            <CardContent className={cx(sty.headerStyle)}>
                                <CardContent className={cx(sty.signIn, calSty.signCal,calSty.tmr, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='Add A Title' name="code" id="code" />
                                </CardContent>
                                <ImageListItem id="my-element63">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element63"
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
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={alarm} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr)}>
                                        Start
                                    </Typography>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t31521)}>
                                            {startDate}
                                        </Typography>
                                        <Typography variant="h1" className={cx(calSty.t31521)}>
                                            {startTime}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100, calSty.mt10)}>
                                    <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.mr)}>
                                        End
                                    </Typography>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t31521)}>
                                            {endDate}
                                        </Typography>
                                        <Typography variant="h1" className={cx(calSty.t31521)}>
                                            {endTime}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100, calSty.jcs)}>
                                    <Typography variant="h1" className={cx(calSty.t61521)}>
                                        All day
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </CardContent>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, sty.rel)}>
                                    <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                        <input type="text" onClick={timeZS} placeholder='Time Zone' value={timeZone} name="code" id="code" />
                                        <ImageListItem >
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                    <CardContent className={timeZoneShow ? cx(sty.padding0, sty.abs, calSty.top2) : cx(sty.padding0, sty.abs, calSty.top2, sty.spanHide) }>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>Pacific Standard Time GMT +2</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>Pacific Standard Time GMT +2</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>Pacific Standard Time GMT +2</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>Pacific Standard Time GMT +2</Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={noti} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, sty.rel)}>
                                    <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                        <input type="text" onClick={remindarS} value={remindar} placeholder='Add a Remindar' name="code" id="code" />
                                        <ImageListItem >
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                    <CardContent className={remindarShow ? cx(sty.padding0, sty.abs, calSty.top2): cx(sty.padding0, sty.abs, calSty.top2, sty.spanHide)}>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>15 Mins Before the Event</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>30 Mins Before the Event</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>01 Hour Before the Event</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>02 Hours Before the Event</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>02 Day Before the Event</Typography>
                                        <Typography className={cx(calSty.t61521, calSty.mb5)}>02 Day Before the Event</Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={clock} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr, sty.rel)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent onClick={pmtS} className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                                            {purposeTime}
                                        </Typography>
                                        <ImageListItem >
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={pMTS ? cx(sty.padding0, sty.abs, calSty.top2) :  cx(sty.padding0, sty.abs, calSty.top2, sty.spanHide)}>
                                    <CardContent className={cx(sty.padding0)}>
                                        <Typography className={cx(calSty.addTime, calSty.mb5)}>00/00/00 00:00 AM to 00/00/00 00:00 AM</Typography>
                                        <Typography className={cx(calSty.addTime, calSty.mb5)}>00/00/00 00:00 AM to 00/00/00 00:00 AM</Typography>
                                    </CardContent>
                                    <CardContent className={cx(sty.padding0, calSty.mainStack, calSty.mt10)}>
                                        <ImageListItem className={cx(calSty.w25)}>
                                            <img src={addC} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography className={cx(calSty.addTime, calSty.mb5)}>Add New Meeting Time</Typography>
                                    </CardContent>
                                    <CardContent className={cx(sty.btns, calSty.conn, calSty.jce)} style={{ "margin-top": "0px" }}>
                                        <CardContent className={cx(sty.btnIn, sty.tmStyle, sty.ref, calSty.conn)}>
                                            <Button onClick={pmtS} variant="contained" className={cx(calSty.addTime)}>
                                                Confirm
                                            </Button>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={pgroup} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr, sty.rel)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography onClick={adS} variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                                            Add Guests
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={aDS ? cx(sty.padding0, sty.abs, calSty.top2,calSty.w100) : cx(sty.padding0, sty.abs, calSty.top2,calSty.w100,sty.spanHide)}>
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tml, calSty.org)}>
                                        Oranizer
                                    </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.padding0,calSty.overflow2)}>
                                <CardContent className={cx(sty.padding0, calSty.mt10)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tmr, calSty.org)}>
                                        Oranizer
                                    </Typography>
                                </CardContent>
                                <CardContent className={cx(sty.padding0, calSty.mt10)} >
                                    <Typography variant="h5" className={cx(calSty.tnnn1521, calSty.tmr, calSty.op1)}>
                                        <span className={cx(calSty.picTU, sty.tnnn1521, sty.padding0)}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={cx(calSty.t31216, calSty.tmr, calSty.org)}>
                                        Guests
                                    </Typography>
                                </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={logoM} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mtm)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100, calSty.jcs)}>
                                    <Typography variant="h1" className={cx(calSty.t61521)}>
                                        Add Bearish Call
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={loc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                                            Location
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
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
                        <Stack className={cx(calSty.mainStack, calSty.mt10, calSty.jce)}>
                            <Typography variant="h1" className={cx(sty.tmStyle, calSty.tmr,calSty.op05)}>
                                More Options...
                            </Typography>
                            <CardContent className={cx(sty.btns, calSty.saved)} style={{ "margin-top": "0px" }}>
                                <CardContent className={cx(sty.btnIn, sty.tmStyle, sty.ref, calSty.saved)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Save
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}