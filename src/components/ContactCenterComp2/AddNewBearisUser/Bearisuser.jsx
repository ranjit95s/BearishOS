import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import logoM from "../../img/LogoM1.jpg.png";
import Stack from "@mui/material/Stack";
import Close from "../../img/Close.svg";
import info from "../../img/info1.svg";
import dau from "../../img/dau.png";
import dad from "../../img/dad.png";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./BearisUser.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Bearishuser = () => {
    const [name, setName] = useState("");
    const selects = [
        { id: "1", text: "Admin" },
        { id: "2", text: "Team Lead" },
        { id: "3", text: "Team Member" },
    ];
    const selects1 = [
        { id: "1", text: "Team One" },
        { id: "2", text: "Team Two" },
        { id: "3", text: "Team Three" },
    ];
    const [inputChange, setInputChange] = useState("");
    const [inputChange1, setInputChange1] = useState("Team Name");
    const [drop, setDrop] = useState(false);
    const [show, setShow] = useState(false);
    const checkshow = (id) => {
        console.log(id);
        if (id === "2") {
            setShow(true);
        } else if (id === "3") {
            setShow(true);
        } else {
            setInputChange1("Team Name");
            setShow(false);
        }
    };
    const [secDrop, setSecDrop] = useState(false);
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="Add_new_Bearish_OS_user" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Add new Bearish OS user
                            </Typography>
                            <ImageListItem id="my-elementdir">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-elementdir"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <CardContent className={classes.inputStyle}>
                                <ImageListItem className={classes.imgStyle}>
                                    <img src={logoM} alt="close" loading="lazy" />
                                </ImageListItem>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="name"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </CardContent>

                            <Stack
                                onClick={() => setDrop(drop ? false : true)}
                                style={{ justifyContent: "space-between" }}
                                className={classes.inputStyle}
                            >
                                <Typography variant="h1" className={classes.t61521}>
                                    Access Level {inputChange}
                                </Typography>
                                <ImageListItem className={classes.imgStyle}>
                                    <img src={drop ? dad : dau} alt="close" loading="lazy" />
                                </ImageListItem>
                            </Stack>
                            <Stack className={drop ? classes.abs : classes.spanHide}>
                                {selects.map((s) => {
                                    return (
                                        <Typography
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setInputChange(": " + selects[s.id - 1].text);
                                                setDrop(false);
                                                checkshow(s.id);
                                            }}
                                            key={s.id}
                                            variant="h4"
                                            className={classes.op}
                                        >
                                            {s.text}
                                        </Typography>
                                    );
                                })}
                            </Stack>

                            <Stack
                                onClick={() => setSecDrop(secDrop ? false : true)}
                                style={{ justifyContent: "space-between" }}
                                className={show ? classes.inputStyle : classes.spanHide}
                            >
                                <Typography variant="h1" className={classes.t61521}>
                                    {inputChange1}
                                </Typography>
                                <ImageListItem className={classes.imgStyle}>
                                    <img src={secDrop ? dad : dau} alt="close" loading="lazy" />
                                </ImageListItem>
                            </Stack>
                            <Stack
                                style={{ top: "12.89rem" }}
                                className={secDrop ? classes.abs : classes.spanHide}
                            >
                                {selects1.map((s) => {
                                    return (
                                        <Typography
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setInputChange1(selects1[s.id - 1].text);
                                                setSecDrop(false);
                                            }}
                                            key={s.id}
                                            variant="h4"
                                            className={classes.op}
                                        >
                                            {s.text}
                                        </Typography>
                                    );
                                })}
                            </Stack>
                            <CardContent className={classes.btn_refout}>
                                <ImageListItem id="my-user" className={classes.imgStyle1}>
                                    <ReactTooltip
                                        className={classes.tooltip1}
                                        anchorId="my-user"
                                        type="light"
                                        effect="solid"
                                    >
                                        <span>
                                            Adding a Bearish OS user will affect your monthly
                                            subscription and will grant them access to a Bearish
                                            account.
                                        </span>
                                    </ReactTooltip>
                                    <img src={info} alt="close" loading="lazy" />
                                </ImageListItem>
                                <CardContent className={classes.btn_refresh}>
                                    <Button variant="contained">Add User</Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};

export default Bearishuser;
