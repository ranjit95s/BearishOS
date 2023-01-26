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
                <Box component="EnterName" style={{"height":"150px"}} className={cx(sty2.boxStyle,sty2.wh1)}>
                    <Card className={cx(sty2.inStyle,sty2.wh11)}>
                        <CardContent className={cx(sty2.headerStyle2)}>
                            <Typography variant="h1" className={cx(sty2.t2req)}>
                            Request Sent
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(sty2.headerStyle2)}>
                            <Typography variAnt="h1" className={cx(sty2.ts2req)}>
                            You’re request to access this fork has been successfully sent.
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(sty.btns,sty2.save)} style={{"margin-top":"0px"}}>
                                    <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref,sty2.save)}>
                                        <Button size="small" variant="contained" className={cx(sty2.tmStyle15)}>
                                            Done
                                        </Button>
                                    </CardContent>
                                </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}