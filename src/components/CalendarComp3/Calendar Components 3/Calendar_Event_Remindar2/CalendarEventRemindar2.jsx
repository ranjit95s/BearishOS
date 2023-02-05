import * as React from "react";
import Box from "@mui/material/Box";
// import Popover from '@mui/material/Popover';
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import alarm from "../img/alarm.svg";
import pinkco from "../img/pinkco.svg";
import noti from "../img/noti.svg";
import edit from "../img/edit.svg";
import pgroup from "../img/pgroup.svg";
import doc from "../img/doc.svg";
import loc from "../img/loc.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cx from "classnames";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../sty.module.css";
import aaa from "./CalendarEventRemindar2.module.css";
import calSty from "./CalComp_Sty.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function CalendarEventRemindar2() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <Stack className={aaa.mr}>
                            <CardContent className={aaa.headerStyle}>
                                <CardContent
                                    style={{"marginRight":"15px"}}
                                    className={aaa.inputStyle}
                                >
                                    <input
                                        type="text"
                                        placeholder="Title of Event"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                                <ImageListItem id="my-element61" className={aaa.icg}>
                                    <ReactTooltip
                                        className={aaa.tooltip}
                                        anchorId="my-element61"
                                        type="light"
                                        effect="solid"
                                    >
                                        <span>Edit</span>
                                    </ReactTooltip>
                                    <img src={edit} alt="close" loading="lazy" />
                                </ImageListItem>
                                <ImageListItem id="my-element60">
                                    <ReactTooltip
                                        className={aaa.tooltip}
                                        anchorId="my-element60"
                                        type="light"
                                        effect="solid"
                                    >
                                        <span>Close</span>
                                    </ReactTooltip>
                                    <img src={Close} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStack}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={alarm} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <Typography
                                        variant="h1"
                                         style={{"marginRight":"15px"}}
                                        className={aaa.t61521op}
                                    >
                                        Thursday, January 12th{" "}
                                        <span className={calSty.dot}> • </span> 6:00 - 6:30 pm
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={loc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent
                                    className={aaa.headerCard}
                                >
                                    <CardContent
                                        className={aaa.dateTimeFlex}
                                    >
                                        <Typography
                                            variant="h1"
                                            className={aaa.t61521mrop}
                                        >
                                            Location
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={pinkco} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent className={aaa.headerStyle2}>
                                    <Typography
                                        variant="h1"
                                        className={aaa.sajmn}
                                    >
                                        Start and Join Meeting Now
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={pgroup} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent
                                className={aaa.overf}
                            >
                                <CardContent className={aaa.padding0}>
                                    <Typography
                                        variant="h5"
                                        className={aaa.tnn}
                                    >
                                        <span
                                            className={aaa.tnn2}
                                        >
                                            TU
                                        </span>{" "}
                                        Full Name
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={aaa.org2}
                                    >
                                        Oranizer
                                    </Typography>
                                </CardContent>
                                <CardContent className={aaa.pmt}>
                                    <Typography
                                        variant="h5"
                                        className={aaa.tnn}
                                    >
                                        <span
                                            className={aaa.tnn2}
                                        >
                                            TU
                                        </span>{" "}
                                        Full Name
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={aaa.org2}
                                    >
                                        Guests
                                    </Typography>
                                </CardContent>

                                <CardContent className={aaa.pmt}>
                                    <Typography
                                        variant="h5"
                                        className={aaa.tnn}
                                    >
                                        <span
                                            className={aaa.tnn2}
                                        >
                                            TU
                                        </span>{" "}
                                        Full Name
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={aaa.org2}
                                    >
                                        Oranizer
                                    </Typography>
                                </CardContent>
                                <CardContent className={aaa.pmt}>
                                    <Typography
                                        variant="h5"
                                        className={aaa.tnn}
                                    >
                                        <span
                                            className={aaa.tnn2}
                                        >
                                            TU
                                        </span>{" "}
                                        Full Name
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className={aaa.org2}
                                    >
                                        Guests
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={doc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent className={aaa.hadp}>
                                    <CardContent
                                        className={aaa.inputStyle}
                                    >
                                        <textarea
                                            type="text"
                                            col="2"
                                            placeholder="Add a Descripion"
                                            name="code"
                                            id="code"
                                        />
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStackmt}>
                            <CardContent className={aaa.iconCard}>
                                <ImageListItem className={aaa.iconW}>
                                    <img src={noti} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={aaa.pwmr}>
                                <CardContent className={aaa.headerStyle2}>
                                    <Typography
                                        variant="h1"
                                         style={{"marginRight":"15px"}}
                                        className={aaa.t61521op}
                                    >
                                        Add a Remindar
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Stack>
                    </Card>
                    <Stack className={aaa.mainb}>
                        <CardContent className={aaa.padding0}>
                            <Typography
                                variant="h1"
                                className={aaa.texta}
                            >
                                Going?
                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.conf}>
                            <CardContent
                                className={aaa.confbtn}
                                style={{ "margin-top": "0px" }}
                            >
                                <CardContent
                                    className={aaa.confref}
                                >
                                    <Button
                                        size="small"
                                        variant="contained"
                                    >
                                        Yes
                                    </Button>
                                </CardContent>
                            </CardContent>
                            <CardContent
                                className={aaa.confbtn}
                                style={{ "margin-top": "0px" }}
                            >
                                <CardContent
                                    className={aaa.confout}
                                >
                                    <Button
                                        size="small"
                                        variant="contained"
                                    >
                                        No
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                    </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
