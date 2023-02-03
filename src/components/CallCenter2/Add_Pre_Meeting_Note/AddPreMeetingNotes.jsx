import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import info from "../img/info1.svg";
import dad from "../img/dad.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
// import asd from "./CallCenter.module.css";
import asd from "./add.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function AddPreMeetingNotes() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="addagenda"
                    className={asd.boxStyle}
                >
                    <Card className={asd.boxIn}>
                        <CardContent className={asd.titleStyle}>
                            <Typography variant="h1" className={asd.t61825}>
                            Add Pre-Meeting Notes
                            </Typography>
                            <ImageListItem id="my-elementh5f00">
                                <ReactTooltip
                                    className={asd.tooltip}
                                    anchorId="my-elementh5f00"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={asd.signSec}>
                            <Typography className={asd.info}>
                            Pre-Meeting notes can help you prepare for the call, add them below.
                            </Typography>
                        </CardActions>
                        <CardContent
                            className={asd.textA}
                        >
                            <textarea
                                type="text"
                                col="2"
                                placeholder="Type your notes here"
                                name="code"
                                id="code"
                            />
                        </CardContent>
                        <CardContent className={asd.mainf}>
                            <CardContent className={asd.padding0}>
                                <CardContent
                                    className={asd.addnow}
                                >
                                    <Typography
                                        className={asd.tadd}
                                    >
                                        Add Now
                                    </Typography>
                                    <ImageListItem>
                                        <img src={dad} alt="hero" />
                                    </ImageListItem>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <Stack className={asd.mainStack}>
                            <CardContent
                                className={asd.btn}
                            >
                                <CardContent
                                    className={asd.btnIn}
                                >
                                    <Button
                                        variant="contained"
                                    >
                                        Add Now
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
