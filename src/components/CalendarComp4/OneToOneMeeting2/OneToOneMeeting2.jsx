/* eslint-disable array-callback-return */
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import weekly from "../../img/Weekly.svg";
import rtrash from "../../img/rtrash.svg";
import dau from "../../img/pinkdau.svg";
import plus from "../../img/plus.svg";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "./OneToOneMeeting2.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../../sty.module.css";
import sq2 from "../../img/sq2.svg";
import sq from "../../img/sq1.svg";
export default function OneToOneMeeting2() {
 

    const [checker, setChecker] = React.useState({
        sunday: false,
        monday: false,
        truesday: false,
        wedsday: false,
        thusday: false,
        friday: false,
        satrday: false,
    });

    // console.log(Object.values(checker)[0] + " hi");
    const checkercheck = (id) => {
        if (id === "1") {
            if (checker.sunday) {
                setChecker({ ...checker, sunday: false });
            } else {
                setChecker({ ...checker, sunday: true });
            }
        } else if (id === "2") {
            if (checker.monday) {
                setChecker({ ...checker, monday: false });
            } else {
                setChecker({ ...checker, monday: true });
            }
        } else if (id === "3") {
            if (checker.truesday) {
                setChecker({ ...checker, truesday: false });
            } else {
                setChecker({ ...checker, truesday: true });
            }
        } else if (id === "4") {
            if (checker.wedsday) {
                setChecker({ ...checker, wedsday: false });
            } else {
                setChecker({ ...checker, wedsday: true });
            }
        } else if (id === "5") {
            if (checker.thusday) {
                setChecker({ ...checker, thusday: false });
            } else {
                setChecker({ ...checker, thusday: true });
            }
        } else if (id === "6") {
            if (checker.friday) {
                setChecker({ ...checker, friday: false });
            } else {
                setChecker({ ...checker, friday: true });
            }
        } else {
            if (checker.satrday) {
                setChecker({ ...checker, satrday: false });
            } else {
                setChecker({ ...checker, satrday: true });
            }
        }
    };

    const [weeklys, setWeeklys] = React.useState([
        {
            id: "1",
            name: "Sun",
            schedule: [],
        },
        {
            id: "2",
            name: "Mon",
            schedule: ["10:00am - 00:00am", "00:00am - 00:00am"],
        },
        {
            id: "3",
            name: "Tue",
            schedule: ["20:00am - 00:00am", "00:00am - 00:00am"],
        },
        { id: "4", name: "Wed", schedule: [] },
        { id: "5", name: "Thu", schedule: [] },
        { id: "6", name: "Fri", schedule: [] },
        { id: "7", name: "Sat", schedule: ["20:00am - 00:00am", "00:00am - 00:00am"] },
    ]);

    const updates = (id) => {
        setWeeklys((prevState) =>
            prevState.map((el) =>
                el.id === id
                    ? {
                        ...el,
                        schedule: el.schedule.concat("00:00am - 00:00am"),
                        // setCpot(...el.schedule);
                    }
                    : el
            )
        );
    };
    // console.log(weeklys[2].schedule);
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
    const [cpot, setCpot] = React.useState();
    const copyTo = async (fId, toId) => {
        setCpot(weeklys[fId - 1].schedule);
        copyNow(fId, toId);
        console.log(cpot);
    };
    const copyNow = (fId, toId) => {
        setWeeklys((prevState) =>
            prevState.map((el) =>
                el.id === toId
                    ? {
                        ...el,
                        schedule: el.schedule.concat(cpot),
                        // setCpot(...el.schedule);
                    }
                    : el
            )
        );
    };
    const [copyT, setCopyT] = React.useState(false);
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="onetoone2" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent
                            style={{ marginBottom: "5px" }}
                            className={classes.headerStyle}
                        >
                            <Typography varient="h1" className={classes.tllStyle}>
                                One on One Meetings
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                How do you want to offer availability for your new event?
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.timer2}>
                            <Typography variant="h1" className={classes.top1}>
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
                        <CardContent className={classes.wpm}>
                            <CardContent className={classes.headerStyle2}>
                                <CardContent className={classes.inputStyle}>
                                    <input
                                        type="text"
                                        placeholder="Create Schedule"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                Create your new schedule
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.timer2}>
                            <Typography variant="h1" className={classes.top1}>
                                Timezone
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={classes.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        {/* start */}
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                Set Weekly Schedule
                            </Typography>
                        </CardContent>

                        {weeklys.map((weeklyy, weaklyyIndex) => {
                            return (
                                <CardContent key={weeklyy.id} className={classes.mains}>
                                    <CardContent className={classes.mainss}>
                                        <ImageListItem className={classes.checkers}>
                                            <img
                                                src={Object.values(checker)[weeklyy.id - 1] ? sq2 : sq}
                                                onClick={() => checkercheck(weeklyy.id)}
                                                alt="dad"
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                        <Typography className={classes.weekname}>
                                            {weeklyy.name}
                                        </Typography>
                                        <Typography className={classes.weekname1}>
                                            {weeklyy.schedule.length < 1 ? "unavailable" : ""}
                                            {weeklyy.schedule.map((scheduless, Index) => (
                                                <Typography variant="h6" className={classes.s}>
                                                    <span>{scheduless}</span>{" "}
                                                    <img
                                                        id="my-element154"
                                                        onClick={() => removei(weeklyy.id, Index)}
                                                        className={classes.imgStyle21}
                                                        src={rtrash}
                                                        alt="close"
                                                        loading="lazy"
                                                    />
                                                </Typography>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                    <ImageListItem
                                        style={{ position: "relative" }}
                                        className={classes.Li}
                                    >
                                        <img
                                            id="my-element154"
                                            onClick={() => {
                                                updates(weeklyy.id);
                                            }}
                                            className={classes.imgStyle}
                                            src={plus}
                                            alt="close"
                                            loading="lazy"
                                        />
                                        <img
                                            id="my-element163"
                                            className={classes.imgStyle}
                                            src={weekly}
                                            alt="close"
                                            onClick={() => setCopyT(copyT ? false : true)}
                                            loading="lazy"
                                        />
                                        {copyT && (
                                            <Stack gap={"11.5px"} className={classes.copybox}>
                                                <Stack className={classes.copyT}>Copy Times to</Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Sunday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "1")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Monday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "2")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Tuesday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "3")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Wednesday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "4")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Thursday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "5")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Friday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "6")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                                <Stack
                                                    className={classes.copyTT}
                                                    direction={"row"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                >
                                                    Saturday{" "}
                                                    <img
                                                        onClick={() => copyTo(weeklyy.id, "7")}
                                                        src={sq}
                                                        alt="dad"
                                                        loading="lazy"
                                                    />
                                                </Stack>
                                            </Stack>
                                        )}
                                    </ImageListItem>
                                </CardContent>
                            );
                        })}

                        {/* foot */}
                        <CardContent className={classes.headerStyle}>
                            <Typography variant="h1" className={classes.sechead}>
                                Add a buffer to your meetings?
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={classes.timer2}
                            style={{ marginBottom: "20px" }}
                        >
                            <Typography variant="h1" className={classes.top1}>
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
                        <CardContent className={classes.timer2}>
                            <Typography className={classes.top1}>15 Mins After</Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.cobtn}>
                            <Button className={classes.flexl2}>
                                <Typography variant="h1" className={classes.tsec}>
                                    Back
                                </Typography>
                            </Button>
                            <Button className={classes.flexl2}>
                                <Typography variant="h1" className={classes.tsec}>
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
