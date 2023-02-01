import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import logoM from '../img/LogoM.png'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './EnterName.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function SuccessName() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="SuccessName" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                            Success
                            </Typography>
                            <ImageListItem id="my-element19">
                                <ReactTooltip className={classes.tooltip} anchorId="my-element19" type='light' effect='solid'>
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <CardContent className={classes.inputStyle}>
                            <ImageListItem style={{ "marginRight": "8px" }}>
                                <img src={logoM} alt="close" loading="lazy" />
                            </ImageListItem>
                                <input type="text" defaultValue="Calendar Name" readOnly name="name" id="name" />
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}