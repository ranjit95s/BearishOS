import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sem from '../img/sem.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import classes from './TicklingGmail.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
const TicklingtheBackendGmail = () => {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="TicklingtheBackendGmail" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={cx(sty.tlStyle)}>
                        Tickling the Backend
                        </Typography>
                        <ImageListItem id="TicklingtheBackendGmail">
                                <ReactTooltip className={sty.tooltip} anchorId="TicklingtheBackendGmail" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <CardActions  className={classes.signSection}>
                    <Button className={classes.signIn}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                            Google Gmail
                        </Typography>
                    </Button>
                    <Typography className={classes.info}>
                    This page should automatically redirect for you to login to Google Gmail.
                    </Typography>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}

export default TicklingtheBackendGmail;