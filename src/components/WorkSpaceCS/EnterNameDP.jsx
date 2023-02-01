import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import classes from './EnterName.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function EnterNameDP() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Dropbox
                            </Typography>
                            <ImageListItem id="my-element36">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element36"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <CardContent className={classes.inputStyle}>
                                <input type="text" placeholder='Nickname' name="nickname" id="nickname" />
                                <CardContent className={classes.btns_save} style={{"margin-top":"0px"}}>
                                    <CardContent className={classes.btn_save}>
                                        <Button size="small" variant="contained">
                                            Save
                                        </Button>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                            <CardContent className={classes.inputStyle}>
                            <Typography varient="h1" className={classes.example}>
                                emailexample@example.com
                            </Typography>
                            </CardContent>
                            <CardContent className={classes.btn_refout}>
                                <CardContent className={classes.btn_refresh}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Refresh
                                    </Button>
                                </CardContent>
                                <CardContent className={classes.btn_logout}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Logout
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