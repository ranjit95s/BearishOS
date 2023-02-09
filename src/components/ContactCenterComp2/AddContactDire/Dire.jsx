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
import classes from "./Dire.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Dire = () => {
    const [name, setName] = useState("");
    const selects = [
        { id: "1", text: "Team Name One" },
        { id: "2", text: "Team Name Two" },
        { id: "3", text: "Team Name Three" },
    ];
    const [inputChange, setInputChange] = useState("Add Contact to Team");
    const [drop, setDrop] = useState(false);

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="Create_New_Directory" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Add Contact to Directory
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
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Contact Name"
                                    name="name"
                                    id="name"
                                />
                            </CardContent>
                            <Stack
                                onClick={() => setDrop(drop ? false : true)}
                                style={{ justifyContent: "space-between" }}
                                className={classes.inputStyle}
                            >
                                <Typography variant="h1" className={classes.t61521}>
                                    {inputChange}
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
                                                setInputChange(selects[s.id - 1].text);
                                                setDrop(false);
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
                                <ImageListItem id="my-dire" className={classes.imgStyle1}>
                                    <ReactTooltip
                                        className={classes.tooltip1}
                                        anchorId="my-dire"
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
                                <CardContent className={classes.btn_refresh}>
                                    <Button variant="contained">Create</Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};

export default Dire;
