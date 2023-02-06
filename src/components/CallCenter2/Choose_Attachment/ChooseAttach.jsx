import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../img/Close.svg";
import Blue from "../../img/bluefile.svg";
import folder from "../../img/folderi.svg";
import dad from "../../img/dad.png";

import shareG from "../../img/shareG.svg";
import dots from "../../img/3dot.svg";
import edit1 from "../../img/edit1.svg";
import add1 from "../../img/Light 1px-add_circled.svg";
import rtrash from "../../img/rtrash.svg";
import b1 from "../../img/bo1.svg";
import cl from "../../img/cl.svg";
import l1 from "../../img/l1.svg";
import wiki from "../../img/wiki.svg";
import note from "../../img/note.svg";
import lap from "../../img/lap1.svg";
import co from "../../img/color.png";
import sl from "../../img/smile.svg";
import sq2 from "../../img/sq2.svg";
import sq from "../../img/sq1.svg";
import search from "../../img/search.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import cx from "classnames";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../../sty.module.css";
// import styCC from "./CallCenter.module.css";
// import calSty from "../../CalendarComp3/CalComp_Sty.module.css";
import aaa from './chooseAttach.module.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function ChooseAttach() {
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [style3, setStyle3] = useState(false);
    const [style4, setStyle4] = useState(false);
    const [style5, setStyle5] = useState(false);
    const [style6, setStyle6] = useState(false);

    const [shareNow, setShareNow] = useState(false);
    const [rename, setRename] = useState(false);
    const [addItem, setAddItem] = useState(false);
    const [moveToFolder, setMoveToFolder] = useState(false);
    const [deletes, setDeletes] = useState(false);

    const [checker, setChecker] = React.useState(true)
    const checkercheck = (id) =>{
            if(checker){
                setChecker(false);
            }else{
                setChecker(true);
    }}

    const shareNow1 = () => {
        if (shareNow) {
            setShareNow(false);
        } else {
            setShareNow(true);
        }
    };
    const rename1 = () => {
        if (rename) {
            setRename(false);
        } else {
            setRename(true);
        }
    };
    const addItem1 = () => {
        if (addItem) {
            setAddItem(false);
        } else {
            setAddItem(true);
        }
    };
    const moveToFolder1 = () => {
        if (moveToFolder) {
            setMoveToFolder(false);
        } else {
            setMoveToFolder(true);
        }
    };
    // toggle file
    const changeStyle2 = () => {
        if (style3) {
            setStyle3(false);
        } else {
            setStyle3(true);
        }
    };
    const changeStyle3 = () => {
        if (style4) {
            setStyle4(false);
        } else {
            setStyle4(true);
        }
    };
    const changeStyle4 = () => {
        if (style5) {
            setStyle5(false);
        } else {
            setStyle5(true);
        }
    };
    const changeStyle5 = () => {
        if (style6) {
            setStyle6(false);
        } else {
            setStyle6(true);
        }
    };
    const deletes1 = () => {
        if (deletes) {
            setDeletes(false);
        } else {
            setDeletes(true);
        }
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="chooseAttach"
                    className={aaa.boxStyle}
                >
                    <Card
                        className={aaa.inStyle}
                    >
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.tlStyle}>
                                Choose your Attachment
                            </Typography>
                            <ImageListItem id="my-element502">
                                <ReactTooltip
                                    className={aaa.tooltip} //remain
                                    anchorId="my-element5l2"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} id="my-element5l2" alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={aaa.signSec}>
                            <Typography className={aaa.info}>
                                Choose a service you would like to attach your item from below,
                                then choose the item(s) you would like to attach.
                            </Typography>
                        </CardActions>
                        <Stack className={aaa.mainStack}>
                            <CardContent
                                className={
                                    aaa.ComposeBtns
                                }
                            >
                                <Typography
                                    className={aaa.tls1521}
                                >
                                    Add Now
                                </Typography>
                                <ImageListItem>
                                    <img src={dad} alt="hero" />
                                </ImageListItem>
                            </CardContent>
                        </Stack>
                        <Stack className={aaa.mainStacks}>
                            <Typography
                                variant="h4"
                                className={aaa.textt}
                            >
                                "Bearish OS" Cloud Storage
                            </Typography>
                            <CardContent
                                className={
                                    aaa.signIn
                                }
                            >
                                <ImageListItem style={{ "marginRight": "5px" }}>
                                    <img src={search} alt="dad" loading="lazy" />
                                </ImageListItem>
                                <input
                                    onClick={changeStyle2}
                                    type="text"
                                    placeholder="Search"
                                    name="code"
                                    id="code"
                                />
                                <Stack
                                    className={
                                        style3
                                            ? aaa.abs : aaa.spanHide
                                    }
                                >
                                    <CardContent
                                        className={aaa.iconF}
                                    >
                                        <ImageListItem
                                            className={aaa.imgS}
                                        >
                                            <img src={search} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography
                                            variant="h1"
                                            className={aaa.stext}
                                        >
                                            Search All Items
                                        </Typography>
                                    </CardContent>
                                    <CardContent
                                        className={aaa.boxf}
                                    >
                                        <CardContent className={aaa.iconF1}>
                                            <ImageListItem
                                                className={aaa.imgS}
                                            >
                                                <img src={folder} alt="dad" loading="lazy" />
                                            </ImageListItem>
                                            <Typography
                                                variant="h1"
                                                className={aaa.stext}
                                            >
                                                Your folder name here
                                            </Typography>
                                        </CardContent>
                                        <ImageListItem
                                            className={sty.rel}
                                            style={{ "margin-right": "5px" }}
                                        >
                                            <img
                                                src={dots}
                                                onClick={changeStyle3}
                                                alt="dad"
                                                loading="lazy"
                                            />
                                            <Stack
                                                className={
                                                    style4
                                                        ? aaa.abs1
                                                        : aaa.spanHide
                                                }
                                            >
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={shareG} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Share Now
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    onClick={rename1}
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={edit1} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Rename
                                                    </Typography>
                                                    <Stack
                                                        className={
                                                            rename
                                                                ? aaa.abs2 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            style={{ padding: "15px" }}
                                                            className={aaa.ho100}
                                                        >
                                                            <input
                                                                placeholder="[Rename File]"
                                                                className={aaa.hinput}
                                                                type="text"
                                                                name="link"
                                                                id="link"
                                                            />
                                                            <CardContent
                                                                className={aaa.btnStyle}
                                                                style={{ "margin-top": "15px" }}
                                                            >
                                                                <button
                                                                    style={{ color: "seagreen" }}
                                                                    className={aaa.btnStyles}
                                                                >
                                                                    {" "}
                                                                    Rename{" "}
                                                                </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent
                                                    onClick={addItem1}
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={add1} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Add Items
                                                    </Typography>
                                                    <Stack
                                                        className={
                                                            addItem
                                                                ? aaa.abs3 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={b1} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Boards
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={cl} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Checklists
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={lap} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Whiteboards
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={l1} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Lists
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={wiki} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Docs & Wikis
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={note} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Notes
                                                            </Typography>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent
                                                    onClick={moveToFolder1}
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={aaa.ddt}>
                                                        Move To Folder
                                                    </Typography>
                                                    <Stack
                                                        style={{ width: "200px" }}
                                                        className={
                                                            moveToFolder
                                                                ? aaa.abs4 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            style={{ padding: "0px" }}
                                                            className={aaa.ho100}
                                                        >
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.folderTitle}
                                                            >
                                                                Folder Name
                                                            </Typography>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.folderTitle}
                                                            >
                                                                Folder Name
                                                            </Typography>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.folderTitle}
                                                            >
                                                                Folder Name
                                                            </Typography>
                                                            <CardContent
                                                                className={aaa.btnStyle}
                                                                style={{ "margin-top": "10px" }}
                                                            >
                                                                <button
                                                                    style={{ color: "seagreen" }}
                                                                    className={aaa.btnStyles}
                                                                >
                                                                    {" "}
                                                                    Move Now{" "}
                                                                </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={co} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Item Color
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Analysis
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={sl} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Comments
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={rtrash} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        onClick={deletes1}
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Delete
                                                    </Typography>
                                                    <Stack
                                                        style={{ width: "200px" }}
                                                        className={
                                                            deletes
                                                                ? aaa.abs5 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            style={{ padding: "0px" }}
                                                            className={aaa.ho100}
                                                        >
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.dt}
                                                            >
                                                                Delete Workspace
                                                            </Typography>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.infod}
                                                            >
                                                                You are about to delete [Workspace] with [0000]
                                                                item(s) within it. If you are sure you want to
                                                                do this, type the name of the workspace below.
                                                                This action can not be undone.
                                                            </Typography>
                                                            <CardContent
                                                                style={{ padding: "7px" }}
                                                                className={
                                                                    aaa.redI2
                                                                }
                                                            >
                                                                <input
                                                                    placeholder="Type name of workspace (case sensitive)"
                                                                    className={aaa.redII}
                                                                    type="text"
                                                                    name="link"
                                                                    id="link"
                                                                />
                                                            </CardContent>
                                                            <CardContent
                                                                className={aaa.redII2}
                                                            >
                                                                <button
                                                                    className={aaa.redII}
                                                                >
                                                                    {" "}
                                                                    Permanently Delete Now{" "}
                                                                </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                            </Stack>
                                        </ImageListItem>
                                    </CardContent>
                                </Stack>
                            </CardContent>
                        </Stack>

                        <CardContent
                            className={aaa.an}

                        >
                            <Typography
                                variant="h1"
                                className={aaa.em}
                                onClick={changeStyle4}
                            ></Typography>
                            <ImageListItem>
                                <img
                                    src={dad}
                                    onClick={changeStyle4}
                                    alt="dad"
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <Stack
                                    className={
                                        style5
                                            ? aaa.abs : aaa.spanHide
                                    }
                                >
                                    <CardContent
                                        className={aaa.iconF}
                                    >
                                        <ImageListItem
                                            className={aaa.imgS}
                                        >
                                            <img src={search} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography
                                            variant="h1"
                                            className={aaa.stext}
                                        >
                                            Search All Folder
                                        </Typography>
                                    </CardContent>
                                    <CardContent
                                        className={aaa.boxf}
                                    >
                                        <CardContent className={aaa.iconF1}>
                                            <ImageListItem
                                                className={aaa.imgS}
                                            >
                                                <img src={folder} alt="dad" loading="lazy" />
                                            </ImageListItem>
                                            <Typography
                                                variant="h1"
                                                className={aaa.stext}
                                            >
                                                Your folder name here
                                            </Typography>
                                        </CardContent>
                                        <ImageListItem
                                            className={sty.rel}
                                            style={{ "margin-right": "5px" }}
                                        >
                                            <img
                                                src={dots}
                                                onClick={changeStyle5}
                                                alt="dad"
                                                loading="lazy"
                                            />
                                            <Stack
                                                className={
                                                    style6
                                                        ? aaa.abs1
                                                        : aaa.spanHide
                                                }
                                            >
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={shareG} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Share Now
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    onClick={rename1}
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={edit1} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Rename
                                                    </Typography>
                                                    <Stack
                                                        className={
                                                            rename
                                                                ? aaa.abs2 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            style={{ padding: "15px" }}
                                                            className={aaa.ho100}
                                                        >
                                                            <input
                                                                placeholder="[Rename File]"
                                                                className={aaa.hinput}
                                                                type="text"
                                                                name="link"
                                                                id="link"
                                                            />
                                                            <CardContent
                                                                className={aaa.btnStyle}
                                                                style={{ "margin-top": "15px" }}
                                                            >
                                                                <button
                                                                    style={{ color: "seagreen" }}
                                                                    className={aaa.btnStyles}
                                                                >
                                                                    {" "}
                                                                    Rename{" "}
                                                                </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent
                                                    onClick={addItem1}
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={add1} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Add Items
                                                    </Typography>
                                                    <Stack
                                                        className={
                                                            addItem
                                                                ? aaa.abs3 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={b1} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Boards
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={cl} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Checklists
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={lap} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Whiteboards
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={l1} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Lists
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={wiki} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Docs & Wikis
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent
                                                            className={aaa.iconF2}
                                                        >
                                                            <ImageListItem
                                                                style={{
                                                                    "margin-right": "10px",
                                                                    width: "25px",
                                                                }}
                                                            >
                                                                <img src={note} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.ddt}
                                                            >
                                                                Notes
                                                            </Typography>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent
                                                    onClick={moveToFolder1}
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={aaa.ddt}>
                                                        Move To Folder
                                                    </Typography>
                                                    <Stack
                                                        style={{ width: "200px" }}
                                                        className={
                                                            moveToFolder
                                                                ? aaa.abs4 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            style={{ padding: "0px" }}
                                                            className={aaa.ho100}
                                                        >
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.folderTitle}
                                                            >
                                                                Folder Name
                                                            </Typography>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.folderTitle}
                                                            >
                                                                Folder Name
                                                            </Typography>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.folderTitle}
                                                            >
                                                                Folder Name
                                                            </Typography>
                                                            <CardContent
                                                                className={aaa.btnStyle}
                                                                style={{ "margin-top": "10px" }}
                                                            >
                                                                <button
                                                                    style={{ color: "seagreen" }}
                                                                    className={aaa.btnStyles}
                                                                >
                                                                    {" "}
                                                                    Move Now{" "}
                                                                </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={co} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Item Color
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Analysis
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={sl} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Comments
                                                    </Typography>
                                                </CardContent>
                                                <CardContent
                                                    className={aaa.iconF2}
                                                >
                                                    <ImageListItem
                                                        className={aaa.imgS}
                                                    >
                                                        <img src={rtrash} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography
                                                        onClick={deletes1}
                                                        variant="h1"
                                                        className={aaa.ddt}
                                                    >
                                                        Delete
                                                    </Typography>
                                                    <Stack
                                                        style={{ width: "200px" }}
                                                        className={
                                                            deletes
                                                                ? aaa.abs5 : aaa.spanHide
                                                        }
                                                    >
                                                        <CardContent
                                                            style={{ padding: "0px" }}
                                                            className={aaa.ho100}
                                                        >
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.dt}
                                                            >
                                                                Delete Workspace
                                                            </Typography>
                                                            <Typography
                                                                variant="h1"
                                                                className={aaa.infod}
                                                            >
                                                                You are about to delete [Workspace] with [0000]
                                                                item(s) within it. If you are sure you want to
                                                                do this, type the name of the workspace below.
                                                                This action can not be undone.
                                                            </Typography>
                                                            <CardContent
                                                                style={{ padding: "7px" }}
                                                                className={
                                                                    aaa.redI2
                                                                }
                                                            >
                                                                <input
                                                                    placeholder="Type name of workspace (case sensitive)"
                                                                    className={aaa.redI}
                                                                    type="text"
                                                                    name="link"
                                                                    id="link"
                                                                />
                                                            </CardContent>
                                                            <CardContent
                                                                className={aaa.redII2}
                                                            >
                                                                <button
                                                                    className={aaa.redII}
                                                                >
                                                                    {" "}
                                                                    Permanently Delete Now{" "}
                                                                </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                            </Stack>
                                        </ImageListItem>
                                    </CardContent>
                                </Stack>
                        </CardContent>

                        <Stack className={aaa.ImainStack}>
                            <CardContent
                                className={aaa.inStack}
                            >
                                <ImageListItem className={aaa.checkers}>
                                            <img src={checker ? sq : sq2} onClick={() => checkercheck(1)} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                <ImageListItem style={{ "marginRight": "5px" }}>
                                    <img src={Blue} alt="dad" loading="lazy" />
                                </ImageListItem>
                                <Typography
                                    variant="h1"
                                    className={aaa.tt}
                                >
                                    Item Name
                                </Typography>
                            </CardContent>
                        </Stack>

                        <Stack className={aaa.addnowStack}>
                            <CardContent
                                className={aaa.btn}
                            >
                                <CardContent
                                    className={aaa.btnIn}
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
