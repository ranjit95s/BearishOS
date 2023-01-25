import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sem from '../img/smc.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function SuccessMC() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="SuccessGmail" className={cx(sty.boxStyle)} style={{"height":"200px"}}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography varient="h1" className={cx(sty.tlStyle)}>
                        Success
                        </Typography>
                        <ImageListItem id="my-element20">
                                <ReactTooltip className={sty.tooltip} anchorId="my-element20" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sem} alt="email" />
                        <Typography varient="h1" className={cx(sty.inText,sty.tmStyle)}>
                        Microsoft Calendar
                        </Typography>
                    </Button>
                    <Typography className={cx(sty.info,sty.tsStyle)}>
                    Your intelligent connection to Microsoft Calendar was a success.
                    </Typography>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}