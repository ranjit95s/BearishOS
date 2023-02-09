import React, { useState } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import addC from "../../img/add1.svg";
import info from "../../img/info1.svg";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./Plus.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Plus = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Stack className={classes.rel}>
                    <Stack
                        component="Plus"
                        className={toggle ? classes.boxStyleGreen : classes.boxStyle}
                        onClick={() => setToggle(toggle ? false : true)}
                    >
                        <Stack className={classes.boxIn}>
                            <ImageListItem id="my-plus" className={classes.imgStyle}>
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-plus"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Add Directory Contact</span>
                                </ReactTooltip>
                                <img src={addC} alt="close" loading="lazy" />
                            </ImageListItem>
                        </Stack>
                    </Stack>
                    <Stack
                        gap={10}
                        component="Toggle"
                        className={toggle ? classes.toggle : classes.spanHide}
                    >
                        <Stack className={classes.toggleIn}>
                            <Stack className={classes.t61825}>Create</Stack>
                            <Stack className={classes.tn1317}>
                                <Link href="#" color="inherit" underline="none">
                                    Department
                                </Link>
                            </Stack>
                            <Stack className={classes.tn1317}>
                                <Link href="#" color="inherit" underline="none">
                                    Team
                                </Link>
                            </Stack>
                            <Stack className={classes.t61825}>Add</Stack>
                            <Stack className={classes.tn1317}>
                                <Link href="#" color="inherit" underline="none">
                                    Directory Contact
                                </Link>
                                <ImageListItem id="my-Directory" className={classes.imgStyle1}>
                                    <ReactTooltip
                                        className={classes.tooltip1}
                                        anchorId="my-Directory"
                                        type="light"
                                        effect="solid"
                                    >
                                        <span>
                                            Adding a contact to your company directory does not affect
                                            your monthly subscription cost and does not give this
                                            contact access to Bearish OS
                                        </span>
                                    </ReactTooltip>
                                    <img src={info} alt="close" loading="lazy" />
                                </ImageListItem>
                            </Stack>
                            <Stack className={classes.tn1317}>
                                <Link href="#" color="inherit" underline="none">
                                    Bearish OS User
                                </Link>
                                <ImageListItem id="my-Bearish" className={classes.imgStyle1}>
                                    <ReactTooltip
                                        className={classes.tooltip2}
                                        anchorId="my-Bearish"
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
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </StyledEngineProvider>
        </>
    );
};

export default Plus;
