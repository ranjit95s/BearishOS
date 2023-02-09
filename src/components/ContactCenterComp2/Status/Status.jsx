import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";
import dau from "../../img/dau.png";
import dad from "../../img/dad.png";
import help from "../../img/help.svg";
import logout from "../../img/logout.svg";
import repeat from "../../img/repeat.svg";
import gear from "../../img/gear1.svg";
import snoti from "../../img/snoti.svg";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./Status.module.css";
const Status = () => {
    const links = [
        { id: "1", text: "Notifications", source: snoti, redirect: "#" },
        { id: "2", text: "Settings", source: gear, redirect: "#" },
        { id: "3", text: "Subscription", source: repeat, redirect: "#" },
        { id: "4", text: "Get Help", source: help, redirect: "#" },
        { id: "5", text: "Logout", source: logout, redirect: "#" },
    ];

    const [drop, setDrop] = useState(false);
    const [statusBg, setStatusBg] = useState("#5EE2A0");
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="Status" className={classes.boxStyle}>
                    <Stack className={classes.boxIn}>
                        <Stack className={classes.mainT}>
                            <Stack
                                style={{ background: `${statusBg}` }}
                                className={classes.statusIconBg}
                            ></Stack>
                            Status
                            <ImageListItem className={classes.imgStyle}>
                                <img
                                    src={drop ? dad : dau}
                                    onClick={() => setDrop(drop ? false : true)}
                                    alt="close"
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <Stack className={drop ? classes.abs : classes.spanHide}>
                                <Stack
                                    gap={"8px"}
                                    onClick={() => {
                                        setStatusBg("#5EE2A0");
                                        setDrop(false);
                                    }}
                                    className={classes.subT}
                                >
                                    <Stack
                                        style={{ background: "#5EE2A0" }}
                                        className={classes.statusIconBg}
                                    ></Stack>
                                    Online
                                </Stack>
                                <Stack
                                    gap={"8px"}
                                    onClick={() => {
                                        setStatusBg("#FFFF00");
                                        setDrop(false);
                                    }}
                                    className={classes.subT}
                                >
                                    <Stack
                                        style={{ background: "#FFFF00" }}
                                        className={classes.statusIconBg}
                                    ></Stack>
                                    Online, busy
                                </Stack>
                                <Stack
                                    gap={"8px"}
                                    onClick={() => {
                                        setStatusBg("#FFA700");
                                        setDrop(false);
                                    }}
                                    className={classes.subT}
                                >
                                    <Stack
                                        style={{ background: "#FFA700" }}
                                        className={classes.statusIconBg}
                                    ></Stack>
                                    Offline
                                </Stack>
                                <Stack
                                    gap={"8px"}
                                    onClick={() => {
                                        setStatusBg("#FF0000");
                                        setDrop(false);
                                    }}
                                    className={classes.subT}
                                >
                                    <Stack
                                        style={{ background: "#FF0000" }}
                                        className={classes.statusIconBg}
                                    ></Stack>
                                    Away
                                </Stack>
                            </Stack>
                        </Stack>
                        {links.map((s) => {
                            return (
                                <Link
                                    gap={"10px"}
                                    href={s.redirect}
                                    color="inherit"
                                    underline="none"
                                    style={{ justifyContent: "start" }}
                                    key={s.id}
                                    className={classes.mainT}
                                >
                                    <ImageListItem className={classes.imgStyle}>
                                        <img src={s.source} alt="close" loading="lazy" />
                                    </ImageListItem>
                                    {s.text}
                                </Link>
                            );
                        })}
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
};

export default Status;
