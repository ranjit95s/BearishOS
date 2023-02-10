import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import logoM from "../../img/LogoM1.jpg.png";
import Close from "../../img/Close.svg";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./Dept.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Dept = () => {
    const [name, setName] = useState("");
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="Create_New_Department" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Create New Department
                            </Typography>
                            <ImageListItem id="my-deptt">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-deptt"
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
                                    placeholder="New Department Name"
                                    name="name"
                                    id="name"
                                />
                            </CardContent>
                            <CardContent className={classes.btn_refout}>
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

export default Dept;
