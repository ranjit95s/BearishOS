import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty4 from './CalSty4.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Success() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty4.boxWH3)}>
                    <Card className={cx(sty.inStyle, calSty4.boxIn3)}>
                    <CardContent className={cx(calSty4.headerStyle2)}>
                    <Typography varient="h1" className={cx(calSty4.tsucc)}>
                    Success
                            </Typography>
                            <ImageListItem id="my-element63">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element63"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <Typography className={cx(calSty4.tseccStyle,calSty4.tlc)}>
                    You’ve successfully scheduled an event with [First Name, Last Name]
                    </Typography>
                    <Typography className={cx(calSty4.tseccStyle,calSty4.tlc)}>
                    At
                    </Typography>
                    <Typography className={cx(calSty4.tseccStyle,calSty4.tlc)}>
                    January 10th, 2023 at 00:00 AM
                    </Typography>
                    <CardActions className={cx(calSty4.cobtn,calSty4.fdc)}>
                            <Button className={cx(calSty4.flexdl2)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                Add to Calendar
                                </Typography>
                                
                            </Button>
                            <Button className={cx(calSty4.flexdl2)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                Copy Meeting Link
                                </Typography>
                                
                            </Button>
                        </CardActions>
                    
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}