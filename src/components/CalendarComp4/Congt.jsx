import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty4 from './CalSty4.module.css';
import aaa from './Success.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Congt() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="cong" className={aaa.boxStyle}>
                    <Card className={aaa.boxIn}>
                    <CardContent className={aaa.headerStyle}>
                    <Typography variant="h1" className={aaa.tcongt}>
                    Congradulations!
                            </Typography>
                            <ImageListItem id="my-element62">
                                <ReactTooltip
                                    className={aaa.tooltip}
                                    anchorId="my-element62"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <Typography className={aaa.tlc}>
                    You’re scheduling link is live and ready to go.
                    </Typography>
                    <Typography className={aaa.tlc}>
                    app.bearishos.com/name/custom
                    </Typography>
                    <CardActions className={aaa.cobtn}>
                            <Button className={aaa.flexdl2} style={{"width":"100px"}}>
                                <Typography
                                    varient="h1"
                                    className={aaa.tsecStyle}
                                >
                                Copy Link
                                </Typography>
                                
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}