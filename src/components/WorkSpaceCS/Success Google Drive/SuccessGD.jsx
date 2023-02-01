import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import sem from '../img/sgd.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import classes from './Success.module.css'

const SuccessGD = () => {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="SuccessGD" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={classes.t61825}>
                        Success
                        </Typography>
                        <ImageListItem id="my-element40">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element40"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <CardActions className={classes.signSection}>
                    <Button className={classes.signIn}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1"
                                    className={classes.signOption}>
                            Box
                        </Typography>
                    </Button>
                    <Typography className={classes.info}>
                    Your intelligent connection to Box was a success.
                    </Typography>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}

export default SuccessGD;