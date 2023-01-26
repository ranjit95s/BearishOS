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
export default function AccessDenied() {
   
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{"height":"150px"}} className={cx(sty2.boxStyle,sty2.wh1)}>
                    <Card className={cx(sty2.inStyle,sty2.wh12)}>
                        <CardContent className={cx(sty2.headerStyle2)}>
                            <Typography variant="h1" className={cx(sty2.t2req)}>
                            Access Denied
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(sty2.headerStyle3)}>
                            <Typography variAnt="h1" className={cx(sty2.ts2req)}>
                            Sorry, you don’t have access to this document. You can request access from the creator below.
                            </Typography>
                        </CardContent>
                        <CardContent className={cx(sty.btns,sty2.w122)} style={{"margin-top":"0px"}}>
                                    <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref,sty2.w122)}>
                                        <Button size="small" variant="contained" className={cx(sty2.tmStyle15)}>
                                            Requested Access
                                        </Button>
                                    </CardContent>
                                </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}