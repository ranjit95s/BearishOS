import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../../img/Close.svg';
import search from '../../img/search.svg';
import edit from '../../img/edit1.svg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Message.module.css';

import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Message() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="msg" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                            Message
                            </Typography>
                            <ImageListItem id="my-element53p0">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element53p0"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardContent className={classes.sim1}>
                            <CardContent className={classes.df}>
                            <ImageListItem style={{ "marginRight": "8px" }}>
                                <img src={search} alt="close" loading="lazy" />
                            </ImageListItem>
                            <CardContent className={classes.searcgM}>
                                <input type="text" placeholder='Search Message' name="code" id="code" />
                            </CardContent>
                            </CardContent>
                            <CardContent className={classes.padding0m0}>
                            <ImageListItem style={{ "marginRight": "8px" }}>
                                <img src={edit} alt="close" loading="lazy" />
                            </ImageListItem>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.flexWS} >
                            <CardContent className={classes.userStyle}>
                                <Typography variant="h5" className={classes.iconU}>
                                    LB
                                </Typography>
                                <CardContent className={classes.flexU}>
                                    <CardContent className={classes.padding0}>
                                        <Typography variant="h5" className={classes.fn}>
                                            Full Name
                                        </Typography>
                                        <Typography variant="h6" className={classes.en}>
                                            narutouzumaki2002@gmail.com
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.flexWS} >
                            <CardContent className={classes.userStyle}>
                                <Typography variant="h5" className={classes.iconU}>
                                    LB
                                </Typography>
                                <CardContent className={classes.flexU}>
                                    <CardContent className={classes.padding0}>
                                        <Typography variant="h5" className={classes.fn}>
                                            Full Name
                                        </Typography>
                                        <Typography variant="h6" className={classes.en}>
                                            narutouzumaki2002@gmail.com
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}