import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/l.svg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import aaa from './ret.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Comments() {
 
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={aaa.boxStyle}>
                    <Card className={aaa.inStyle}>
                        <CardContent className={aaa.headerStyle}>
                            <ImageListItem style={{"marginLeft":"10px"}} id="my-element78">
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                            <Typography varient="h1" className={cx(aaa.tlStyle)}>
                            Return to Original Documents
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}