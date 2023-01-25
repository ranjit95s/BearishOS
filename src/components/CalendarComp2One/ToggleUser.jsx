import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import dau from '../img/dau.png';
import dad from '../img/dad.png';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import sty from '../sty.module.css';

export default function ToggleUser({pin}) {
    const [style9, setStyle9] = useState(false);
        // requested access => can edit toggle
        const changeStyle8 = () => {
            if (style9) {
                setStyle9(false);
            }
            else {
                setStyle9(true);
            }
        };
    // const pin = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];

    return (
        <>
          <CardContent key={pin.id} className={cx(sty.padding0, sty.flexWS)}>
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
                                            <CardContent  style={{"width":"100px"}}  className={cx(sty.ComposeBtns,sty.mrll, sty.tsStyle,sty.padding0)}>
                                                <CardContent onClick={changeStyle8} className={cx(sty.ComposeBtns,sty.cursor,sty.mrll,sty.pl4 ,sty.borderStyle, sty.tsStyle,sty.padding0)}>
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
        </>
    );
}
