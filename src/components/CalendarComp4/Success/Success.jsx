import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import aaa from './Success.module.css';
export default function Success() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="success" className={aaa.boxStyle}>
                    <Card className={aaa.boxIn}>
                    <CardContent className={aaa.headerStyle}>
                    <Typography variant="h1" className={aaa.tsucc}>
                    Success
                            </Typography>
                            <ImageListItem id="my-element63">
                                <ReactTooltip
                                    className={aaa.tooltip}
                                    anchorId="my-element63"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <Typography className={aaa.tlc}>
                    You’ve successfully scheduled an event with [First Name, Last Name]
                    </Typography>
                    <Typography className={aaa.tlc}>
                    At
                    </Typography>
                    <Typography className={aaa.tlc}>
                    January 10th, 2023 at 00:00 AM
                    </Typography>
                    <CardActions className={aaa.cobtn}>
                            <Button className={aaa.flexdl2}>
                                <Typography
                                    varient="h1"
                                    className={aaa.tsecStyle}
                                >
                                Add to Calendar
                                </Typography>
                                
                            </Button>
                            <Button className={aaa.flexdl2}>
                                <Typography
                                    varient="h1"
                                    className={aaa.tsecStyle}
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