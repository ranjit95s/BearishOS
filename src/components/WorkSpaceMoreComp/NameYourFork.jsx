import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import sty2 from './WorkSpace.module.css';
export default function NameYourFork() {
   
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={cx(sty2.boxStyle,sty2.wh1)}>
                    <Card className={cx(sty2.inStyle,sty2.wh11)}>
                        <CardContent className={cx(sty2.headerStyle)}>
                            <Typography varient="h1" className={cx(sty2.t1215)}>
                            Name your Fork
                            </Typography>
                        </CardContent>
                        
                        <CardActions className={cx(sty2.mrt10,sty.signSec)}>
                            <CardContent className={cx(sty2.mrt10,sty.signIn, sty2.tt1215, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Fork of Document' name="code" id="code" />
                                <CardContent className={cx(sty.btns,sty.save)} style={{"margin-top":"0px"}}>
                                    <CardContent className={cx(sty2.op1,sty.btnIn, sty2.tt1215, sty2.ref,sty.save,sty2.hover)}>
                                        <Button size="small" variant="contained" className={cx(sty.tt1215)}>
                                            Go
                                        </Button>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardActions>

                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}