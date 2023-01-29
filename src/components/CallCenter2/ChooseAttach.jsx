import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import Blue from '../img/bluefile.svg';
import folder from '../img/folderi.svg';
import dad from '../img/dad.png';
import search from '../img/search.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import styCC from './CallCenter.module.css';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function ChooseAttach() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [style3, setStyle3] = React.useState(false);

    const [shareNow, setShareNow] = useState(false);
    const [rename, setRename] = useState(false);
    const [addItem, setAddItem] = useState(false);
    const [moveToFolder, setMoveToFolder] = useState(false);
    const [deletes, setDeletes] = useState(false);

    const shareNow1 = () => {
        if (shareNow) {
            setShareNow(false);
        }
        else {
            setShareNow(true);
        }
    };
    const rename1 = () => {
        if (rename) {
            setRename(false);
        }
        else {
            setRename(true);
        }
    };
    const addItem1 = () => {
        if (addItem) {
            setAddItem(false);
        }
        else {
            setAddItem(true);
        }
    };
    const moveToFolder1 = () => {
        if (moveToFolder) {
            setMoveToFolder(false);
        }
        else {
            setMoveToFolder(true);
        }
    };
    // toggle file
    const changeStyle2 = () => {
        if (style3) {
            setStyle3(false);
        }
        else {
            setStyle3(true);
        }
    };
    const deletes1 = () => {
        if (deletes) {
            setDeletes(false);
        }
        else {
            setDeletes(true);
        }
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "fit-content", "width": "500px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "height": "fit-content", "width": "475px" }}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Choose your Attachment
                            </Typography>
                            <ImageListItem id="my-element502">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element502"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <Typography className={cx(sty.info2, sty.tmsmStyle)}>
                                Choose a service you would like to attach your item from below, then choose the item(s) you would like to attach.
                            </Typography>
                        </CardActions>
                        <Stack className={cx(calSty.mainStack, calSty.mt10, calSty.jcs)}>
                            <CardContent
                                style={{ "margin-left": "0px" }}
                                className={cx(
                                    sty.ComposeBtns,
                                    sty.borderStyle,
                                    styCC.tls1521,
                                    sty.padding0,
                                )}
                            >
                                <Typography
                                    className={cx(styCC.tls1521, sty.pl4, sty.padding0)}
                                >
                                    Add Now
                                </Typography>
                                <ImageListItem>
                                    <img src={dad} alt="hero" />
                                </ImageListItem>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(styCC.mainStack, calSty.mt10)}>
                            <Typography variant="h4"
                                className={cx(styCC.textt, sty.pl4, sty.padding0)}
                            >
                                "Bearish OS" Cloud Storage
                            </Typography>
                            <CardContent className={cx(sty.signIn, sty.rel, styCC.ali, calSty.signCal, styCC.t61521, sty.inputStyle, sty.NickStyle)}>
                                <ImageListItem style={{ "margin-right": "5px" }} >
                                    <img src={search} alt="dad" loading="lazy" />
                                </ImageListItem>
                                <input onClick={changeStyle2} type="text" placeholder='Search' name="code" id="code" />
                                <Stack className={style3 ? cx(sty.ddd, styCC.abs, sty.padding0) : cx(sty.ddd, styCC.abs, sty.padding0, sty.spanHide)}>
                                    <CardContent style={{ "margin-top": "5px", "margin-bottom": "8px" }} className={cx(sty.padding0, styCC.iconF)}>
                                        <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                            <img src={search} alt="dad" loading="lazy" />
                                        </ImageListItem>
                                        <Typography variant="h1" className={cx(styCC.stext, calSty.tmr)}>
                                            Search All Items
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={cx(sty.headerStyle, styCC.boxf, sty.padding0)}>
                                        <CardContent className={cx(sty.padding0, styCC.iconF)}>
                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                <img src={folder} alt="dad" loading="lazy" />
                                            </ImageListItem>
                                            <Typography variant="h1" className={cx(styCC.stext, calSty.tmr)}>
                                                Your folder name here
                                            </Typography>
                                        </CardContent>
                                        <ImageListItem className={sty.rel} style={{ "margin-right": "5px" }}>
                                            <img src={Close} alt="dad" loading="lazy" />
                                            <Stack className={style3 ? cx(sty.ddd, styCC.extra, styCC.abs, sty.padding0) : cx(sty.ddd, styCC.abs, sty.padding0, sty.spanHide)}>
                                                <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Share Now
                                                    </Typography>
                                                </CardContent>
                                                <CardContent onClick={rename1} className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Rename
                                                    </Typography>
                                                    <Stack className={rename ? cx(sty.ddd, styCC.extra1, styCC.abs, sty.padding0) : cx(sty.ddd, styCC.abs, sty.padding0, sty.spanHide)}>
                                                        <CardContent style={{ "padding": "15px" }} className={cx(sty.hoverBody, sty.w100)} >
                                                            <input placeholder="[Rename File]" className={cx(sty.borderStyle, styCC.hinput)} type="text" name="link" id="link" />
                                                            <CardContent className={cx(sty.btnStyle)} style={{ "margin-top": "15px" }}>
                                                                <button style={{"color":"seagreen"}} className={cx(sty.btnStyles)}> Rename </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent onClick={addItem1} className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Add Items
                                                    </Typography>
                                                    <Stack className={addItem ? cx(sty.ddd, styCC.extra2, styCC.abs, sty.padding0) : cx(sty.ddd, styCC.abs, sty.padding0, sty.spanHide)}>
                                                        <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                                <img src={folder} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                                Boards
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                                <img src={folder} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                                Checklists
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                                <img src={folder} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                                Whiteboards
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                                <img src={folder} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                                Lists
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                                <img src={folder} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                                Docs & Wikis
                                                            </Typography>
                                                        </CardContent>
                                                        <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                            <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                                <img src={folder} alt="dad" loading="lazy" />
                                                            </ImageListItem>
                                                            <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                                Notes
                                                            </Typography>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent onClick={moveToFolder1} className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt)}>
                                                        Move To Folder
                                                    </Typography>
                                                    <Stack style={{"width":"200px"}} className={moveToFolder ? cx(sty.ddd, styCC.extra3, styCC.abs, sty.padding0) : cx(sty.ddd, styCC.abs, sty.padding0, sty.spanHide)}>
                                                        <CardContent style={{ "padding": "10px" }} className={cx(sty.hoverBody, sty.w100)} >
                                                        <Typography variant="h1" className={cx(styCC.ddt, styCC.mt,sty.w100,styCC.hinput)}>
                                                                Folder Name
                                                            </Typography>
                                                        <Typography variant="h1" className={cx(styCC.ddt, styCC.mt,sty.w100,styCC.hinput)}>
                                                                Folder Name
                                                            </Typography>
                                                        <Typography variant="h1" className={cx(styCC.ddt, styCC.mt,sty.w100,styCC.hinput)}>
                                                                Folder Name
                                                            </Typography>
                                                            <CardContent className={cx(sty.btnStyle)} style={{ "margin-top": "10px" }}>
                                                                <button style={{"color":"seagreen"}} className={cx(sty.btnStyles)}> Move Now </button>
                                                            </CardContent>
                                                        </CardContent>
                                                    </Stack>
                                                </CardContent>
                                                <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Item Color
                                                    </Typography>
                                                </CardContent>
                                                <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Analysis
                                                    </Typography>
                                                </CardContent>
                                                <CardContent className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Comments
                                                    </Typography>
                                                </CardContent>
                                                <CardContent  className={cx(styCC.martr, styCC.iconF, sty.rel)}>
                                                    <ImageListItem style={{ "margin-right": "10px", "width": "25px" }}>
                                                        <img src={folder} alt="dad" loading="lazy" />
                                                    </ImageListItem>
                                                    <Typography onClick={deletes1} variant="h1" className={cx(styCC.ddt, calSty.tmr)}>
                                                        Delete
                                                    </Typography>
                                                    <Stack style={{"width":"200px"}} className={deletes ? cx(sty.ddd, styCC.extra4, styCC.abs, sty.padding0) : cx(sty.ddd, styCC.abs, sty.padding0, sty.spanHide)}>
                                                        <CardContent style={{ "padding": "0px" }} className={cx(sty.hoverBody, sty.w100)} >
                                                        <Typography variant="h1" className={cx(styCC.ddt, styCC.mt,sty.w100,styCC.dtext)}>
                                                        Delete Workspace
                                                            </Typography>
                                                        <Typography variant="h1" className={cx(styCC.ddt, styCC.mt,sty.w100,styCC.ddtext)}>
                                                        You are about to delete [Workspace] with [0000] item(s) within it. If you are sure you want to do this, type the name of the workspace below. This action can not be undone.
                                                            </Typography>
                                                            <CardContent style={{ "padding": "7px" }} className={cx(sty.hoverBody, sty.w100,styCC.redI2)} >
                                                            <input placeholder="Type name of workspace (case sensitive)" className={cx(sty.borderStyle, styCC.redI)} type="text" name="link" id="link" />
                                                            
                                                        </CardContent>
                                                            <CardContent className={cx(sty.btnStyle,styCC.redII2)} style={{ "margin-top": "10px","margin-bottom":"10px" }}>
                                                                <button className={cx(styCC.btnStyles,styCC.redII)}> Permanently Delete Now </button>
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

                        <CardContent style={{ "width": "350px" }} className={cx(sty.borderStyle, calSty.mt10, calSty.t61521, calSty.dateTimeFlex)}>
                            <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                            </Typography>
                            <ImageListItem >
                                <img src={dad} alt="dad" loading="lazy" />
                            </ImageListItem>
                        </CardContent>

                        <Stack className={cx(styCC.mainStack, styCC.flow, calSty.mt10)}>
                            <CardContent className={cx(sty.headerStyle, styCC.fileFlex, sty.padding0, calSty.jcs)}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <ImageListItem style={{ "margin-right": "5px" }}>
                                    <img src={Blue} alt="dad" loading="lazy" />
                                </ImageListItem>
                                <Typography variant="h1" className={cx(styCC.flowT, calSty.tmr, calSty.op1)}>
                                    Item Name
                                </Typography>
                            </CardContent>
                            <CardContent className={cx(sty.headerStyle, styCC.fileFlex, sty.padding0, calSty.jcs)}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <ImageListItem style={{ "margin-right": "5px" }}>
                                    <img src={Blue} alt="dad" loading="lazy" />
                                </ImageListItem>
                                <Typography variant="h1" className={cx(styCC.flowT, calSty.tmr, calSty.op1)}>
                                    Item Name
                                </Typography>
                            </CardContent>
                        </Stack>

                        <Stack className={cx(calSty.mainStack, calSty.mt10, calSty.jce)}>
                            <CardContent className={cx(sty.btns, calSty.saved)} style={{ "margin-top": "19px", "margin-bottom": "10px" }}>
                                <CardContent className={cx(sty.btnIn, sty.tmStyle, sty.ref, calSty.saved)}>
                                    <Button style={{ "width": "124px" }} variant="contained" className={cx(sty.tmStyle)}>
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