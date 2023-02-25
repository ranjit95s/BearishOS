import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import dad from "../../img/dad.png";
import dau from "../../img/dau.png";
import sq2 from "../../img/sq2.svg";
import sq from "../../img/sq1.svg";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./OneToOneMeeting1.module.css";
import Checkbox from "@mui/material/Checkbox";
export default function OneToOneMeeting1() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [checker, setChecker] = React.useState({intoF:false,within:false,indefinitely:false})
    const checkercheck = (id) =>{
        if(id === 1) {
            if(checker.intoF){
                setChecker({...checker,intoF:false});
            }else{
                setChecker({...checker,intoF:true});
            }
        }else if(id === 2){
            if(checker.within){
                setChecker({...checker,within:false});
            }else{
                setChecker({...checker,within:true});
            }
        }else{
            if(checker.indefinitely){
                setChecker({...checker,indefinitely:false});
            }else{
                setChecker({...checker,indefinitely:true});
            }
        }
    }

    const [style4, setStyle4] = React.useState(false);

    const changeStyle3 = () => {
        if (style4) {
            setStyle4(false);
        } else {
            setStyle4(true);
        }
    };
    const [inputValue, setInputValue] = React.useState("");
    const [changeF, setChangeF] = React.useState([{ fc: false, sc: false }]);
    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
        if (event.target.value.length >= 17) {
            setChangeF({ sc: true });
        } else if (
            event.target.value.length >= 9 &&
            event.target.value.length <= 17
        ) {
            // console.log("hi")
            setChangeF({ fc: true });
        } else {
            setChangeF({ fc: false }, { sc: false });
        }
    };
    const [calDay, setCalDay] = React.useState('Calendar Days')
    
    const sele = (id) => {
        if (id === 1){
            setCalDay('Calendar Days')
            setStyle4(false);
        }
        else if (id === 2){
            setCalDay('Weekdays')
            setStyle4(false);
        }
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.tllStyle}>
                                One on One Meetings
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.pwmt}>
                            <CardContent className={classes.headerStyle2}>
                                <CardContent
                                    className={classes.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="Name your Event"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.pwmt}>
                            <CardContent className={classes.headerStyle2}>
                                <CardContent
                                    className={classes.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="Location, Virtual Bearish Call"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.pwmt}>
                            <CardContent className={classes.headerStyle2}>
                                <CardContent
                                    className={classes.inputStyle}
                                >
                                    <textarea
                                        type="text"
                                        col="5"
                                        placeholder="Descripion"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                    </Card>
                    <hr></hr>
                    <Card className={classes.boxIn2}>
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                Data Range
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.pwmtm}>
                            <CardContent
                                className={classes.het}
                            >
                                <ImageListItem className={classes.checkers}>
                                            <img src={checker.intoF ? sq : sq2} onClick={() => checkercheck(1)} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                <CardContent
                                    style={{ width: "40px", "marginRight":"5px","height":"25px" }}
                                    className={classes.inputStyle}
                                >
                                    <input
                                        type="number"
                                        placeholder="XX"
                                        max="2"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                                <CardContent
                                    className={classes.cmbtn}
                                    style=  {{"marginRight": "5px"}}
                                >
                                    <CardContent
                                        className={classes.cmbtn2}
                                    >
                                        <Typography
                                            onClick={changeStyle3}
                                            className={classes.ddrop}
                                        >
                                            {calDay}
                                        </Typography>
                                        <ImageListItem>
                                            <img src={style4 ? dau : dad} alt="hero" />
                                        </ImageListItem>
                                        <Stack className={classes.trel}>
                                            <Stack
                                                className={
                                                    style4
                                                        ? classes.abs
                                                        : classes.spanHide
                                                }
                                            >
                                                <CardContent
                                                    className={classes.upts}
                                                    onClick={changeStyle3}
                                                    style=  {{"marginRight": "5px"}}
                                                >
                                                     <Typography
                                                    variant="h1"
                                                    className={classes.mars}
                                                    onClick={(e) => {e.stopPropagation(); sele(1)}}
                                                >
                                                    Calendar Days <br></br>{" "}
                                                    <span>
                                                        {" "}
                                                        Count every single day even days when you aren’t free{" "}
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    variant="h1"
                                                    className={classes.mars}
                                                    onClick={(e) => {e.stopPropagation(); sele(2)}}
                                                >
                                                   Weekdays <br></br>{" "}
                                                    <span>
                                                        {" "}
                                                        Exclude weekends and only count Mondays to Fridays
                                                    </span>
                                                </Typography>
                                                </CardContent>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </CardContent>
                                <Typography
                                    variant="h1"
                                    className={classes.secheadsec}
                                >
                                    Into the future
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.pwmt16}>
                            <CardContent
                                className={classes.jsc}
                            >
                                <ImageListItem className={classes.checkers}>
                                            <img src={checker.within ? sq : sq2} onClick={() => checkercheck(2)} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                <Typography
                                    variant="h1"
                                    className={classes.secheadsec2}
                                >
                                    Within a Date Range
                                </Typography>
                                <CardContent
                            style=  {{"marginRight": "15px"}}
                                    className={classes.timer1}
                                >
                                    <Typography variant="h1" className={classes.tbs1117}>
                                        00/00 - 00/00
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.pwmt16}>
                            <CardContent
                                className={classes.jsc}
                            >
                                <ImageListItem className={classes.checkers}>
                                            <img src={checker.indefinitely ? sq : sq2} onClick={() => checkercheck(3)} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                <Typography
                                    variant="h1"
                                    className={classes.secheadsec2}
                                >
                                    Indefinitely into the future
                                </Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                    <hr></hr>
                    <Card className={classes.boxIn2}>
                        <CardContent className={classes.headerStyle}>
                            <Typography varient="h1" className={classes.sechead}>
                                Duration of Event
                            </Typography>
                        </CardContent>
                        <CardContent
                                    style={{width:'auto', "marginRight":"5px","height":"25px","justifyContent":'flex-start' }}
                                    className={classes.inputStyle}
                                >
                                    <input 
                                    style={{width: "10%"}}
                                        type="number"
                                        placeholder="15"
                                        max="2"
                                        name="code"
                                        id="code"
                                    /> <span style={{"opacity":"0.5"}}>Mins</span>
                                </CardContent>
                        <CardContent className={classes.headerStyle}>
                            <Typography
                                varient="h1"
                                className={
                                    changeF.fc
                                        ? classes.small1
                                        : changeF.sc
                                            ? classes.tbs1117
                                            : classes.secheadsec
                                }
                            >
                                app.bearishos.com/user-name/{inputValue}
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={classes.inputStyle}
                            style={{width:'auto'}}
                        >
                            <input
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Name your link"
                                name="code"
                                id="code"
                            />
                        </CardContent>
                        <CardActions
                            className={classes.cobtn}
                        >
                            <Button className={classes.flexl2}>
                                <Typography variant="h1" className={classes.tsec}>
                                    Close
                                </Typography>
                            </Button>
                            <Button className={classes.flexl2}>
                                <Typography variant="h1" className={classes.tsec}>
                                    Next
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
