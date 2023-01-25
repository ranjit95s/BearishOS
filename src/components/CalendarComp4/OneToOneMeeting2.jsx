import * as React from "react";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import weekly from "../img/Weekly.svg";
import dau from "../img/pinkdau.svg";
import plus from "../img/plus.svg";
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
export default function OneToOneMeeting2() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };



    const [weeklys, setWeeklys] = React.useState([{ week:[
                                                            {id:"1",name:"Sun",schedule:[]},
                                                            {id:"2",name:"Mon",schedule:[]},
                                                            {id:"3",name:"Tue",schedule:[]},
                                                            {id:"4",name:"Wed",schedule:[]},
                                                            {id:"5",name:"Thu",schedule:[]},
                                                            {id:"6",name:"Fri",schedule:[]},
                                                            {id:"7",name:"Sat",schedule:[]},
                                                        ]
                                                }]);


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
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.sechead)}>
                                How do you want to offer availability for your new event?
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
                                Use an existing schedule
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardContent style={{ "width": "200px" }} className={cx(sty.padding0, calSty.mt10)}>
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
                                        placeholder="Create Schedule"
                                        name="code"
                                        id="code"
                                    />
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.sechead)}>
                                Create your new schedule
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
                                Timezone
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        {/* start */}
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography varient="h1" className={cx(calSty4.sechead)}>
                                Set Weekly Schedule
                            </Typography>
                        </CardContent>

                        
                        {weeklys.map((weeklyy,weaklyyIndex) => {
                            return (
                                <CardContent key={weaklyyIndex} className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.mtm)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                Sun
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                            );
                        })}
                        

                        {/* <CardContent className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.org)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Mon
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>

                        <CardContent className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.org)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Tue
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>

                        <CardContent className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.org)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Wed
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>

                        <CardContent className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.org)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Thu
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>

                        <CardContent className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.org)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Fri
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>

                        <CardContent className={cx(sty.padding0,calSty.dfjcb ,calSty.w100, calSty.org)}>
                            <CardContent
                                className={cx(
                                    sty.headerStyle,
                                    calSty4.pspan,
                                    sty.padding0, calSty.mr5,
                                    calSty.w100, calSty.jcs
                                )}
                            >
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Sat
                                </Typography>
                                <Typography
                                    className={cx(calSty4.tls1117, sty.pl4, sty.padding0)}
                                >
                                    Unavailabe
                                </Typography>
                            </CardContent>
                            <ImageListItem style={{ "display": "flex", "align-items": "center" }}>
                                <img id="my-element154"  className={cx(sty.imgStyle)} src={plus} alt="close" loading="lazy" />
                                <img id="my-element163" className={cx(sty.imgStyle)} src={weekly} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent> */}

                        {/* foot */}
                        <CardContent className={cx(calSty4.headerStyle)}>
                            <Typography variant="h1" className={cx(calSty4.sechead)}>
                                Add a buffer to your meetings?
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
                                15 Mins Before
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardContent
                            className={cx(
                                sty.borderStyle,
                                calSty.w100,
                                calSty.t61521,
                                calSty4.dfjscbs,
                                calSty.org
                            )}
                        >
                            <Typography
                                variant="h1"
                                className={cx(calSty.t61521, calSty.op1)}
                            >
                                15 Mins After
                            </Typography>
                            <ImageListItem>
                                <img
                                    className={sty.imgStyle}
                                    src={dau}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <CardActions style={{ "margin-top": "10px" }} className={cx(calSty4.cobtn, calSty.jce)}>
                            <Button className={cx(calSty4.flexdl2, calSty4.padd35)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                    Back
                                </Typography>
                            </Button>
                            <Button className={cx(calSty4.flexdl2, calSty4.padd35)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                    Create
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                   
                </Box>
            </StyledEngineProvider>
        </>
    );
}
