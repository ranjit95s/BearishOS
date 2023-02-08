import React, {useState} from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import dau from '../img/dau.png';
import dad from '../img/dad.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import aaa from './share.module.css'
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
    
    const [op, setOp] = useState('Can Edit');
    const selects = (id) => {
        if (id === 1) {
            setOp('Can Edit');
            setStyle4(false);
        }
        else if (id === 2) {
            setOp('Can View');
            setStyle4(false);
        }
        else if (id === 3){
            setOp('Can Comments')
            setStyle4(false);
        }else {
            console.log('Revoke Access')
            setStyle4(false);
        }
    };
    // const pin = [{"id":"1","ProfilePic":"TU","Name":"Full Name 1","Email":"narutouzumaki2002@gmail.com"},{"id":"2","ProfilePic":"TU","Name":"Full Name 2","Email":"narutouzumaki2002@gmail.com"}];

    return (
        <>
          <CardContent key={pin.id} className={aaa.flreq}>
            <CardContent className={aaa.userInfo}>
                <Typography variant="h5" className={aaa.pic}>
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
                </CardContent>
            </CardContent>
            <Stack className={aaa.flexAccess}>
            <CardContent  style={{"width":"100px"}}  className={aaa.cmsp}>
                    <CardContent onClick={changeStyle3} className={aaa.cbumpt}>
                        <Typography className={aaa.t1317p}>{op}</Typography>
                        <ImageListItem className={aaa.imgr2}><img src={style4 ? dau : dad} alt="hero" /></ImageListItem>
                        <Stack className={aaa.relts}>
                            <Stack className={style4 ? aaa.abs4 : aaa.spanHide}>
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
                <Stack>
                    <CardContent className={aaa.btn2}>
                        <CardContent className={aaa.btnIn2}>
                            <Button style={{ "margin-right": "0px" }} variant="contained">
                                Grant Access
                            </Button>
                        </CardContent>
                    </CardContent>
                </Stack>
                <ImageListItem id={"my-element"+pin.id} className={aaa.imgr}><ReactTooltip className={aaa.tooltip} anchorId={"my-element"+pin.id} type='light' effect='solid'>
        <span>Close</span>
    </ReactTooltip><img className={aaa.cursor} src={Close} alt="hero" /></ImageListItem>
            </Stack>
        </CardContent>
        </>
    );
}
