/* eslint-disable array-callback-return */
import * as React from "react";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
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
import Checkbox from "@mui/material/Checkbox";
export default function OneToOneMeeting2() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [checker, setChecker] = React.useState({sunday:true,monday:false,truesday:false,
        wedsday:false,thusday:false,friday:false,satrday:false})

        // console.log(Object.values(checker)[0] + " hi");
    const checkercheck = (id) =>{
        if(id === "1") {
            if(checker.sunday){
                setChecker({...checker,sunday:false});
            }else{
                setChecker({...checker,sunday:true});
            }
        }else if(id === "2"){
            if(checker.monday){
                setChecker({...checker,monday:false});
            }else{
                setChecker({...checker,monday:true});
            }
        }else if (id === "3") {
            if(checker.truesday){
                setChecker({...checker,truesday:false});
            }else{
                setChecker({...checker,truesday:true});
            }
        }else if(id === "4") {
            if(checker.wedsday){
                setChecker({...checker,wedsday:false});
            }else{
                setChecker({...checker,wedsday:true});
            }
        }else if(id === "5"){
            if(checker.thusday){
                setChecker({...checker,thusday:false});
            }else{
                setChecker({...checker,thusday:true});
            }
        }else if (id === "6") {
            if(checker.friday){
                setChecker({...checker,friday:false});
            }else{
                setChecker({...checker,friday:true});
            }
        }else {
            if(checker.satrday){
                setChecker({...checker,satrday:false});
            }else{
                setChecker({...checker,satrday:true});
            }
        }
    }

    const [weeklys, setWeeklys] = React.useState([
        {
            id: "1",
            name: "Sun",
            schedule: [],
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
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                        <CardContent style={{"marginBottom":"5px"}} className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.tllStyle}>
                                One on One Meetings
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                How do you want to offer availability for your new event?
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={classes.timer2}
                        >
                            <Typography
                            variant="h1"
                            className={classes.top1}
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
                            className={classes.wpm}
                        >
                            <CardContent className={classes.headerStyle2}>
                                <CardContent
                                   className={classes.inputStyle}
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
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                Create your new schedule
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={classes.timer2}
                        >
                            <Typography
                                variant="h1"
                                className={classes.top1}
                            >
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
                                <CardContent
                                    key={weeklyy.id}
                                    className={classes.mains}
                                >
                                    <CardContent
                                        className={classes.mainss}
                                        
                                    >
                                                                        <ImageListItem className={classes.checkers}>
                                            <img src={Object.values(checker)[weeklyy.id - 1]  ? sq2 : sq} onClick={() => checkercheck(weeklyy.id)} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography
                                            className={classes.weekname}
                                        >
                                            {weeklyy.name}
                                        </Typography>
                                        <Typography
                                            className={classes.weekname1}
                                        >
                                            {weeklyy.schedule.length < 1 ? "unavailable" : ""}
                                            {weeklyy.schedule.map((scheduless, Index) => (
                                                <Typography
                                                    variant="h6"
                                                    className={classes.s}
                                                >
                                                    <span>{scheduless}</span>{" "}
                                                    <img
                                                        id="my-element154"
                                                        style={{ "marginLeft": "15px","position":"relative","left":"4px" }}
                                                        onClick={() => removei(weeklyy.id, Index)}
                                                        className={classes.imgStyle}
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
                                            "marginTop":"-4px"
                                        }}
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
                                            loading="lazy"
                                        />
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
                            style={{"marginBottom": "20px"}}
                        >
                            <Typography
                                variant="h1"
                                className={classes.top1}
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
                            className={classes.timer2}
                        >
                            <Typography
                                className={classes.top1}
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
                            className={classes.cobtn}
                        >
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
