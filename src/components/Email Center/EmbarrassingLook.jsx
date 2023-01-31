import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sol from '../img/sol.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function EmbarrassingLook() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="EmbarrassingLook" className={cx(sty.boxStyle)}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Well this is Embarrassing
                        </Typography>
                        <ImageListItem id="my-element7">
                                <ReactTooltip  anchorId="my-element7" className={sty.tooltip} type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sol} alt="email" />
                        <Typography varient="h1" className={cx(sty.inText,sty.tmStyle)}>
                        Microsoft Outlook
                        </Typography>
                    </Button>
                    <Typography className={cx(sty.info,sty.tsStyle)}>
                    Your intelligent connection to Microsoft Outlook failed. Please press connect and try to 
                    connect your account again. Need help? Submit a ticket below.
                    </Typography>
                    <CardActions className={cx(sty.cobtn)}>
                            <Button className={cx(sty.flexdl2)}>
                                <Typography
                                    variant="h1"
                                    className={cx(sty.tmStyle)}
                                >
                                Submit a Ticket
                                </Typography>
                                
                            </Button>
                        </CardActions>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}