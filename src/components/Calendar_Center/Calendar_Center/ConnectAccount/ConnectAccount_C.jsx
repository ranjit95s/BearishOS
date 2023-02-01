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
import { StyledEngineProvider } from '@mui/material/styles';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import classes from './ConnectAccount.module.css'
export default function ConnectAccount_C() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="firstConnect" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={classes.t61825}>
                            Connect An Account
                        </Typography>
                        <ImageListItem className={classes.IconFlex}>
                            <img id="my-element15" src={gear} alt="close" loading="lazy" />
                            <ReactTooltip className={classes.tooltip} anchorId="my-element15" type='light' effect='solid'>
                                    <span>Manage Connections</span>
                                </ReactTooltip>
                            <img id="my-element16" className={classes.imgStyle} src={Close} alt="close" loading="lazy" />
                            <ReactTooltip className={classes.tooltip} anchorId="my-element16" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                        </ImageListItem>
                    </CardContent>
                    <CardActions className={classes.signSection}>
                    <Button className={classes.signIn}>
                        <img src={logoM} alt="logoM" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                            Create New Calendar
                        </Typography>
                    </Button>
                    <Button className={classes.signIn}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                            Google Calendar
                        </Typography>
                    </Button>
                    <Button className={classes.signIn}>
                        <img src={sol} alt="email" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                            Microsoft Calendar
                        </Typography>
                    </Button>
                    <Button className={classes.signIn}>
                        <img src={ex} alt="email" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                        Microsoft Teams
                            <span className={classes.spanStyle}> Alpha </span>
                        </Typography>
                    </Button>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}