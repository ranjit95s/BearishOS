import * as React from "react";
import Box from "@mui/material/Box";
// import Popover from '@mui/material/Popover';
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import clock from "../img/clock.svg";
import alarm from "../img/alarm.svg";
import dad from "../img/ad.svg";
import noti from "../img/noti.svg";
import addC from "../img/addC.png";
import pgroup from "../img/pgroup.svg";
import Checkbox from "@mui/material/Checkbox";
import doc from "../img/doc.svg";
import loc from "../img/loc.svg";
import logoM from "../img/LogoM.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import aaa from "./CalendarEventRemindar.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function CalendarEventRemindar() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [timeZoneShow, setTimeZoneShow] = React.useState(false);
    const timeZS = () => {
        if (timeZoneShow) setTimeZoneShow(false);
        else setTimeZoneShow(true);
    };

    const [remindarShow, setRemidarShow] = React.useState(false);
    const remindarS = () => {
        if (remindarShow) setRemidarShow(false);
        else setRemidarShow(true);
    };

    const [pMTS, setPMTS] = React.useState(false);
    const pmtS = () => {
        if (pMTS) setPMTS(false);
        else setPMTS(true);
    };

    const [aDS, setADS] = React.useState(false);
    const adS = () => {
        if (aDS) setADS(false);
        else setADS(true);
    };

    const [startDate, setStartDate] = React.useState("00/00/0000");
    const [startTime, setStartTime] = React.useState("00:00 AM");
    const [endDate, setEndDate] = React.useState("00/00/0000");
    const [endTime, setEndTime] = React.useState("00:00 AM");
    const [timeZone, setTimeZone] = React.useState("Time Zone");
    const [remindar, setRemindar] = React.useState("Add A Remindar");
    const [purposeTime, setPurposeTime] = React.useState(
        "Propose Multiple Times"
    );

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <Stack className={aaa.mr}>
                            <CardContent className={aaa.headerStyle}>
                                <CardContent
                                style={{"marginRight":"15px"}}
                                    className={aaa.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="Add A Title"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                                <ImageListItem id="my-element63">
                                    <ReactTooltip
                                        className={aaa.tooltip}
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
                        <Stack className={aaa.mainStack}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={alarm} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <Typography
                                        variant="h1"
                                        style={{"marginRight":"15px"}}
                                        className={aaa.t61521op}
                                    >
                                        Start
                                    </Typography>
                                    <CardContent
                                        className={aaa.dateTimeFlex}
                                    >
                                        <Typography variant="h1" className={aaa.t31521}>
                                            {startDate}
                                        </Typography>
                                        <Typography variant="h1" className={aaa.t31521}>
                                            {startTime}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent
                                style={{"marginTop":"11px"}}
                                    className={aaa.headerCard}
                                >
                                    <Typography
                                        variant="h1"
                                        style={{"marginRight":"20px"}}
                                        className={aaa.t61521op}
                                    >
                                        End
                                    </Typography>
                                    <CardContent
                                        className={aaa.dateTimeFlex}
                                    >
                                        <Typography variant="h1"className={aaa.t31521}>
                                            {endDate}
                                        </Typography>
                                        <Typography variant="h1"className={aaa.t31521}>
                                            {endTime}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent
                                    style={{"justifyContent":"start"}}
                                    className={aaa.headerCard}
                                >
                                    <Typography variant="h1" className={aaa.t61521op}>
                                        All day
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                </CardContent>
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <CardContent
                                       className={aaa.inputStyle}
                                    >
                                        <input
                                            type="text"
                                            onClick={timeZS}
                                            placeholder="Time Zone"
                                            value={timeZone}
                                            name="code"
                                            id="code"
                                        />
                                        <ImageListItem>
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                    <CardContent
                                        className={
                                            timeZoneShow
                                                ? aaa.abs
                                                : aaa.spanHide
                                        }
                                    >
                                        <Typography className={aaa.t61521mb5}>
                                            Pacific Standard Time GMT +2
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            Pacific Standard Time GMT +2
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            Pacific Standard Time GMT +2
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            Pacific Standard Time GMT +2
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>

                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={noti} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <CardContent
                                        className={aaa.inputStyle}
                                    >
                                        <input
                                            type="text"
                                            onClick={remindarS}
                                            value={remindar}
                                            placeholder="Add a Remindar"
                                            name="code"
                                            id="code"
                                        />
                                        <ImageListItem>
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                    <CardContent
                                        className={
                                            remindarShow
                                                ? aaa.abs
                                                : aaa.spanHide
                                        }
                                    >
                                        <Typography className={aaa.t61521mb5}>
                                            15 Mins Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            30 Mins Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            01 Hour Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            02 Hours Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            02 Day Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5}>
                                            02 Day Before the Event
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={clock} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent
                                className={aaa.pwmrel}
                            >
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <CardContent
                                        onClick={pmtS}
                                        className={aaa.dateTimeFlex}
                                    >
                                        <Typography
                                            variant="h1"
                                            className={aaa.t61521mrop}
                                        >
                                            {purposeTime}
                                        </Typography>
                                        <ImageListItem>
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                                <CardContent
                                    className={
                                        pMTS
                                            ? aaa.abs
                                            : aaa.spanHide
                                    }
                                >
                                    <CardContent className={aaa.padding0}>
                                        <Typography className={aaa.atmb5}>
                                            00/00/00 00:00 AM to 00/00/00 00:00 AM
                                        </Typography>
                                        <Typography className={aaa.atmb5}>
                                            00/00/00 00:00 AM to 00/00/00 00:00 AM
                                        </Typography>
                                    </CardContent>
                                    <CardContent
                                        className={aaa.mainStackp0mt10}
                                    >
                                        <ImageListItem className={aaa.w25}>
                                            <img src={addC} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography className={aaa.atmb5}>
                                            Add New Meeting Time
                                        </Typography>
                                    </CardContent>
                                    <CardContent
                                        className={aaa.cbtn}
                                    >
                                        <CardContent
                                            className={aaa.cbtnin}
                                        >
                                            <Button
                                                onClick={pmtS}
                                                variant="contained"
                                            >
                                                Confirm
                                            </Button>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={pgroup} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent
                                className={aaa.pwmrel}
                            >
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <CardContent
                                        className={aaa.dateTimeFlex}
                                    >
                                        <Typography
                                            onClick={adS}
                                            variant="h1"
                                            className={aaa.t61521mrop}
                                        >
                                            Add Guests
                                        </Typography>
                                    </CardContent>
                                    <CardContent
                                        className={
                                            aDS
                                                ? aaa.abs
                                                : aaa.spanHide
                                        }
                                    >
                                        <Typography
                                            variant="h5"
                                            className={aaa.tnn}
                                        >
                                            <span
                                                className={aaa.tnn2}
                                            >
                                                TU
                                            </span>{" "}
                                            Full Name
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            className={aaa.tnnorg}
                                        >
                                            Oranizer
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={aaa.overf}>
                                    <CardContent className={aaa.pmt}>
                                        <Typography
                                            variant="h5"
                                            className={aaa.tnn}
                                        >
                                            <span
                                                className={aaa.tnn2}
                                            >
                                                TU
                                            </span>{" "}
                                            Full Name
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            className={aaa.org2}
                                        >
                                            Oranizer
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={aaa.pmt}>
                                        <Typography
                                            variant="h5"
                                            className={aaa.tnn}
                                        >
                                            <span
                                                className={aaa.tnn2}
                                            >
                                                TU
                                            </span>{" "}
                                            Full Name
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            className={aaa.org2}
                                        >
                                            Guests
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={logoM} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent
                                className={aaa.mtm}
                            >
                                <CardContent
                                style={{"justifyContent":"start"}}
                                    className={aaa.headerCard}
                                >
                                    <Typography variant="h1" className={aaa.t61521op}>
                                        Add Bearish Call
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={loc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <CardContent
                                       className={aaa.dateTimeFlex}
                                    >
                                        <Typography
                                            variant="h1"
                                            className={aaa.t61521mrop}
                                        >
                                            Location
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={doc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent className={aaa.hadp}>
                                    <CardContent
                                       className={aaa.inputStyle}
                                    >
                                        <textarea
                                            type="text"
                                            col="2"
                                            placeholder="Add a Descripion"
                                            name="code"
                                            id="code"
                                        />
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack style={{"justifyContent":"end"}} className={aaa.mainStackmt}>
                            <Typography
                                variant="h1"
                                className={aaa.tmstyle}
                            >
                                More Options...
                            </Typography>
                            <CardContent
                                className={aaa.btn}
                                style={{ "marginTop": "0px" }}
                            >
                                <CardContent
                                    className={aaa.btnin}
                                >
                                    <Button variant="contained">
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
