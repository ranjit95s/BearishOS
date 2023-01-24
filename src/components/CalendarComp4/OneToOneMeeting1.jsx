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
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={cx(sty.boxStyle, calSty4.boxWH3)}
                >
                    <Card className={cx(sty.inStyle, calSty4.boxIn4)}>
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.tllStyle)}>
                                One on One Meetings
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(sty.padding0, calSty.w100, calSty.mt10)}>
                            <CardContent className={cx(sty.headerStyle, sty.padding0)}>
                                <CardContent
                                    className={cx(
                                        sty.signIn,
                                        calSty.signCal,
                                        calSty.t61521,
                                        calSty.op12,
                                        sty.inputStyle,
                                        sty.NickStyle
                                    )}
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
                        <CardContent className={cx(sty.padding0, calSty.w100, calSty.mt10)}>
                            <CardContent className={cx(sty.headerStyle, sty.padding0)}>
                                <CardContent
                                    className={cx(
                                        sty.signIn,
                                        calSty.signCal,
                                        calSty.t61521,calSty.op12,
                                        sty.inputStyle,
                                        sty.NickStyle
                                    )}
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
                        <CardContent className={cx(sty.padding0, calSty.w100, calSty.mt10)}>
                            <CardContent className={cx(sty.headerStyle, sty.padding0)}>
                                <CardContent
                                    className={cx(
                                        sty.signIn,
                                        calSty.op75,
                                        calSty.signCal,calSty.op12,
                                        calSty.t61521,
                                        sty.inputStyle,
                                        sty.NickStyle
                                    )}
                                >
                                    <textarea
                                        type="text"
                                        col="5"
                                        className={cx(calSty.ta)}
                                        placeholder="Descripion"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                    </Card>
                    <hr></hr>
                    <Card className={cx(sty.inStyle, calSty4.boxIn4)}>
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.sechead)}>
                                Data Range
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(sty.padding0, calSty.w100, calSty.mtm)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100,calSty.jcs
                                )}
                            >
                               <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <CardContent
                                    style={{ width: "35px" }}
                                    className={cx(
                                        sty.signIn,
                                        calSty.signCal,
                                        calSty.t61521,
                                        sty.inputStyle, calSty.mr5,
                                        sty.NickStyle
                                    )}
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
                                    className={cx(
                                        sty.ComposeBtns,
                                        sty.tsStyle, calSty.mr5,
                                        sty.padding0,
                                        calSty4.mrl
                                    )}
                                >
                                    <CardContent
                                        className={cx(
                                            sty.ComposeBtns,
                                            sty.borderStyle,
                                            sty.tsStyle,
                                            sty.padding0,
                                            calSty4.mrl
                                        )}
                                    >
                                        <Typography
                                            onClick={changeStyle3}
                                            className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                        >
                                            Weekdays
                                        </Typography>
                                        <ImageListItem>
                                            <img src={style4 ? dau : dad} alt="hero" />
                                        </ImageListItem>
                                        <Stack className={cx(sty.tsStyle, sty.rel)}>
                                            <Stack
                                                className={
                                                    style4
                                                        ? cx(sty.ddd, sty.abs, sty.padding0)
                                                        : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)
                                                }
                                            >
                                                <CardContent
                                                    className={cx(sty.users, sty.padding0, sty.tsStyle)}
                                                    onClick={changeStyle3}
                                                >
                                                    <Typography
                                                        variant="h1"
                                                        className={cx(sty.mar, sty.t1317, sty.padding0)}
                                                    >
                                                        Can Edit
                                                    </Typography>
                                                    <Typography
                                                        variant="h1"
                                                        className={cx(sty.mar, sty.t1317, sty.padding0)}
                                                    >
                                                        Can View
                                                    </Typography>
                                                    <Typography
                                                        variant="h1"
                                                        className={cx(sty.mar, sty.t1317, sty.padding0)}
                                                    >
                                                        Can Comment
                                                    </Typography>
                                                    <Typography
                                                        variant="contained"
                                                        className={cx(
                                                            sty.mar,
                                                            sty.colorr,
                                                            sty.t1317,
                                                            sty.padding0
                                                        )}
                                                    >
                                                        Revoke Access
                                                    </Typography>
                                                </CardContent>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </CardContent>
                                <Typography variant="h1" className={cx(calSty4.secheadse, calSty.mr5)}>
                                    Into the future
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent className={cx(sty.padding0, calSty.w100, calSty.mt16)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty.tmr,
                                    calSty4.pspan,
                                    sty.padding0,
                                    calSty.w100,
                                    calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    variant="h1"
                                    className={cx(calSty4.secheadse, calSty.tmr)}
                                >
                                    Within a Date Range
                                </Typography>
                                <CardContent
                                    className={cx(
                                        sty.borderStyle,
                                        calSty.t61521,
                                        sty.padding0,
                                        calSty.tmr
                                    )}
                                >
                                    <Typography variant="h1" className={cx(calSty4.tbs1117)}>
                                        00/00 - 00/00
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={cx(sty.padding0, calSty.w100, calSty.mt16)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty.tmr,
                                    calSty4.pspan,
                                    sty.padding0,
                                    calSty.w100,
                                    calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    variant="h1"
                                    className={cx(calSty4.secheadse, calSty.tmr)}
                                >
                                    Indefinitely into the future
                                </Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                    <hr></hr>
                    <Card className={cx(sty.inStyle, calSty4.boxIn4)}>
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.sechead)}>
                                Duration of Event
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={cx(
                                sty.borderStyle,
                                calSty.w100,
                                calSty.t61521,
                                calSty4.dfjscbs,
                                calSty.mtm
                            )}
                        >
                            <Typography
                                variant="h1"
                                className={cx(calSty.t61521, calSty.op1)}
                            >
                                Location, Virtual Bearish OS
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dad}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.secheadse)}>
                                app.bearishos.com/user-name
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={cx(
                                sty.signIn,
                                calSty.mtm,
                                calSty.signCal,
                                calSty.t61521,
                                sty.inputStyle,calSty.op12,
                                sty.NickStyle,
                                calSty.mtm
                            )}
                        >
                            <input type="text" placeholder="Any text" name="code" id="code" />
                        </CardContent>
                        <CardActions style={{"margin-top":"10px"}} className={cx(calSty4.cobtn,calSty.jce)}>
                            <Button className={cx(calSty4.flexdl2,calSty4.padd35)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                Close
                                </Typography>
                            </Button>
                            <Button className={cx(calSty4.flexdl2,calSty4.padd35)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
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
