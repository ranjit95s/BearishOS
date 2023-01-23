import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import access from '../img/Access.png';
import search from '../img/search.png';
import dau from '../img/dau.png';
import dad from '../img/dad.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
// import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function CalendarWorkSpace() {
    const [style3, setStyle3] = React.useState(false);
    const [style4, setStyle4] = React.useState(false);
    const [style5, setStyle5] = React.useState(false);
    const [style6, setStyle6] = React.useState(false);
    const [style7, setStyle7] = React.useState(false);
    const [style8, setStyle8] = React.useState(false);
    const [workSpaceName, setWorkSpaceName] = React.useState('[WorkSpace]');
    // const [accessOne, setAccessOne] = React.useState('can edit');
    // const handleChange = (event) => {
    //     setAccessOne(event.target.value)
    // }

    const changeStyle2 = () => {
        if (style3) {
            setStyle3(false);
        }
        else {
            setStyle3(true);
        }
    };
    const changeStyle3 = () => {
        if (style4) {
            setStyle4(false);
        }
        else {
            setStyle4(true);
        }
    };
    const changeStyle4 = () => {
        if (style5) {
            setStyle5(false);
        }
        else {
            setStyle5(true);
        }
    };
    const changeStyle5 = () => {
        if (style6) {
            setStyle6(false);
        }
        else {
            setStyle6(true);
        }
    };
    const changeStyle6 = () => {
        if (style7) {
            setStyle7(false);
        }
        else {
            setStyle7(true);
        }
    };
    const changeStyle7 = () => {
        if (style8) {
            setStyle8(false);
        }
        else {
            setStyle8(true);
        }
    };
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="CWorkSpace" style={{ "height": "600px", "width": "400px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "width": "350px" }}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Share This {workSpaceName}
                            </Typography>
                            <ImageListItem className={cx(sty.rel)} style={{ "display": "flex", "align-items": "center" }}>
                                <img src={access} id="my-element26" onClick={changeStyle6} alt="close" loading="lazy" />
                                <ReactTooltip className={sty.tooltip} anchorId="my-element26" type='light' effect='solid'>
                                    <span>Requested Access</span>
                                </ReactTooltip>
                                <Stack style={{ "width": "300px", "left": "-18rem", "top": "2rem" }} className={style7 ? cx(sty.ddd, sty.abs, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                    <CardContent className={cx(sty.headerStyle)} >
                                        <Typography varient="h1" className={cx(sty.tmStyle)}>
                                            Access Requested By
                                        </Typography>
                                        <ImageListItem id="my-element27">
                                <ReactTooltip className={sty.tooltip} anchorId="my-element27" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                                    </CardContent>
                                    <CardContent className={cx(sty.padding0, sty.flexWS)} style={{ "flex-direction": "column", "margin-bottom": "20px" }}>
                                        <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                            <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                                TU
                                            </Typography>
                                            <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                                <CardContent className={cx(sty.padding0)}>
                                                    <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                        Full Name
                                                    </Typography>
                                                    <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                        Email of user
                                                    </Typography>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                        <Stack className={cx(sty.flexAccess)}>
                                            <CardContent style={{ "margin-left": "0px" }} className={cx(sty.ComposeBtns, sty.tsStyle,sty.padding0)}>
                                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography onClick={changeStyle3} className={cx(sty.t1317)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr)}><img src={style4 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style4 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle3}>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.mar, sty.colorr, sty.t1317, sty.padding0)}>
                                                                    Revoke Access
                                                                </Typography>
                                                            </CardContent>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </CardContent>
                                            <Stack>
                                                <CardContent className={cx(sty.btns, sty.ebtns, sty.btna)}>
                                                    <CardContent className={cx(sty.btnIn, sty.ebtnIn, sty.tsStyle, sty.ref)}>
                                                        <Button style={{ "margin-right": "0px" }} variant="contained" className={cx(sty.tmStyle, sty.ewid)}>
                                                            Grant Access
                                                        </Button>
                                                    </CardContent>
                                                </CardContent>
                                            </Stack>
                                            <ImageListItem id="my-element28" className={cx(sty.imgr)}><ReactTooltip className={sty.tooltip} anchorId="my-element28" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip><img src={Close} alt="hero" /></ImageListItem>
                                        </Stack>
                                    </CardContent>

                                    <CardContent className={cx(sty.padding0, sty.flexWS)} style={{ "flex-direction": "column", "margin-bottom": "20px" }}>
                                        <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                            <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                                TU
                                            </Typography>
                                            <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                                <CardContent className={cx(sty.padding0)}>
                                                    <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                        Full Name
                                                    </Typography>
                                                    <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                        Email of user
                                                    </Typography>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                        <Stack className={cx(sty.flexAccess)}>
                                            <CardContent style={{ "margin-left": "0px" }} className={cx(sty.ComposeBtns, sty.tsStyle,sty.padding0)}>
                                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography onClick={changeStyle3} className={cx(sty.t1317)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr)}><img src={style4 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style4 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle3}>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.mar, sty.colorr, sty.t1317, sty.padding0)}>
                                                                    Revoke Access
                                                                </Typography>
                                                            </CardContent>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </CardContent>
                                            <Stack>
                                                <CardContent className={cx(sty.btns, sty.ebtns, sty.btna)}>
                                                    <CardContent className={cx(sty.btnIn, sty.ebtnIn, sty.tsStyle, sty.ref)}>
                                                        <Button style={{ "margin-right": "0px" }} variant="contained" className={cx(sty.tmStyle, sty.ewid)}>
                                                            Grant Access
                                                        </Button>
                                                    </CardContent>
                                                </CardContent>
                                            </Stack>
                                            <ImageListItem id="my-element29" className={cx(sty.imgr)}><ReactTooltip className={sty.tooltip} anchorId="my-element29" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip><img src={Close} alt="hero" /></ImageListItem>
                                        </Stack>

                                    </CardContent>

                                </Stack>
                                <ReactTooltip className={sty.tooltip} anchorId="my-element30" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} id="my-element30" className={cx(sty.imgStyle)} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Stack>
                            <Typography variant="h1" className={cx(sty.tmsmStyle)}>You are about to share [Name of Workspace], and all items within this workspace.</Typography>
                        </Stack>
                        <Stack>
                            <CardContent className={cx(sty.signIn, sty.rel, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <img src={search} alt="close" loading="lazy" />
                                <input onClick={changeStyle2} className={cx(sty.imgr)} type="text" placeholder='Invite User by Email' name="Cal" id="Cal" />
                                <Stack className={style3 ? cx(sty.ddd, sty.abs, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                    <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                        <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                            <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                                TU
                                            </Typography>
                                            <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                                <CardContent className={cx(sty.padding0)}>
                                                    <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                        Full Name
                                                    </Typography>
                                                    <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                        Email of user
                                                    </Typography>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                        <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                            <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                                TU
                                            </Typography>
                                            <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                                <CardContent className={cx(sty.padding0)}>
                                                    <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                        Full Name
                                                    </Typography>
                                                    <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
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
                            <CardContent className={cx(sty.minHeight, sty.padding0)}>
                                {/* default state */}
                                <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                    Email of user
                                                </Typography>
                                            </CardContent>
                                            <CardContent className={cx(sty.ComposeBtns, sty.tsStyle,sty.padding0)}>
                                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography onClick={changeStyle3} className={cx(sty.t1317,sty.pl4,sty.padding0)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr)}><img src={style4 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style4 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle3}>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.mar, sty.colorr, sty.t1317, sty.padding0)}>
                                                                    Revoke Access
                                                                </Typography>
                                                            </CardContent>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack style={{ "margin-top": "20px" }}>
                            <Typography variant="h1" className={cx(sty.tmsmStyle)}>All Current Members</Typography>
                        </Stack>
                        <Stack>
                            <CardContent className={cx(sty.minHeights, sty.padding0)}>
                                {/* default state */}
                                <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                    Email of user
                                                </Typography>
                                            </CardContent>
                                            <CardContent className={cx(sty.ComposeBtns, sty.tsStyle,sty.padding0)}>
                                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography onClick={changeStyle4} className={cx(sty.t1317,sty.pl4,sty.padding0)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr)}><img src={style5 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style5 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle4}>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.mar, sty.colorr, sty.t1317, sty.padding0)}>
                                                                    Revoke Access
                                                                </Typography>
                                                            </CardContent>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>

                                <CardContent className={cx(sty.padding0, sty.flexWS)}>
                                    <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                                            TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                                            <CardContent className={cx(sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                                                    Email of user
                                                </Typography>
                                            </CardContent>
                                            <CardContent className={cx(sty.ComposeBtns, sty.tsStyle,sty.padding0)}>
                                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography onClick={changeStyle4} className={cx(sty.t1317,sty.pl4,sty.padding0)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr)}><img src={style5 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style5 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle4}>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.mar, sty.colorr, sty.t1317, sty.padding0)}>
                                                                    Revoke Access
                                                                </Typography>
                                                            </CardContent>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </CardContent>
                                        </CardContent>
                                    </CardContent>
                                </CardContent>



                            </CardContent>
                        </Stack>
                        <Stack style={{ "margin-top": "20px", "margin-bottom": "20px", "flex-direction": "row" }} className={cx(sty.flexWS)}>
                            <CardContent className={cx(sty.ComposeBtns, sty.tmsmStyle)}>
                                <Typography className={cx(sty.tmsmStyle)}>Sharable Link</Typography>
                            </CardContent>

                            <CardContent className={cx(sty.ComposeBtns, sty.tsStyle)}>
                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                    <Typography onClick={changeStyle5} className={cx(sty.t1317,sty.pl4,sty.padding0)}>Anyone</Typography>
                                    <ImageListItem className={cx(sty.imgr)}><img src={style6 ? dau : dad} alt="hero" /></ImageListItem>
                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                        <Stack className={style6 ? cx(sty.ddd, sty.abss, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle5}>
                                                <Typography variant="h1" className={cx(sty.mars, sty.tsStyle, sty.padding0)}>
                                                    Anyone <br></br> <span> Anyone with this link can open this item </span>
                                                </Typography>
                                                <Typography variant="h1" className={cx(sty.mars, sty.tsStyle, sty.padding0)}>
                                                    Share <br></br> <span> Only those shared with above can open this item.</span>
                                                </Typography>

                                            </CardContent>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </CardContent>

                            <CardContent className={cx(sty.ComposeBtns, sty.tsStyle,sty.padding0)}>
                                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                    <Typography onClick={changeStyle7} className={cx(sty.t1317,sty.pl4,sty.padding0)}>Can Edit</Typography>
                                    <ImageListItem className={cx(sty.imgr)}><img src={style5 ? dau : dad} alt="hero" /></ImageListItem>
                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                        <Stack className={style8 ? cx(sty.ddd, sty.absc, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle4}>
                                                <Typography variant="h1" className={cx(sty.mars, sty.tsStyle, sty.padding0)}>
                                                    This Link <br></br> <span>will allow users to </span>
                                                </Typography>
                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                    Edit
                                                </Typography>
                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                    View
                                                </Typography>
                                                <Typography variant="h1" className={cx(sty.mar, sty.t1317, sty.padding0)}>
                                                    Comment
                                                </Typography>
                                            </CardContent>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </CardContent>

                        </Stack>
                        <Stack>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" value="app.bearishos.com/shareable-line-example" readonly name="Cal" id="Cal" />
                            </CardContent>
                        </Stack>
                        <Stack>
                            <CardContent style={{ "display": "flex", "justify-content": "end" }} className={cx(sty.btns, sty.ebtns)}>
                                <CardContent style={{ "display": "flex", "justify-content": "end" }} className={cx(sty.btnIn, sty.ebtnIn, sty.tsStyle, sty.ref)}>
                                    <Button style={{ "margin-right": "0px" }} variant="contained" className={cx(sty.tmStyle, sty.ewid)}>
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