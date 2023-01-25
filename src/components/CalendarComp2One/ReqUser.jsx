import React, {useState} from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import access from '../img/Access.svg';
import search from '../img/search.svg';
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
export default function ReqUser({pin}) {
    const [style4, setStyle4] = useState(false);
        // requested access => can edit toggle
        const changeStyle3 = () => {
            if (style4) {
                setStyle4(false);
            }
            else {
                setStyle4(true);
            }
        };
    // const pin = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];

    return (
        <>
          <CardContent key={pin.id} className={cx(sty.padding0, sty.flexWS)} style={{ "flex-direction": "column", "margin-bottom": "20px" }}>
            <CardContent style={{ "width": "100%", "display": "flex", "justify-content": "start", "align-items": "center", "padding": "0px", "margin-bottom": "20px" }} ClassName={cx(sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                <Typography variant="h5" className={cx(sty.pic, sty.picc, sty.tmsmStyle, sty.padding0)}>
                    {pin.ProfilePic}
                </Typography>
                <CardContent className={cx(sty.userEmail, sty.flexUser, sty.tmsmStyle, sty.padding0)}>
                    <CardContent className={cx(sty.padding0)}>
                        <Typography variant="h5" className={cx(sty.fn, sty.tmsmStyle)}>
                            {pin.Name}
                        </Typography>
                        <Typography variant="h6" className={cx(sty.en, sty.tssStyle)}>
                            {pin.Email}
                        </Typography>
                    </CardContent>
                </CardContent>
            </CardContent>
            <Stack className={cx(sty.flexAccess)}>
            <CardContent  style={{"width":"100px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
                    <CardContent onClick={changeStyle3} className={cx(sty.ComposeBtns,sty.cursor,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
                        <Typography className={cx(sty.t1317,sty.padding0)}>Can Edit</Typography>
                        <ImageListItem className={cx(sty.imgr2)}><img src={style4 ? dau : dad} alt="hero" /></ImageListItem>
                        <Stack className={cx(sty.tsStyle, sty.rel)}>
                            <Stack className={style4 ? cx(sty.ddd, sty.absf, sty.padding0) : cx(sty.ddd, sty.abs, sty.padding0, sty.spanHide)}>
                                <CardContent className={cx(sty.users2, sty.padding0, sty.tsStyle)} onClick={changeStyle3}>
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
                <Stack>
                    <CardContent className={cx(sty.btns, sty.ebtns, sty.btna)}>
                        <CardContent className={cx(sty.btnIn, sty.ebtnIn, sty.tsStyle, sty.ref)}>
                            <Button style={{ "margin-right": "0px" }} variant="contained" className={cx(sty.tmStyle, sty.ewid)}>
                                Grant Access
                            </Button>
                        </CardContent>
                    </CardContent>
                </Stack>
                <ImageListItem id={"my-element"+pin.id} className={cx(sty.imgr)}><ReactTooltip className={sty.tooltip} anchorId={"my-element"+pin.id} type='light' effect='solid'>
        <span>Close</span>
    </ReactTooltip><img className={sty.cursor} src={Close} alt="hero" /></ImageListItem>
            </Stack>
        </CardContent>
        </>
    );
}
