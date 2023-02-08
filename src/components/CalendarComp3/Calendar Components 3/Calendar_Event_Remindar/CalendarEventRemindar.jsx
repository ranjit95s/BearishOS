import * as React from "react";
import Box from "@mui/material/Box";
// import Popover from '@mui/material/Popover';
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../../img/Close.svg";
import clock from "../../../img/clock.svg";
import alarm from "../../../img/alarm.svg";
import dad from "../../../img/ad.svg";
import noti from "../../../img/noti.svg";
import addC from "../../../img/addC.png";
import pgroup from "../../../img/pgroup.svg";
import Checkbox from "@mui/material/Checkbox";
import doc from "../../../img/doc.svg";
import sq2 from "../../../img/sq2.svg";
import sq from "../../../img/sq1.svg";
import loc from "../../../img/loc.svg";
import logoM from "../../../img/LogoM.png";
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
    const [remindar, setRemindar] = React.useState("Add A Reminder");
    const [purposeTime, setPurposeTime] = React.useState(
        "Propose Multiple Times"
    );

    const [checker, setChecker] = React.useState({ allDay: true, calls: false });
    const checkercheck = (id) => {
        if (id === 1) {
            if (checker.allDay) {
                setChecker({ ...checker, allDay: false });
            } else {
                setChecker({ ...checker, allDay: true });
            }
        } else {
            if (checker.calls) {
                setChecker({ ...checker, calls: false });
            } else {
                setChecker({ ...checker, calls: true });
            }
        }
    };
    const addGuest_Array = [
        {
            id: "1",
            ProfilePic: "TU",
            Name: "Full Name 1",
            Type: "Guest",
        },
        {
            id: "2",
            ProfilePic: "TU",
            Name: "Full Name 2",
            Type: "Oranizer",
        },
    ];
    const display_AddGuest_Array = 
    <CardContent className={aaa.overf}>
        {addGuest_Array.map((d) => 
        <CardContent key={d.id} className={aaa.pmt}>
            <Typography variant="h5" className={aaa.tnn}>
                <span className={aaa.tnn2}>{d.ProfilePic}</span> {d.Name}
            </Typography>
            <Typography variant="h6" className={aaa.org2}>
                {d.Type}
            </Typography>
        </CardContent>
    )}
     </CardContent>


    const [dropSelect, setDropSelect] = React.useState({ droptimeZones: timeZone, dropReminder: remindar });
    const sele = (id, selectId) => {
        if (id === 1) {
            if (selectId === 1) {
                setDropSelect({ ...dropSelect, droptimeZones: 'Pacific Standard Time GMT +2' })
                setTimeZoneShow(false);
            }
            else if (selectId === 2) {
                setDropSelect({ ...dropSelect, droptimeZones: 'Pacific Standard Time GMT +4' })
                setTimeZoneShow(false);
            }
            else if (selectId === 3) {
                setDropSelect({ ...dropSelect, droptimeZones: 'Pacific Standard Time GMT +8' })
                setTimeZoneShow(false);
            }
            else if (selectId === 4) {
                setDropSelect({ ...dropSelect, droptimeZones: 'Pacific Standard Time GMT +12' })
                setTimeZoneShow(false);
            }
        }
        else if (id === 2) {
            if (selectId === 1) {
                setDropSelect({ ...dropSelect, dropReminder: '15 Mins Before the Event' })
                setRemidarShow(false);
            }
            else if (selectId === 2) {
                setDropSelect({ ...dropSelect, dropReminder: '30 Mins Before the Event' })
                setRemidarShow(false);
            }
            else if (selectId === 3) {
                setDropSelect({ ...dropSelect, dropReminder: '01 Hour Before the Event' })
                setRemidarShow(false);
            }
            else if (selectId === 4) {
                setDropSelect({ ...dropSelect, dropReminder: '02 Hours Before the Event' })
                setRemidarShow(false);
            }
            else if (selectId === 5) {
                setDropSelect({ ...dropSelect, dropReminder: '01 Day Before the Event' })
                setRemidarShow(false);
            }
            else if (selectId === 6) {
                setDropSelect({ ...dropSelect, dropReminder: '02 Day Before the Event' })
                setRemidarShow(false);
            }
        }
    }

    const [multiTime, setMultiTime] = React.useState([
{}
    ]);

    const display_MultiTime_Array = multiTime.map((d) => (
        <>
        {Object.keys(d).length > 0 ?
        <Typography  className={aaa.atmb5}>{d.from} to {d.to}</Typography> 
        : ''}
        </>
    ));

    const updates = (froms, tos) => {
        froms = '00/00/00 00:00 AM';
        tos = '00/00/00 00:00 PM';
        // let fromto = from + to;
        let arr = {'from':froms,'to':tos};
        console.log(arr)

        setMultiTime((prevState) =>
            [...prevState, arr ]
        );
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={aaa.boxStyle}>
                    <Card className={aaa.boxIn}>
                        <Stack className={aaa.mr}>
                            <CardContent className={aaa.headerStyle}>
                                <CardContent
                                    style={{ marginRight: "15px" }}
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
                                <CardContent className={aaa.headerCard}>
                                    <Typography
                                        variant="h1"
                                        style={{ marginRight: "23px" }}
                                        className={aaa.t61521op}
                                    >
                                        Start
                                    </Typography>
                                    <CardContent className={aaa.dateTimeFlex}>
                                        <Typography variant="h1" className={aaa.t31521}>
                                            {startDate}
                                        </Typography>
                                        <Typography variant="h1" className={aaa.t31521}>
                                            {startTime}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent
                                    style={{ marginTop: "11px" }}
                                    className={aaa.headerCard}
                                >
                                    <Typography
                                        variant="h1"
                                        style={{ marginRight: "28px" }}
                                        className={aaa.t61521op}
                                    >
                                        End
                                    </Typography>
                                    <CardContent className={aaa.dateTimeFlex}>
                                        <Typography variant="h1" className={aaa.t31521}>
                                            {endDate}
                                        </Typography>
                                        <Typography variant="h1" className={aaa.t31521}>
                                            {endTime}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent
                                    style={{
                                        justifyContent: "start",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                    className={aaa.headerCard}
                                >
                                    <Typography variant="h1" className={aaa.t61521op}>
                                        All day
                                    </Typography>
                                    {/* <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ "aria-label": "controlled" }}
                                    /> */}
                                    <ImageListItem className={aaa.checkers}>
                                        <img
                                            src={checker.allDay ? sq2 : sq}
                                            onClick={() => checkercheck(1)}
                                            alt="dad"
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                </CardContent>
                                <CardContent
                                    className={aaa.headerCard}
                                    style={{ marginTop: "10px" }}
                                >
                                    <CardContent onClick={timeZS} className={aaa.dateTimeFlex}>
                                        <Typography variant="h1" className={aaa.t61521mrop}>
                                            {dropSelect.droptimeZones}
                                        </Typography>
                                        <ImageListItem>
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                    <CardContent
                                        className={timeZoneShow ? aaa.abs : aaa.spanHide}
                                    >
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(1, 1) }}>
                                            Pacific Standard Time GMT +2
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(1, 2) }}>
                                            Pacific Standard Time GMT +4
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(1, 3) }}>
                                            Pacific Standard Time GMT +8
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(1, 4) }}>
                                            Pacific Standard Time GMT +12
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
                                <CardContent className={aaa.headerCard}>
                                    <CardContent onClick={remindarS} className={aaa.dateTimeFlex}>
                                        <Typography variant="h1" className={aaa.t61521mrop}>
                                            {dropSelect.dropReminder}
                                        </Typography>
                                        <ImageListItem>
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                    <CardContent
                                        className={remindarShow ? aaa.abs : aaa.spanHide}
                                    >
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(2, 1) }}>
                                            15 Mins Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(2, 2) }}>
                                            30 Mins Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(2, 3) }}>
                                            01 Hours Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(2, 4) }}>
                                            02 Hours Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(2, 5) }}>
                                            01 Day Before the Event
                                        </Typography>
                                        <Typography className={aaa.t61521mb5} onClick={(e) => { e.stopPropagation(); sele(2, 6) }}>
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
                            <CardContent className={aaa.pwmrel}>
                                <CardContent className={aaa.headerCard}>
                                    <CardContent onClick={pmtS} className={aaa.dateTimeFlex}>
                                        <Typography variant="h1" className={aaa.t61521mrop}>
                                            {purposeTime}
                                        </Typography>
                                        <ImageListItem>
                                            <img src={dad} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={pMTS ? aaa.abs : aaa.spanHide}>
                                    <CardContent className={aaa.padding0}>
                                        {display_MultiTime_Array}
                                    </CardContent>
                                    <CardContent className={aaa.mainStackp0mt10} onClick={() => {
                                        updates('NA', 'NA');
                                    }}>
                                        <ImageListItem className={aaa.w25}>
                                            <img src={addC} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography className={aaa.atmb5}>
                                            Add New Meeting Time
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={aaa.cbtn}>
                                        <CardContent className={aaa.cbtnin}>
                                            <Button onClick={pmtS} variant="contained">
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
                            <CardContent className={aaa.pwmrel}>
                                <CardContent className={aaa.headerCard}>
                                    <CardContent className={aaa.dateTimeFlex}>
                                        <Typography
                                            onClick={adS}
                                            variant="h1"
                                            className={aaa.t61521mrop}
                                        >
                                            Add Guests
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={aDS ? aaa.abs : aaa.spanHide}>
                                        <Typography variant="h5" className={aaa.tnn}>
                                            <span className={aaa.tnn2}>TU</span> Full Name
                                        </Typography>
                                        <Typography variant="h6" className={aaa.tnnorg}>
                                            Guest
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                
                                    {/* {display_AddGuest_Array} */}
                                    
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={logoM} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.mtm}>
                                <CardContent
                                    style={{ justifyContent: "start", marginTop: "10px" }}
                                    className={aaa.headerCard}
                                >
                                    <Typography variant="h1" className={aaa.t61521op}>
                                        Add Bearish Call
                                    </Typography>
                                    <ImageListItem className={aaa.checkers}>
                                        <img
                                            src={checker.calls ? sq2 : sq}
                                            onClick={() => checkercheck(2)}
                                            alt="dad"
                                            loading="lazy"
                                        />
                                    </ImageListItem>
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
                                <CardContent className={aaa.headerCard}>
                                    <CardContent className={aaa.dateTimeFlex}>
                                        <Typography variant="h1" className={aaa.t61521mrop}>
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
                                    <CardContent className={aaa.inputStyle}>
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
                        <Stack
                            style={{ justifyContent: "end" }}
                            className={aaa.mainStackmt}
                        >
                            <Typography variant="h1" className={aaa.tmstyle}>
                                More Options...
                            </Typography>
                            <CardContent className={aaa.btn} style={{ marginTop: "0px" }}>
                                <CardContent className={aaa.btnin}>
                                    <Button variant="contained">Save</Button>
                                </CardContent>
                            </CardContent>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
