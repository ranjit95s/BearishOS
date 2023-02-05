import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import dad from "../img/dad.png";
import dau from "../img/dau.png";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cx from "classnames";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../sty.module.css";
import calSty4 from "./CalSty4.module.css";
import aaa from "./OneToOneMeeting1.module.css";
import calSty from "../CalendarComp3/CalComp_Sty.module.css";
import Checkbox from "@mui/material/Checkbox";
export default function OneToOneMeeting1() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.tllStyle}>
                                One on One Meetings
                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.pwmt}>
                            <CardContent className={aaa.headerStyle2}>
                                <CardContent
                                    className={aaa.inputStyle}
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
                        <CardContent className={aaa.pwmt}>
                            <CardContent className={aaa.headerStyle2}>
                                <CardContent
                                    className={aaa.inputStyle}
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
                        <CardContent className={aaa.pwmt}>
                            <CardContent className={aaa.headerStyle2}>
                                <CardContent
                                    className={aaa.inputStyle}
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
                    <Card className={aaa.boxIn2}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.sechead}>
                                Data Range
                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.pwmtm}>
                            <CardContent
                                className={aaa.het}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <CardContent
                                    style={{ width: "35px", "marginRight":"5px" }}
                                    className={aaa.inputStyle}
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
                                    className={aaa.cmbtn}
                                    style=  {{"marginRight": "5px"}}
                                >
                                    <CardContent
                                        className={aaa.cmbtn2}
                                    >
                                        <Typography
                                            onClick={changeStyle3}
                                            className={aaa.ddrop}
                                        >
                                            Weekdays
                                        </Typography>
                                        <ImageListItem>
                                            <img src={style4 ? dau : dad} alt="hero" />
                                        </ImageListItem>
                                        <Stack className={aaa.trel}>
                                            <Stack
                                                className={
                                                    style4
                                                        ? aaa.abs
                                                        : aaa.spanHide
                                                }
                                            >
                                                <CardContent
                                                    className={aaa.upts}
                                                    onClick={changeStyle3}
                                                    style=  {{"marginRight": "5px"}}
                                                >
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.op}
                                                    >
                                                        Can Edit
                                                    </Typography>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.op}
                                                    >
                                                        Can View
                                                    </Typography>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.op}
                                                    >
                                                        Can Comment
                                                    </Typography>
                                                    <Typography
                                                        variant="contained"
                                                        className={aaa.opc}
                                                    >
                                                        Revoke Access
                                                    </Typography>
                                                </CardContent>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </CardContent>
                                <Typography
                                    variant="h1"
                                    className={aaa.secheadsec}
                                >
                                    Into the future
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent className={aaa.pwmt16}>
                            <CardContent
                                className={aaa.jsc}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    variant="h1"
                                    className={aaa.secheadsec2}
                                >
                                    Within a Date Range
                                </Typography>
                                <CardContent
                            style=  {{"marginRight": "15px"}}
                                    className={aaa.timer1}
                                >
                                    <Typography variant="h1" className={aaa.tbs1117}>
                                        00/00 - 00/00
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={aaa.pwmt16}>
                            <CardContent
                                className={aaa.jsc}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    variant="h1"
                                    className={aaa.secheadsec2}
                                >
                                    Indefinitely into the future
                                </Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                    <hr></hr>
                    <Card className={aaa.boxIn2}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.sechead}>
                                Duration of Event
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.timer2}
                        >
                            <Typography
                                variant="h1"
                                className={aaa.top1}
                            >
                                Location, Virtual Bearish OS
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={aaa.imgStyle}
                                    src={dad}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardContent className={aaa.headerStyle}>
                            <Typography
                                varient="h1"
                                className={
                                    changeF.fc
                                        ? aaa.small1
                                        : changeF.sc
                                            ? aaa.tbs1117
                                            : aaa.secheadsec
                                }
                            >
                                app.bearishos.com/user-name/{inputValue}
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.inputStyle}
                        >
                            <input
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Any text"
                                name="code"
                                id="code"
                            />
                        </CardContent>
                        <CardActions
                            className={aaa.cobtn}
                        >
                            <Button className={aaa.flexl2}>
                                <Typography variant="h1" className={aaa.tsec}>
                                    Close
                                </Typography>
                            </Button>
                            <Button className={aaa.flexl2}>
                                <Typography variant="h1" className={aaa.tsec}>
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
