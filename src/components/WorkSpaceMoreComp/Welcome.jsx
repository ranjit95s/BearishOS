import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
// import loading from '../img/loading.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import sty2 from './WorkSpace.module.css';
export default function Welcome() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "250px" }} className={cx(sty.boxStyle,sty2.w250)}>
                    <Card className={cx(sty.inStyle,sty2.w2502)}>
                    <CardContent className={cx(sty2.headerStyle2)}>
                            <Typography variant="h1" className={cx(sty2.t2req)}>
                            Welcome!
                            </Typography>
                    </CardContent>
                    <CardContent className={cx(sty2.headerStyle3)}>
                            <Typography variAnt="h1" className={cx(sty2.ts2req)}>
                            To view this item please complete the form. Thank you!
                            </Typography>
                        </CardContent>
                        
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent className={cx(sty.wellM)}>
                                <CardContent className={cx(sty.signIn, sty.wellC,sty2.op12 ,sty2.inputext, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='First Name' name="code" id="code" />
                                </CardContent>
                                <CardContent className={cx(sty.signIn,sty.wellC,sty2.op12 ,sty2.inputext, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='Last Name' name="code" id="code" />
                                </CardContent>
                            </CardContent>
                            <CardContent className={cx(sty.signIn,sty2.op12, sty2.inputext, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Email Address' name="code" id="code" />
                            </CardContent>
                            <CardContent className={cx(sty.btns,sty2.save)} style={{"margin-top":"8px"}}>
                                    <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref,sty2.save)}>
                                        <Button size="small" variant="contained" className={cx(sty2.tmStyle15)}>
                                            Done
                                        </Button>
                                    </CardContent>
                                </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}