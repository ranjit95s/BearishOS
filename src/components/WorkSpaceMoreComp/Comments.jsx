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
import sty2 from './WorkSpace.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Comments() {
 
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={cx(sty2.boxStyle)}>
                    <Card className={cx(sty2.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Comments
                            </Typography>
                            <ImageListItem id="my-element78">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element78"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        


                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}