import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sem from '../img/sgc.png';
import logoM from '../img/LogoM.png'
import gear from '../img/gear.svg';
import ex from '../img/smc.png';
import sol from '../img/smt.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function ConnectAccount_C() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="firstConnect" className={cx(sty.boxStyle)} style={{"height":"300px"}}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography variant="h1" className={cx(sty.tlStyle)}>
                            Connect An Account
                        </Typography>
                        <ImageListItem style={{"display":"flex","align-items": "center"}}>
                            <img id="my-element15" src={gear} alt="close" loading="lazy" />
                            <ReactTooltip className={sty.tooltip} anchorId="my-element15" type='light' effect='solid'>
                                    <span>Manage Connections</span>
                                </ReactTooltip>
                            <img id="my-element16" className={cx(sty.imgStyle)} src={Close} alt="close" loading="lazy" />
                            <ReactTooltip className={sty.tooltip} anchorId="my-element16" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                        </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={logoM} alt="logoM" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Create New Calendar
                        </Typography>
                    </Button>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Google Calendar
                        </Typography>
                    </Button>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sol} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Microsoft Calendar
                        </Typography>
                    </Button>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={ex} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                        Microsoft Teams
                            <span className={cx(sty.spanStyle,sty.tbsStyle)}> Alpha </span>
                        </Typography>
                    </Button>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}