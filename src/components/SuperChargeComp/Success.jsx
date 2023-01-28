import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sem from '../img/sgc.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import stySC from './superC.module.css';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
export default function Success() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="SuccessGmail" className={cx(sty.boxStyle)} style={{"height":"200px"}}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography varient="h1" className={cx(stySC.th1521)}>
                        Success
                        </Typography>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Typography className={cx(stySC.th31521)}>
                    Your recording has been successfully saved, you can view, edit, adjust, and share it from here.
                    </Typography>
                    </CardActions>
                    <CardContent className={cx(sty.btns, stySC.cbtn1)}>
                            <CardContent className={cx(sty.btnIn, stySC.ttstyle, sty.ref, stySC.cbtn1, calSty.op1)}>
                                <Button variant="contained" className={cx(stySC.ttstyle)}>
                                    Go to Supercharges
                                </Button>
                            </CardContent>
                        </CardContent>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}