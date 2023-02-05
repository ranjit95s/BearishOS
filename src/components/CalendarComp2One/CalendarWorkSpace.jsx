import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import access from "../img/Access.svg";
import search from "../img/search.svg";
import dau from "../img/dau.png";
import dad from "../img/dad.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import ReqUser from "./ReqUser";
import ToggleUser from "./ToggleUser";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import aaa from './share.module.css'
// import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function CalendarWorkSpace() {
    const [style3, setStyle3] = React.useState(false);
    const [style5, setStyle5] = React.useState(false);
    const [style6, setStyle6] = React.useState(false);
    const [style7, setStyle7] = React.useState(false);
    const [style8, setStyle8] = React.useState(false);
    const [style9, setStyle9] = React.useState(false);
    const [workSpaceName, setWorkSpaceName] = React.useState("[WorkSpace]");
    // const [accessOne, setAccessOne] = React.useState('can edit');
    // const handleChange = (event) => {
    //     setAccessOne(event.target.value)
    // }

    // toggle users
    const changeStyle2 = () => {
        if (style3) {
            setStyle3(false);
        } else {
            setStyle3(true);
        }
    };

    // // requested access => can edit toggle
    // const changeStyle3 = () => {
    //     if (style4) {
    //         setStyle4(false);
    //     }
    //     else {
    //         setStyle4(true);
    //     }
    // };

    const changeStyle8 = () => {
        if (style9) {
            setStyle9(false);
        } else {
            setStyle9(true);
        }
    };

    // all current member can edit toggle
    const changeStyle4 = () => {
        if (style5) {
            setStyle5(false);
        } else {
            setStyle5(true);
        }
    };

    // requested access section toggle
    const changeStyle5 = () => {
        if (style6) {
            setStyle6(false);
        } else {
            setStyle6(true);
        }
    };

    // anyone btn toggle
    const changeStyle6 = () => {
        if (style7) {
            setStyle7(false);
        } else {
            setStyle7(true);
        }
    };

    // can edit toggle beside anyone toggle
    const changeStyle7 = () => {
        if (style8) {
            setStyle8(false);
        } else {
            setStyle8(true);
        }
    };

    const requestedAccessUsers = [
        {
            id: "1",
            ProfilePic: "TU",
            Name: "Full Name 1",
            Email: "narutouzumaki2002@gmail.com",
        },
        {
            id: "2",
            ProfilePic: "TU",
            Name: "Full Name 2",
            Email: "narutouzumaki2002@gmail.com",
        },
    ];

    // const displayRequestedAccessUsers
    //         = requestedAccessUsers.map((d) =>
    //         <CardContent key={d.id} className={aaa.pflexWS} style={{ "flex-direction": "column", "margin-bottom": "20px" }}>
    //         <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} className={aaa.userInfo}>
    //             <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
    //                 {d.ProfilePic}
    //             </Typography>
    //             <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
    //                 <CardContent className={aaa.padding0}>
    //                     <Typography variant="h5" className={aaa.fn}>
    //                         {d.Name}
    //                     </Typography>
    //                     <Typography variant="h6" className={aaa.en}>
    //                         {d.Email}
    //                     </Typography>
    //                 </CardContent>
    //             </CardContent>
    //         </CardContent>
    //         <Stack className={cx(sty.flexAccess)}>
    //         <CardContent  style={{"width":"100px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
    //                 <CardContent onClick={changeStyle3} className={cx(sty.ComposeBtns,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
    //                     <Typography className={cx(sty.t1317,sty.padding0)}>Can Edit</Typography>
    //                     <ImageListItem className={cx(sty.imgr2)}><img src={style4 ? dau : dad} alt="hero" /></ImageListItem>
    //                     <Stack className={aaa.relts}>
    //                         <Stack className={style4 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
    //                             <CardContent className={cx(sty.users2, sty.padding0, sty.tsStyle)} onClick={changeStyle3}>
    //                                 <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
    //                                     Can Edit
    //                                 </Typography>
    //                                 <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
    //                                     Can View
    //                                 </Typography>
    //                                 <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
    //                                     Can Comment
    //                                 </Typography>
    //                                 <Typography variant="contained" className={cx(sty.pbtl, sty.colorr, sty.t1317, sty.padding0)}>
    //                                     Revoke Access
    //                                 </Typography>
    //                             </CardContent>
    //                         </Stack>
    //                     </Stack>
    //                 </CardContent>
    //             </CardContent>
    //             <Stack>
    //                 <CardContent className={cx(sty.btns, sty.ebtns, sty.btna)}>
    //                     <CardContent className={cx(sty.btnIn, sty.ebtnIn, sty.tsStyle, sty.ref)}>
    //                         <Button style={{ "margin-right": "0px" }} variant="contained" className={cx(sty.tmStyle, sty.ewid)}>
    //                             Grant Access
    //                         </Button>
    //                     </CardContent>
    //                 </CardContent>
    //             </Stack>
    //             <ImageListItem id="my-element28" className={cx(sty.imgr)}><ReactTooltip className={sty.tooltip} anchorId="my-element28" type='light' effect='solid'>
    //     <span>Close</span>
    // </ReactTooltip><img src={Close} alt="hero" /></ImageListItem>
    //         </Stack>
    //     </CardContent>
    //         );

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="CWorkSpace"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.tlStyle}>
                                Share This {workSpaceName}
                            </Typography>
                            <ImageListItem
                                className={aaa.relflex}
                            >
                                <img
                                    src={access}
                                    className={aaa.cursor}
                                    id="my-element26"
                                    onClick={changeStyle5}
                                    alt="close"
                                    loading="lazy"
                                />
                                <ReactTooltip
                                    className={aaa.tooltip}
                                    anchorId="my-element26"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Requested Access</span>
                                </ReactTooltip>
                                <Stack
                                    style={{ width: "300px", left: "-18rem", top: "2rem" }}
                                    className={
                                        style6
                                            ? aaa.abs
                                            : aaa.spanHide
                                    }
                                >
                                    <CardContent className={aaa.headerStyle}>
                                        <Typography varient="h1" className={aaa.tmStyle}>
                                            Access Requested By
                                        </Typography>
                                        <ImageListItem id="my-element27">
                                            <ReactTooltip
                                                className={aaa.tooltip}
                                                anchorId="my-element27"
                                                type="light"
                                                effect="solid"
                                            >
                                                <span>Close</span>
                                            </ReactTooltip>
                                            <img
                                                className={aaa.cursor}
                                                src={Close}
                                                alt="close"
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </CardContent>
                                    {requestedAccessUsers?.map((pin) => (
                                        <ReqUser key={pin.id} pin={pin} />
                                    ))}
                                </Stack>
                                <ReactTooltip
                                    className={aaa.tooltip}
                                    anchorId="my-element30"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img
                                    src={Close}
                                    id="my-element30"
                                    className={aaa.imgStyle}
                                    alt="close"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </CardContent>
                        <Stack>
                            <Typography variant="h1" className={aaa.tmsmStyle}>
                                You are about to share {workSpaceName}, and all items within
                                this workspace.
                            </Typography>
                        </Stack>
                        <Stack>
                            <CardContent
                                className={aaa.inputStyle}
                            >
                                <img src={search} alt="close" loading="lazy" />
                                <input
                                    onClick={changeStyle2}
                                    className={aaa.imgr}
                                    type="text"
                                    placeholder="Invite User by Email"
                                    name="Cal"
                                    id="Cal"
                                />
                                <Stack
                                    className={
                                        style3
                                            ? aaa.abs2
                                            : aaa.spanHide
                                    }
                                >
                                    <CardContent className={aaa.pflexWS}>
                                        <CardContent
                                            
                                            className={aaa.userInfo}
                                        >
                                            <Typography
                                                variant="h5"
                                                className={aaa.pic}
                                            >
                                                TU
                                            </Typography>
                                            <CardContent
                                                className={aaa.userE}
                                            >
                                                <CardContent className={aaa.padding0}>
                                                    <Typography
                                                        variant="h5"
                                                        className={aaa.fn}
                                                    >
                                                        Full Name
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        className={aaa.en}
                                                    >
                                                        Email of user
                                                    </Typography>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={aaa.pflexWS}>
                                        <CardContent
                                            className={aaa.userInfo}
                                        >
                                            <Typography
                                                variant="h5"
                                                className={aaa.pic}
                                            >
                                                TU
                                            </Typography>
                                            <CardContent
                                                className={aaa.userE}
                                            >
                                                <CardContent className={aaa.padding0}>
                                                    <Typography
                                                        variant="h5"
                                                        className={aaa.fn}
                                                    >
                                                        Full Name
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        className={aaa.en}
                                                    >
                                                        Email of user
                                                    </Typography>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </Stack>
                            </CardContent>
                        </Stack>
                        <Stack>
                            <CardContent className={aaa.minHeight}>
                                {/* default state */}
                                {requestedAccessUsers?.map((pin) => (
                                    <ToggleUser key={pin.id} pin={pin} />
                                ))}
                            </CardContent>
                        </Stack>
                        <Stack style={{ "margin-top": "20px" }}>
                            <Typography variant="h1" className={aaa.tmsmStyle}>
                                All Current Members
                            </Typography>
                        </Stack>
                        <Stack>
                            <CardContent className={aaa.minHeight2}>
                                {/* default state */}
                                {requestedAccessUsers?.map((pin) => (
                                    <ToggleUser key={pin.id} pin={pin} />
                                ))}
                            </CardContent>
                        </Stack>
                        <Stack
                            className={aaa.flexWS}
                        >
                            <CardContent
                                className={aaa.composeMrll}
                            >
                                <Typography className={aaa.tmsmStyle}>
                                    Sharable Link
                                </Typography>
                            </CardContent>

                            <CardContent
                                style={{ width: "105px" }}
                                className={aaa.composeMrll1}
                            >
                                <CardContent
                                    onClick={changeStyle6}
                                    className={aaa.composeMrll2}
                                >
                                    <Typography className={aaa.bbtext}>
                                        Anyone
                                    </Typography>
                                    <ImageListItem className={aaa.imgr3}>
                                        <img
                                            style={{ width: "20px" }}
                                            src={style7 ? dau : dad}
                                            alt="hero"
                                        />
                                    </ImageListItem>
                                    <Stack className={aaa.relts}>
                                        <Stack
                                            className={
                                                style7
                                                    ? aaa.abs3
                                                    : aaa.spanHide
                                            }
                                        >
                                            <CardContent
                                                className={aaa.usersp}
                                                onClick={changeStyle6}
                                            >
                                                <Typography
                                                    variant="h1"
                                                    className={aaa.mars}
                                                >
                                                    Anyone <br></br>{" "}
                                                    <span>
                                                        {" "}
                                                        Anyone with this link can open this item{" "}
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    variant="h1"
                                                    className={aaa.mars}
                                                >
                                                    Share <br></br>{" "}
                                                    <span>
                                                        {" "}
                                                        Only those shared with above can open this item.
                                                    </span>
                                                </Typography>
                                            </CardContent>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </CardContent>
                            <CardContent
                                style={{ width: "105px" }}
                                className={aaa.composeMrll1}
                            >
                                <CardContent
                                    onClick={changeStyle7}
                                    className={aaa.composeMrll2}
                                >
                                    <Typography className={aaa.bbtext}>
                                        Can Edit
                                    </Typography>
                                    <ImageListItem className={aaa.imgr3}>
                                        <img
                                            style={{ width: "20px" }}
                                            src={style8 ? dau : dad}
                                            alt="hero"
                                        />
                                    </ImageListItem>
                                    <Stack className={aaa.relts}>
                                        <Stack
                                            className={
                                                style8
                                                    ? aaa.abs3
                                                    : aaa.spanHide
                                            }
                                        >
                                            <CardContent
                                                className={aaa.usersp}
                                                onClick={changeStyle7}
                                            >
                                                <Typography
                                                    variant="h1"
                                                    className={aaa.typo}
                                                >
                                                    This Link <br></br> <span>will allow users to </span>
                                                </Typography>
                                                <Typography
                                                    variant="h1"
                                                    className={aaa.marpbtl}
                                                >
                                                    Edit
                                                </Typography>
                                                <Typography
                                                    variant="h1"
                                                    className={aaa.marpbtl}
                                                >
                                                    View
                                                </Typography>
                                                <Typography
                                                    variant="h1"
                                                    className={aaa.marpbtl}
                                                >
                                                    Comment
                                                </Typography>
                                            </CardContent>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack>
                            <CardContent
                                className={aaa.inputStyle}
                            >
                                <input
                                    type="text"
                                    value="app.bearishos.com/shareable-line-example"
                                    name="Cal"
                                    id="Cal"
                                />
                            </CardContent>
                        </Stack>
                        <Stack>
                            <CardContent
                               
                                className={aaa.btn}
                            >
                                <CardContent
                                    className={aaa.btnIn}
                                >
                                    <Button
                                        variant="contained"
                                    >
                                        Update
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
