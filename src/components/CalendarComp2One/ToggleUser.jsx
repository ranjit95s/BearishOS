import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import dau from '../img/dau.png';
import dad from '../img/dad.png';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import sty from '../sty.module.css';
import aaa from './share.module.css'
export default function ToggleUser({pin}) {
    const [style9, setStyle9] = useState(false);
        // search => can edit toggle
        const changeStyle8 = () => {
            if (style9) {
                setStyle9(false);
            }
            else {
                setStyle9(true);
            }
        };
        const [op, setOp] = useState('Can Edit');
        const selects = (id) => {
            if (id === 1) {
                setOp('Can Edit');
                setStyle9(false);
            }
            else if (id === 2) {
                setOp('Can View');
                setStyle9(false);
            }
            else if (id === 3){
                setOp('Can Comments')
                setStyle9(false);
            }else {
                console.log('Revoke Access')
                setStyle9(false);
            }
        };
    // const pin = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];

    return (
        <>
          <CardContent key={pin.id} className={aaa.pflexWS}>
                                    <CardContent className={aaa.userInfo}>
                                        <Typography variant="h5"  className={aaa.pic}>
                                            {pin.ProfilePic}
                                        </Typography>
                                        <CardContent className={aaa.userE}>
                                            <CardContent className={aaa.padding0}>
                                                <Typography variant="h5" className={aaa.fn}>
                                                    {pin.Name}
                                                </Typography>
                                                <Typography variant="h6" className={aaa.en}>
                                                    {pin.Email}
                                                </Typography>
                                            </CardContent>
                                            <CardContent  style={{"width":"100px"}}  className={aaa.cmsp}>
                    <CardContent onClick={changeStyle8} className={aaa.cbumpt}>
                        <Typography className={aaa.t1317p}>{op}</Typography>
                        <ImageListItem className={aaa.imgr2}><img src={style9 ? dau : dad} alt="hero" /></ImageListItem>
                        <Stack className={aaa.relts}>
                            <Stack className={style9 ? aaa.abs4 : aaa.spanHide}>
                                <CardContent className={aaa.users2}>
                                    <Typography variant="h1" onClick={(e) => {e.stopPropagation(); selects(1)}} className={aaa.marpbtl}>
                                        Can Edit
                                    </Typography>
                                    <Typography variant="h1" onClick={(e) => {e.stopPropagation(); selects(2)}} className={aaa.marpbtl}>
                                        Can View
                                    </Typography>
                                    <Typography variant="h1" onClick={(e) => {e.stopPropagation(); selects(3)}} className={aaa.marpbtl}>
                                        Can Comment
                                    </Typography>
                                    <Typography variant="contained" onClick={(e) => {e.stopPropagation(); selects(4)}} className={aaa.colories}>
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
