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
import ReqUser from './ReqUser'
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
    const [style9, setStyle9] = React.useState(false);
    const [workSpaceName, setWorkSpaceName] = React.useState('[WorkSpace]');
    // const [accessOne, setAccessOne] = React.useState('can edit');
    // const handleChange = (event) => {
    //     setAccessOne(event.target.value)
    // }

    // toggle users
    const changeStyle2 = () => {
        if (style3) {
            setStyle3(false);
        }
        else {
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
        }
        else {
            setStyle9(true);
        }
    };

    // all current member can edit toggle
    const changeStyle4 = () => {
        if (style5) {
            setStyle5(false);
        }
        else {
            setStyle5(true);
        }
    };

    // requested access section toggle
    const changeStyle5 = () => {
        if (style6) {
            setStyle6(false);
        }
        else {
            setStyle6(true);
        }
    };

    // anyone btn toggle
    const changeStyle6 = () => {
        if (style7) {
            setStyle7(false);
        }
        else {
            setStyle7(true);
        }
    };

    // can edit toggle beside anyone toggle
    const changeStyle7 = () => {
        if (style8) {
            setStyle8(false);
        }
        else {
            setStyle8(true);
        }
    };

    const requestedAccessUsers = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];
    const toggleUsers = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];
    const addedUsers = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];
    const allMUsers = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];

    // const displayRequestedAccessUsers
    //         = requestedAccessUsers.map((d) => 
    //         <CardContent key={d.id} className={cx(sty.padding0, sty.flexWS)} style={{ "flex-direction": "column", "margin-bottom": "20px" }}>
    //         <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
    //             <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
    //                 {d.ProfilePic}
    //             </Typography>
    //             <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
    //                 <CardContent className={cx(sty.padding0)}>
    //                     <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
    //                         {d.Name}
    //                     </Typography>
    //                     <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
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
    //                     <Stack className={cx(sty.tsStyle, sty.rel)}>
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
                <Box component="CWorkSpace" style={{ "height": "600px", "width": "400px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "width": "350px" }}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Share This {workSpaceName}
                            </Typography>
                            <ImageListItem className={cx(sty.rel)} style={{ "display": "flex", "align-items": "center" }}>
                                <img src={access} id="my-element26" onClick={changeStyle5} alt="close" loading="lazy" />
                                <ReactTooltip className={sty.tooltip} anchorId="my-element26" type='light' effect='solid'>
                                    <span>Requested Access</span>
                                </ReactTooltip>
                                <Stack style={{ "width": "300px", "left": "-18rem", "top": "2rem" }} className={style6 ? cx(sty.ddd, sty.abs, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
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
                                    {requestedAccessUsers?.map((pin) => <ReqUser key={pin.id} pin={pin} />)}
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
                                <Stack className={style3 ? cx(sty.ddd, sty.ext, sty.abs, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
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
                                            <CardContent  style={{"width":"100px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
                                                <CardContent onClick={changeStyle8} className={cx(sty.ComposeBtns,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography className={cx(sty.t1317,sty.padding0)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr2)}><img src={style9 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style9 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users2, sty.padding0, sty.tsStyle)} onClick={changeStyle8}>
                                                                <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.pbtl, sty.colorr, sty.t1317, sty.padding0)}>
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
                                             <CardContent  style={{"width":"100px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
                                                <CardContent onClick={changeStyle4} className={cx(sty.ComposeBtns,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography className={cx(sty.t1317,sty.padding0)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr2)}><img src={style5 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style5 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users2, sty.padding0, sty.tsStyle)} onClick={changeStyle4}>
                                                                <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
                                                                    Can Edit
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
                                                                    Can View
                                                                </Typography>
                                                                <Typography variant="h1" className={cx(sty.pbtl, sty.t1317, sty.padding0)}>
                                                                    Can Comment
                                                                </Typography>
                                                                <Typography variant="contained" className={cx(sty.pbtl, sty.colorr, sty.t1317, sty.padding0)}>
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
                            <CardContent className={cx(sty.ComposeBtns,sty.mrll, sty.tmsmStyle)}>
                                <Typography className={cx(sty.tmsmStyle)}>Sharable Link</Typography>
                            </CardContent>

                            <CardContent  style={{"width":"105px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
                                                <CardContent onClick={changeStyle6} className={cx(sty.ComposeBtns,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography className={cx(sty.t1317,sty.padding0,sty.p33)}>Anyone</Typography>
                                                    <ImageListItem className={cx(sty.imgr3)}><img src={style7 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style7 ? cx(sty.ddd, sty.abss, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle6}>
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

                                            <CardContent  style={{"width":"105px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
                                                <CardContent onClick={changeStyle7} className={cx(sty.ComposeBtns,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
                                                    <Typography className={cx(sty.t1317,sty.padding0,sty.p33)}>Can Edit</Typography>
                                                    <ImageListItem className={cx(sty.imgr3)}><img src={style8 ? dau : dad} alt="hero" /></ImageListItem>
                                                    <Stack className={cx(sty.tsStyle, sty.rel)}>
                                                        <Stack className={style8 ? cx(sty.ddd, sty.abss, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                                            <CardContent className={cx(sty.users, sty.padding0, sty.tsStyle)} onClick={changeStyle7}>
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
                                <input type="text" value="app.bearishos.com/shareable-line-example" name="Cal" id="Cal" />
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