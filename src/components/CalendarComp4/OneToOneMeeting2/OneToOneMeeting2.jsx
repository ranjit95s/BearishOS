/* eslint-disable array-callback-return */
import * as React from "react";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import weekly from "../img/Weekly.svg";
import rtrash from "../img/rtrash.svg";
import dau from "../img/pinkdau.svg";
import plus from "../img/plus.svg";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cx from "classnames";
import aaa from "./OneToOneMeeting2.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../sty.module.css";
import calSty4 from "./CalSty4.module.css";
import calSty from "../CalendarComp3/CalComp_Sty.module.css";
import Checkbox from "@mui/material/Checkbox";
export default function OneToOneMeeting2() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [weeklys, setWeeklys] = React.useState([
        {
            id: "1",
            name: "Sun",
            schedule: ["00:00am - 00:00am", "00:00am - 00:00am"],
        },
        {
            id: "2",
            name: "Mon",
            schedule: ["00:00am - 00:00am", "00:00am - 00:00am"],
        },
        {
            id: "3",
            name: "Tue",
            schedule: ["00:00am - 00:00am", "00:00am - 00:00am"],
        },
        { id: "4", name: "Wed", schedule: [] },
        { id: "5", name: "Thu", schedule: [] },
        { id: "6", name: "Fri", schedule: [] },
        { id: "7", name: "Sat", schedule: [] },
    ]);
    const updates = (id) => {
        setWeeklys((prevState) =>
            prevState.map((el) =>
                el.id === id
                    ? {
                        ...el,
                        schedule: el.schedule.concat("00:00am - 00:00am"),
                    }
                    : el
            )
        );
    };
    const removei = (id, index) => {
        setWeeklys((prevState) =>
            prevState.map((el) =>
                el.id === id
                    ? {
                        ...el,
                        schedule: el.schedule.slice(0, -1),
                    }
                    : el
            )
        );
    };
    const copyTo = (fId, toId) => { };
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="onetoone2"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <CardContent style={{"marginBottom":"5px"}} className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.tllStyle}>
                                One on One Meetings
                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.sechead}>
                                How do you want to offer availability for your new event?
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.timer2}
                        >
                            <Typography
                            variant="h1"
                            className={aaa.top1}
                            >
                                Use an existing schedule
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardContent
                            className={aaa.wpm}
                        >
                            <CardContent className={aaa.headerStyle2}>
                                <CardContent
                                   className={aaa.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="Create Schedule"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.sechead}>
                                Create your new schedule
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.timer2}
                        >
                            <Typography
                                variant="h1"
                                className={aaa.top1}
                            >
                                Timezone
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={aaa.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        {/* start */}
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.sechead}>
                                Set Weekly Schedule
                            </Typography>
                        </CardContent>

                        {weeklys.map((weeklyy, weaklyyIndex) => {
                            return (
                                <CardContent
                                    key={weeklyy.id}
                                    className={aaa.mains}
                                >
                                    <CardContent
                                        className={aaa.mainss}
                                        
                                    >
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            inputProps={{ "aria-label": "controlled" }}
                                        />
                                        <Typography
                                            className={aaa.weekname}
                                        >
                                            {weeklyy.name}
                                        </Typography>
                                        <Typography
                                            className={aaa.weekname}
                                        >
                                            {weeklyy.schedule.length < 1 ? "unavailable" : ""}
                                            {weeklyy.schedule.map((scheduless, Index) => (
                                                <Typography
                                                    variant="h6"
                                                    className={aaa.s}
                                                >
                                                    <span>{scheduless}</span>{" "}
                                                    <img
                                                        id="my-element154"
                                                        style={{ "margin-left": "6px" }}
                                                        onClick={() => removei(weeklyy.id, Index)}
                                                        className={aaa.imgStyle}
                                                        src={rtrash}
                                                        alt="close"
                                                        loading="lazy"
                                                    />
                                                </Typography>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                    <ImageListItem
                                        style={{
                                            display: "flex",
                                            "align-items": "center",
                                            height: "25px",
                                        }}
                                    >
                                        <img
                                            id="my-element154"
                                            onClick={() => {
                                                updates(weeklyy.id);
                                            }}
                                            className={aaa.imgStyle}
                                            src={plus}
                                            alt="close"
                                            loading="lazy"
                                        />
                                        <img
                                            id="my-element163"
                                            className={aaa.imgStyle}
                                            src={weekly}
                                            alt="close"
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                </CardContent>
                            );
                        })}

                        {/* foot */}
                        <CardContent className={aaa.headerStyle}>
                            <Typography variant="h1" className={aaa.sechead}>
                                Add a buffer to your meetings?
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.timer2}
                            style={{"marginBottom": "20px"}}
                        >
                            <Typography
                                variant="h1"
                                className={aaa.top1}
                            >
                                15 Mins Before
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardContent
                            className={aaa.timer2}
                        >
                            <Typography
                                className={aaa.top1}
                            >
                                15 Mins After
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardActions
                            className={aaa.cobtn}
                        >
                            <Button className={aaa.flexl2}>
                                <Typography variant="h1" className={aaa.tsec}>
                                    Back
                                </Typography>
                            </Button>
                            <Button className={aaa.flexl2}>
                                <Typography variant="h1" className={aaa.tsec}>
                                    Create
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
